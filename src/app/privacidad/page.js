export const metadata = {
  title: "Privacidad | Rustibo",
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-6xl uppercase text-[var(--color-green-dark)]">Privacidad</h1>
      <div className="mt-6 rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-6 font-normal leading-relaxed text-[var(--color-gray-text)]">
        <p>
          Rustibo solo debe solicitar los datos necesarios para atender consultas o pedidos. Si contactas por teléfono,
          tus datos se usarán únicamente para gestionar el servicio solicitado.
        </p>
        <p className="mt-4">
          Para ejercer cualquier derecho relacionado con tus datos, contacta con Rustibo en el 962 41 39 48.
        </p>
      </div>
    </main>
  );
}
