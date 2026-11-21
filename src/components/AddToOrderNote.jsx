"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Plus } from "lucide-react";

const parsePrice = (value) => {
  const match = String(value || "").match(/(\d+[,.]\d{2})\s*€/);
  if (!match) return null;
  return Math.round(Number(match[1].replace(",", ".")) * 100);
};

function addItem(item) {
  const key = "rustibo-order-note";
  let items = [];
  try {
    items = JSON.parse(localStorage.getItem(key) || "[]");
  } catch {}
  const existing = items.find((entry) => entry.id === item.id);
  if (existing) existing.quantity += 1;
  else items.push({ ...item, quantity: 1 });
  localStorage.setItem(key, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("rustibo:order-note", { detail: items }));
}

export default function AddToOrderNote({ product, category }) {
  const [addedId, setAddedId] = useState(null);
  const confirmationTimer = useRef(null);
  const rowTimer = useRef(null);

  useEffect(() => () => {
    window.clearTimeout(confirmationTimer.current);
    window.clearTimeout(rowTimer.current);
  }, []);

  const handleAdd = (item, event) => {
    addItem(item);
    window.dispatchEvent(new CustomEvent("rustibo:order-item-added", { detail: { id: item.id, name: item.name } }));
    setAddedId(item.id);
    window.clearTimeout(confirmationTimer.current);
    confirmationTimer.current = window.setTimeout(() => setAddedId(null), 1500);

    const row = event.currentTarget.closest(".menu-item-row");
    if (row) {
      row.classList.remove("is-note-added");
      void row.offsetWidth;
      row.classList.add("is-note-added");
      window.clearTimeout(rowTimer.current);
      rowTimer.current = window.setTimeout(() => row.classList.remove("is-note-added"), 1000);
    }
  };

  const options = product.precio?.includes("|")
    ? product.precio.split("|").map((option) => {
        const [size, priceText] = option.split(":").map((part) => part.trim());
        return { size, priceText, cents: parsePrice(priceText) };
      }).filter((option) => option.cents !== null)
    : [{ size: "", priceText: product.precio, cents: parsePrice(product.precio) }];

  if (!options.length || options.some((option) => option.cents === null)) {
    return <span className="order-note-unavailable">Consultar precio</span>;
  }

  return (
    <div className="order-note-add-options" aria-label={`Añadir ${product.nombre} a la nota`}>
      {options.map((option) => {
        const name = option.size ? `${product.nombre} (${option.size})` : product.nombre;
        const id = `${category}:${product.id}:${option.size || "normal"}`;
        return (
          <button
            key={option.size || "normal"}
            type="button"
            className={`order-note-add-button ${addedId === id ? "is-added" : ""}`}
            onClick={(event) => handleAdd({ id, name, cents: option.cents, category }, event)}
            aria-label={addedId === id ? `${name} añadido a la nota` : `Añadir ${name}, ${option.priceText}`}
            aria-live="polite"
          >
            {addedId === id ? <Check className="order-note-added-check" size={15} strokeWidth={3} /> : <Plus size={15} strokeWidth={3} />}
            {addedId === id ? `Añadido${option.size ? ` · ${option.size}` : ""}` : option.size || "Añadir"}
          </button>
        );
      })}
    </div>
  );
}
