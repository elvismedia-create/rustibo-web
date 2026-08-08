export const metadata = {
  title: "Aviso legal | Rustibo",
  description: "Aviso legal de Rustibo Alzira: titularidad, datos de contacto, condiciones de uso, propiedad intelectual y responsabilidad.",
};

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-6xl uppercase text-[var(--color-green-dark)]">Aviso legal</h1>
      <div className="mt-6 space-y-7 rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-6 font-normal leading-relaxed text-[var(--color-gray-text)]">
        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">1. Datos identificativos</h2>
          <p className="mt-2">
            En cumplimiento del deber de información previsto en la normativa aplicable, se informa de que este sitio web corresponde a Rustibó, establecimiento de comida para llevar y domicilio en Alzira.
          </p>
          <ul className="mt-3 space-y-1">
            <li><strong>Nombre comercial:</strong> Rustibó</li>
            <li><strong>Titular fiscal:</strong> Rustibo Menjar Per Emportar, S.L.</li>
            <li><strong>CIF:</strong> B97837645.</li>
            <li><strong>Domicilio:</strong> Carrer Pastora, 9, 46600 Alzira, Valencia.</li>
            <li><strong>Teléfono:</strong> 962 41 39 48.</li>
            <li><strong>Sitio web:</strong> www.rustibo.net.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">2. Objeto del sitio web</h2>
          <p className="mt-2">
            La web ofrece información sobre la carta, promociones, novedades, datos de contacto y servicio de recogida en tienda o entrega a domicilio de Rustibó en Alzira.
          </p>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">3. Condiciones de uso</h2>
          <p className="mt-2">
            La persona usuaria se compromete a utilizar este sitio web de forma lícita, respetando la legislación vigente, la buena fe y el orden público. Queda prohibido utilizar la web con fines ilícitos o que puedan dañar, inutilizar o sobrecargar el sitio.
          </p>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">4. Información de productos y precios</h2>
          <p className="mt-2">
            Rustibó procura mantener actualizada la información de productos, promociones y precios. No obstante, los precios, disponibilidad y condiciones pueden variar según mercado, temporada o cambios de carta. La confirmación final del pedido se realizará por teléfono o directamente en tienda.
          </p>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">5. Propiedad intelectual</h2>
          <p className="mt-2">
            Los contenidos, textos, diseño, fotografías, logotipos y elementos gráficos de este sitio web pertenecen a Rustibó o se utilizan con autorización o licencia. No se permite su reproducción, distribución o transformación sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">6. Responsabilidad</h2>
          <p className="mt-2">
            Rustibó no se responsabiliza de interrupciones del servicio, errores técnicos, contenidos de terceros enlazados o daños derivados de un uso inadecuado del sitio web. La información sobre alérgenos es orientativa y debe confirmarse en tienda antes de realizar el pedido.
          </p>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">7. Protección de datos y cookies</h2>
          <p className="mt-2">
            El tratamiento de datos personales y el uso de cookies se regulan en la Política de privacidad y en la Política de cookies disponibles en esta web.
          </p>
        </section>

        <section>
          <h2 className="text-3xl uppercase text-[var(--color-green-dark)]">8. Legislación aplicable</h2>
          <p className="mt-2">
            Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable.
          </p>
        </section>
      </div>
    </main>
  );
}
