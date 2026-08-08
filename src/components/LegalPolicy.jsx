export const privacySections = [
  {
    title: "1. Información que recopilamos",
    content: [
      "En Rustibó, estamos comprometidos a proteger y respetar su privacidad. Esta política de privacidad establece cómo recopilamos, utilizamos y protegemos su información personal cuando visita nuestro sitio web rustibo.net, realiza un pedido o se pone en contacto con nosotros.",
      "Podemos recopilar información de contacto, como nombre, dirección de correo electrónico y número de teléfono; información de pedidos, como detalles de los pedidos realizados y direcciones de entrega; e información de navegación, como dirección IP, tipo de navegador, páginas vistas y tiempo de visita.",
    ],
  },
  {
    title: "2. Uso de la información",
    content: [
      "Utilizamos la información recopilada para procesar y gestionar sus pedidos, mejorar nuestro servicio al cliente y su experiencia de usuario, enviar comunicaciones relacionadas con sus pedidos o actualizaciones de nuestros servicios, y cumplir con nuestras obligaciones legales.",
    ],
  },
  {
    title: "3. Compartición de información",
    content: [
      "No compartimos su información personal con terceros, excepto con proveedores de servicios que nos ayudan a gestionar nuestro negocio, por ejemplo empresas de reparto, o cuando la ley nos obliga a divulgar sus datos personales.",
    ],
  },
  {
    title: "4. Seguridad de los datos",
    content: [
      "Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra accesos no autorizados, pérdida o destrucción.",
    ],
  },
  {
    title: "5. Derechos del usuario",
    content: [
      "Usted tiene derecho a acceder a sus datos personales, solicitar la corrección de datos inexactos, solicitar la eliminación de sus datos personales y oponerse al procesamiento de sus datos personales.",
      "Para ejercer estos derechos, póngase en contacto con nosotros a través de contacto@rustibo.net.",
    ],
  },
  {
    title: "6. Cookies",
    content: [
      "Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar a la funcionalidad del sitio.",
    ],
  },
  {
    title: "7. Cambios a esta política",
    content: [
      "Podemos actualizar esta política de privacidad ocasionalmente. Cualquier cambio será publicado en esta página y, si es significativo, se lo notificaremos a través de un aviso en nuestro sitio web o por correo electrónico.",
    ],
  },
  {
    title: "8. Contacto",
    content: [
      "Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, puede ponerse en contacto con Rustibó en Carrer Pastora, 9, 46600 Alzira, Valencia; teléfono +34 962 41 39 48; correo electrónico contacto@rustibo.net.",
    ],
  },
];

export const cookiesSections = [
  {
    title: "1. ¿Qué son las cookies?",
    content: [
      "En Rustibó utilizamos cookies para mejorar su experiencia en nuestro sitio web rustibo.net. Esta política de cookies explica qué son las cookies, cómo las utilizamos y cómo puede controlar su uso.",
      "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde acciones y preferencias durante un periodo de tiempo para que no tenga que volver a configurarlas cada vez que regrese o navegue de una página a otra.",
    ],
  },
  {
    title: "2. Tipos de cookies que utilizamos",
    content: [
      "Cookies esenciales: son necesarias para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas. Generalmente se configuran en respuesta a acciones realizadas por usted, como establecer preferencias de privacidad, iniciar sesión o completar formularios.",
      "Cookies de rendimiento: nos permiten contar visitas y fuentes de tráfico para medir y mejorar el rendimiento del sitio. Nos ayudan a saber qué páginas son las más y las menos populares y cómo se mueven los visitantes por la web.",
      "Cookies funcionales: permiten que el sitio web proporcione una mejor funcionalidad y personalización. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.",
      "Cookies de publicidad: pueden ser establecidas a través de nuestro sitio por socios publicitarios para crear un perfil sobre sus intereses y mostrarle anuncios relevantes en otros sitios.",
    ],
  },
  {
    title: "3. Cómo controlar las cookies",
    content: [
      "Puede controlar y eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su ordenador y configurar la mayoría de navegadores para que no se almacenen. Si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite el sitio y que algunos servicios y funcionalidades no funcionen correctamente.",
    ],
  },
  {
    title: "4. Consentimiento",
    content: [
      "Al utilizar nuestro sitio web, usted acepta el uso de cookies según lo descrito en esta política. Puede retirar su consentimiento en cualquier momento eliminando las cookies de su dispositivo y configurando su navegador para rechazar nuevas cookies.",
    ],
  },
  {
    title: "5. Actualizaciones de esta política",
    content: [
      "Podemos actualizar nuestra política de cookies de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política en esta página. Le recomendamos que revise esta política periódicamente para estar informado sobre cómo utilizamos las cookies.",
    ],
  },
  {
    title: "6. Contacto",
    content: [
      "Si tiene alguna pregunta sobre nuestra política de cookies, puede ponerse en contacto con Rustibó en Carrer Pastora, 9, 46600 Alzira, Valencia; teléfono +34 962 41 39 48; correo electrónico contacto@rustibo.net.",
    ],
  },
];

export default function LegalPolicy({ eyebrow = "Rustibo Alzira", title, sections }) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-normal uppercase text-[var(--color-gray-sub)]">{eyebrow}</p>
      <h1 className="mt-2 text-5xl uppercase leading-none text-[var(--color-green-dark)] sm:text-6xl">
        {title}
      </h1>
      <div className="surface-bordered mt-7 rounded-2xl p-6 font-normal leading-relaxed text-[var(--color-gray-text)] sm:p-8">
        <div className="grid gap-7">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl uppercase leading-none text-[var(--color-green-dark)]">{section.title}</h2>
              <div className="mt-3 grid gap-3">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
