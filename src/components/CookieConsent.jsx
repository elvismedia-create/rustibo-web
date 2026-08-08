"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "rustibo_cookie_preferences";

const defaultPreferences = {
  necessary: true,
  analytics: false,
};

export default function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setIsOpen(true);
    }

    const openPreferences = () => {
      const current = window.localStorage.getItem(STORAGE_KEY);
      if (current) {
        try {
          setPreferences({ ...defaultPreferences, ...JSON.parse(current) });
        } catch {
          setPreferences(defaultPreferences);
        }
      }
      setShowSettings(true);
      setIsOpen(true);
    };

    window.addEventListener("rustibo:open-cookie-preferences", openPreferences);
    setIsReady(true);

    return () => {
      window.removeEventListener("rustibo:open-cookie-preferences", openPreferences);
    };
  }, []);

  const savePreferences = (nextPreferences) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...nextPreferences,
        savedAt: new Date().toISOString(),
      }),
    );
    setPreferences(nextPreferences);
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isReady || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-5 text-[var(--color-gray-text)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-brand-menu text-3xl uppercase leading-none text-[var(--color-green-dark)]">
              Configuración de cookies
            </h2>
            <p className="mt-2 text-sm font-normal leading-relaxed">
              Usamos cookies técnicas necesarias para que la web funcione. Las cookies de analítica solo se activarían con tu permiso si incorporamos medición de visitas.
            </p>
            <Link href="/cookies" className="mt-2 inline-flex text-sm font-semibold text-[var(--color-green-dark)] hover:underline">
              Ver política de cookies
            </Link>

            {showSettings ? (
              <div className="mt-4 grid gap-3 text-sm">
                <label className="flex items-start gap-3 rounded-xl border border-[var(--color-green-border)] p-3">
                  <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[var(--color-green-dark)]" />
                  <span>
                    <strong className="block text-[var(--color-green-dark)]">Cookies necesarias</strong>
                    Imprescindibles para navegación, seguridad y preferencias básicas. No se pueden desactivar desde este panel.
                  </span>
                </label>
                <label className="flex items-start gap-3 rounded-xl border border-[var(--color-green-border)] p-3">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                    className="mt-1 h-4 w-4 accent-[var(--color-green-dark)]"
                  />
                  <span>
                    <strong className="block text-[var(--color-green-dark)]">Analítica</strong>
                    Nos ayudaría a medir visitas y mejorar la web. Ahora mismo no cargamos scripts de analítica.
                  </span>
                </label>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:min-w-[360px] lg:flex-col">
            {showSettings ? (
              <button
                type="button"
                onClick={() => savePreferences(preferences)}
                className="font-brand-menu rounded-xl bg-[var(--color-lime)] px-5 py-3 text-xl uppercase text-[var(--color-green-dark)]"
              >
                Guardar selección
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="font-brand-menu rounded-xl border border-[var(--color-green-border)] px-5 py-3 text-xl uppercase text-[var(--color-green-dark)]"
              >
                Configurar
              </button>
            )}
            <button
              type="button"
              onClick={() => savePreferences(defaultPreferences)}
              className="font-brand-menu rounded-xl border border-[var(--color-green-border)] px-5 py-3 text-xl uppercase text-[var(--color-green-dark)]"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => savePreferences({ necessary: true, analytics: true })}
              className="font-brand-menu rounded-xl bg-[var(--color-green-dark)] px-5 py-3 text-xl uppercase text-[var(--color-white)]"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
