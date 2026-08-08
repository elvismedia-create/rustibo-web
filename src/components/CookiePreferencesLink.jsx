"use client";

export default function CookiePreferencesLink({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("rustibo:open-cookie-preferences"))}
      className={className}
    >
      Configuración de cookies
    </button>
  );
}
