"use client";

import { useEffect, useMemo, useState } from "react";
import { Minus, Phone, Plus, ReceiptText, Trash2, X } from "lucide-react";

const STORAGE_KEY = "rustibo-order-note";
const formatPrice = (cents) => `${(cents / 100).toFixed(2).replace(".", ",")} €`;

export default function OrderNote() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [notePulse, setNotePulse] = useState(false);
  const [addedNotice, setAddedNotice] = useState("");

  useEffect(() => {
    const readItems = (event) => {
      const nextItems = event?.detail || (() => {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
        catch { return []; }
      })();
      setItems(Array.isArray(nextItems) ? nextItems : []);
    };
    readItems();
    window.addEventListener("rustibo:order-note", readItems);
    window.addEventListener("storage", readItems);
    const open = () => setIsOpen(true);
    window.addEventListener("rustibo:open-order-note", open);
    let pulseTimer;
    let noticeTimer;
    const showAddedFeedback = (event) => {
      const name = event.detail?.name;
      if (!name) return;
      setNotePulse(false);
      requestAnimationFrame(() => setNotePulse(true));
      setAddedNotice(name);
      window.clearTimeout(pulseTimer);
      window.clearTimeout(noticeTimer);
      pulseTimer = window.setTimeout(() => setNotePulse(false), 700);
      noticeTimer = window.setTimeout(() => setAddedNotice(""), 1900);
    };
    window.addEventListener("rustibo:order-item-added", showAddedFeedback);
    return () => {
      window.removeEventListener("rustibo:order-note", readItems);
      window.removeEventListener("storage", readItems);
      window.removeEventListener("rustibo:open-order-note", open);
      window.removeEventListener("rustibo:order-item-added", showAddedFeedback);
      window.clearTimeout(pulseTimer);
      window.clearTimeout(noticeTimer);
    };
  }, []);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.cents * item.quantity, 0), [items]);

  const updateQuantity = (id, amount) => {
    const updated = items.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("rustibo:order-note", { detail: updated }));
  };

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("rustibo:order-note", { detail: updated }));
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("rustibo:order-note", { detail: [] }));
  };

  return (
    <>
      <button type="button" className={`order-note-fab ${items.length ? "has-items" : ""} ${notePulse ? "order-note-trigger-pulse" : ""}`} onClick={() => setIsOpen(true)} aria-label={`Abrir nota de pedido, ${items.length} artículos`}>
        <ReceiptText size={20} />
        <span>Mi nota</span>
        {items.length > 0 && <b>{items.reduce((sum, item) => sum + item.quantity, 0)}</b>}
      </button>
      {addedNotice && (
        <div className="order-note-toast" role="status" aria-live="polite">
          <span className="order-note-toast-check"><span>✓</span></span>
          <span><strong>Añadido a Mi nota</strong><small>{addedNotice}</small></span>
        </div>
      )}
      {isOpen && (
        <div className="order-note-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
          <section className="order-note-paper" role="dialog" aria-modal="true" aria-labelledby="order-note-title">
            <div className="order-note-paper-top" />
            <header className="order-note-header">
              <div><p>Rustibó · Para llevar</p><h2 id="order-note-title">Mi nota</h2></div>
              <button type="button" className="order-note-close" onClick={() => setIsOpen(false)} aria-label="Cerrar nota"><X /></button>
            </header>
            {items.length ? (
              <>
                <button className="order-note-clear" type="button" onClick={clear}>
                  <Trash2 size={15} /> Vaciar toda la nota
                </button>
                <div className="order-note-items">
                  {items.map((item) => (
                    <article className="order-note-line" key={item.id}>
                      <div className="order-note-item-copy"><strong>{item.name}</strong><span>{formatPrice(item.cents)} cada uno</span></div>
                      <div className="order-note-quantity">
                        <button type="button" className="order-note-remove-item" onClick={() => removeItem(item.id)} aria-label={`Borrar ${item.name} de la nota`} title="Borrar producto"><Trash2 size={15} /></button>
                        <button type="button" onClick={() => updateQuantity(item.id, -1)} aria-label={`Quitar una unidad de ${item.name}`} title="Quitar una unidad"><Minus size={14} /></button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, 1)} aria-label={`Añadir una unidad de ${item.name}`}><Plus size={14} /></button>
                      </div>
                      <strong className="order-note-subtotal">{formatPrice(item.cents * item.quantity)}</strong>
                    </article>
                  ))}
                </div>
                <div className="order-note-total"><span>Total orientativo</span><strong>{formatPrice(total)}</strong></div>
                <p className="order-note-disclaimer">Anota aquí lo que quieres y llámanos para hacer el pedido. Los precios pueden variar.</p>
                <a className="order-note-call" href="tel:962413948"><Phone size={19} /> Llamar al 962 41 39 48</a>
              </>
            ) : (
              <div className="order-note-empty"><ReceiptText size={36} /><strong>Tu nota está vacía</strong><p>Añade platos desde la carta y aparecerán aquí con su precio.</p></div>
            )}
            <footer className="order-note-footer">
              <span>Esta nota solo sirve para apuntar. El pedido se realiza por teléfono.</span>
              <strong>Envío a domicilio: pedido mínimo de 12 €.</strong>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
