export const metadata = {
  title: "Aviso legal | Rustibo",
};

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-6xl uppercase text-[var(--color-green-dark)]">Aviso legal</h1>
      <div className="mt-6 rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-6 font-normal leading-relaxed text-[var(--color-gray-text)]">
        <p>
          Esta página recoge información general de Rustibo Menjars per Emportar en Alzira. Para datos fiscales,
          condiciones completas o cualquier consulta legal, contacta directamente con el establecimiento.
        </p>
        <p className="mt-4">Teléfono: 962 41 39 48. Dirección: Carrer Pastora, 9, 46600 Alzira, Valencia.</p>
      </div>
    </main>
  );
}
