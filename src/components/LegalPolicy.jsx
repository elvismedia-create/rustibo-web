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
      "Utilizamos cookies técnicas necesarias y un sistema de preferencias para recordar su elección. En caso de incorporar analítica u otros servicios no esenciales, se solicitará consentimiento previo mediante el selector de cookies.",
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
      "Cookies o tecnologías esenciales: son necesarias para el funcionamiento básico del sitio web y para recordar las preferencias de privacidad seleccionadas por el usuario.",
      "Cookies de analítica: actualmente la web no carga herramientas de analítica de terceros. Si en el futuro se incorporan, solo se activarán cuando el usuario haya dado su consentimiento.",
      "Cookies de publicidad: actualmente la web no carga cookies publicitarias ni píxeles de seguimiento. Si en el futuro se añadieran servicios publicitarios, se solicitará consentimiento previo.",
    ],
  },
  {
    title: "3. Cómo controlar las cookies",
    content: [
      "Puede aceptar, rechazar o configurar las cookies desde el selector disponible en la web. También puede modificar su elección desde el enlace Configuración de cookies situado en el footer.",
      "Además, puede eliminar cookies o datos locales desde la configuración de su navegador. Si borra sus preferencias, la web volverá a solicitar su elección en la siguiente visita.",
    ],
  },
  {
    title: "4. Consentimiento",
    content: [
      "Las cookies no esenciales no se activarán sin consentimiento. Puede retirar o modificar su consentimiento en cualquier momento desde el selector de cookies.",
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
