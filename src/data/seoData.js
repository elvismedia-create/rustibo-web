export const SITE_URL = "https://www.rustibo.net";

export const homeSeo = {
  title: "Comida para llevar en Alzira | Casera y hecha al día - Rustibo",
  description:
    "Disfruta de comida casera en Alzira con Rustibo. Elige entre pizzas, bocadillos y carnes. Haz tu pedido y recíbelo en casa gratis. Comidas para llevar Alzira.",
  canonical: "/",
};

export const categorySeo = {
  "tex-mex": {
    title: "Tex Mex para llevar en Alzira | Nachos, burgers y pizza - Rustibo",
    description:
      "Pide Tex Mex para llevar en Alzira: nachos Rustibo, patatas del chef, burgers, pizza Mariachi y sabores potentes para recoger o recibir en casa.",
    canonical: "/categoria/tex-mex",
  },
  arroces: {
    title: "Arroces | Comida para llevar en Alzira - Rustibo",
    description:
      "Arroces, paellas y fideuás para llevar en Alzira. Platos recién hechos para recoger en tienda o recibir en casa con Rustibo.",
    canonical: "/categoria/arroces",
  },
  bocadillos: {
    title: "Bocadillos | Comida para llevar en Alzira - Rustibo",
    description:
      "Bocadillos para llevar en Alzira: clásicos, calientes, especiales y recién preparados. Haz tu pedido en Rustibo.",
    canonical: "/categoria/bocadillos",
  },
  "carnes-asadas": {
    title: "Carnes asadas | Comida para llevar en Alzira - Rustibo",
    description:
      "Carnes asadas para llevar en Alzira: pollo asado, costillas, conejo y platos caseros listos para disfrutar en casa.",
    canonical: "/categoria/carnes-asadas",
  },
  entrantes: {
    title: "Entrantes | Comida para llevar en Alzira - Rustibo",
    description:
      "Descubre nuestros entrantes artesanales en Alzira: croquetas, patatas, tequeños, alitas, nachos y tapas para compartir.",
    canonical: "/categoria/entrantes",
  },
  ensaladas: {
    title: "Ensaladas | Comida para llevar en Alzira - Rustibo",
    description:
      "Ensaladas frescas para llevar en Alzira, preparadas al momento con ingredientes de calidad en Rustibo.",
    canonical: "/categoria/ensaladas",
  },
  hamburguesas: {
    title: "Hamburguesas | Comida para llevar en Alzira - Rustibo",
    description:
      "Hamburguesas para llevar en Alzira con carne, ingredientes frescos y recetas especiales de Rustibo.",
    canonical: "/categoria/hamburguesas",
  },
  kebabs: {
    title: "Kebabs | Comida para llevar en Alzira - Rustibo",
    description:
      "Kebabs para llevar en Alzira con carne, vegetales frescos y salsas. Pide en Rustibo para recoger o domicilio.",
    canonical: "/categoria/kebabs",
  },
  pasta: {
    title: "Pasta | Comida para llevar en Alzira - Rustibo",
    description:
      "Pasta casera para llevar en Alzira: macarrones, tallarines, canelones, lasañas y platos gratinados.",
    canonical: "/categoria/pasta",
  },
  pizzas: {
    title: "Pizzas | Comida para llevar en Alzira - Rustibo",
    description:
      "Pizzas para llevar en Alzira con masa fresca, mozzarella y muchas combinaciones. Pide tu pizza en Rustibo.",
    canonical: "/categoria/pizzas",
  },
  rustibizza: {
    title: "RustiBizza | Comida para llevar en Alzira - Rustibo",
    description:
      "RustiBizza en Alzira, la especialidad de Rustibo para pedir y disfrutar en casa o recoger en tienda.",
    canonical: "/categoria/rustibizza",
  },
  "pollo-rustichicken": {
    title: "Pollo RustiChicken | Comida para llevar en Alzira - Rustibo",
    description:
      "Pollo frito RustiChicken para llevar en Alzira: piezas, tiras y alitas crujientes para compartir.",
    canonical: "/categoria/pollo-rustichicken",
  },
  sandwiches: {
    title: "Sandwiches | Comida para llevar en Alzira - Rustibo",
    description:
      "Sandwiches para llevar en Alzira, clásicos y especiales, preparados al momento en Rustibo.",
    canonical: "/categoria/sandwiches",
  },
  postres: {
    title: "Postres para llevar en Alzira | Tarritos Rustibo",
    description:
      "Postres para llevar en Alzira: tarritos Kinder, carrot cake y horchata con fartons en temporada. Completa tu pedido Rustibo.",
    canonical: "/categoria/postres",
  },
  "menu-infantil": {
    title: "Menú Infantil | Comida para llevar en Alzira - Rustibo",
    description:
      "Menú infantil para llevar en Alzira con opciones pensadas para los más pequeños. Pide en Rustibo.",
    canonical: "/categoria/menu-infantil",
  },
};

export const legacyRoutes = {
  "comida-para-llevar-en-alzira-productos": {
    type: "carta",
    title: "Productos | Comida para llevar en Alzira - Rustibo",
    description:
      "Explora la variedad de productos en Rustibo, tu local de comidas para llevar en Alzira, Valencia. Hamburguesas, pizzas, arroces, carnes, pastas, entrantes, bocadillos, sándwiches, menú infantil y pollo frito.",
    canonical: "/comida-para-llevar-en-alzira-productos/",
  },
  "tex-mex-para-llevar-alzira": { type: "category", categorySlug: "tex-mex", ...categorySeo["tex-mex"], canonical: "/tex-mex-para-llevar-alzira/" },
  "arroces-para-llevar-alzira": { type: "category", categorySlug: "arroces", ...categorySeo.arroces, canonical: "/arroces-para-llevar-alzira/" },
  "bocadillos-para-llevar-en-alzira": { type: "category", categorySlug: "bocadillos", ...categorySeo.bocadillos, canonical: "/bocadillos-para-llevar-en-alzira/" },
  "carnes-asadas-para-llevar-alzira": { type: "category", categorySlug: "carnes-asadas", ...categorySeo["carnes-asadas"], canonical: "/carnes-asadas-para-llevar-alzira/" },
  "entrantes-para-llevar-alzira": { type: "category", categorySlug: "entrantes", ...categorySeo.entrantes, canonical: "/entrantes-para-llevar-alzira/" },
  "ensaladas-para-llevar-alzira": { type: "category", categorySlug: "ensaladas", ...categorySeo.ensaladas, canonical: "/ensaladas-para-llevar-alzira/" },
  "hamburguesas-para-llevar-alzira": { type: "category", categorySlug: "hamburguesas", ...categorySeo.hamburguesas, canonical: "/hamburguesas-para-llevar-alzira/" },
  "kebabs-para-llevar-alzira": { type: "category", categorySlug: "kebabs", ...categorySeo.kebabs, canonical: "/kebabs-para-llevar-alzira/" },
  "pasta-para-llevar-alzira": { type: "category", categorySlug: "pasta", ...categorySeo.pasta, canonical: "/pasta-para-llevar-alzira/" },
  "pizzas-para-llevar-alzira": { type: "category", categorySlug: "pizzas", ...categorySeo.pizzas, canonical: "/pizzas-para-llevar-alzira/" },
  "rustibizzas-para-llevar-alzira": { type: "category", categorySlug: "rustibizza", ...categorySeo.rustibizza, canonical: "/rustibizzas-para-llevar-alzira/" },
  "pollo-frito-para-llevar-alzira": { type: "category", categorySlug: "pollo-rustichicken", ...categorySeo["pollo-rustichicken"], canonical: "/pollo-frito-para-llevar-alzira/" },
  "sandwiches-para-llevar-alzira": { type: "category", categorySlug: "sandwiches", ...categorySeo.sandwiches, canonical: "/sandwiches-para-llevar-alzira/" },
  "postres-para-llevar-alzira": { type: "category", categorySlug: "postres", ...categorySeo.postres, canonical: "/postres-para-llevar-alzira/" },
  menu_infantil: { type: "category", categorySlug: "menu-infantil", ...categorySeo["menu-infantil"], canonical: "/menu_infantil/" },
  contact: {
    type: "contact",
    title: "Contacto | Comida para llevar en Alzira - Rustibo",
    description:
      "Ponte en contacto con Rustibo, tu local de comidas para llevar en Alzira, Valencia. Estamos aquí para responder a tus preguntas y recibir tus pedidos.",
    canonical: "/contact/",
  },
  politica_de_privacidad: {
    type: "privacy",
    title: "Politica de privacidad | Comida para llevar en Alzira - Rustibo",
    description:
      "Política de privacidad de Rustibo, local de comida para llevar en Alzira. Información sobre contacto, pedidos y tratamiento de datos.",
    canonical: "/politica_de_privacidad/",
  },
  politica_de_cookies: {
    type: "cookies",
    title: "Politica de Cookies | Comida para llevar en Alzira - Rustibo",
    description:
      "Política de cookies de Rustibo, comida para llevar en Alzira. Consulta información sobre el uso de cookies en la web.",
    canonical: "/politica_de_cookies/",
  },
};

export const pageSeo = {
  carta: {
    title: "Carta Rustibo | Comida para llevar en Alzira",
    description:
      "Consulta la carta completa de Rustibo en Alzira: pizzas, Tex Mex, arroces, bocadillos, carnes, entrantes, kebabs, pasta, pollo RustiChicken y postres.",
    canonical: "/carta/",
  },
  novedades: {
    title: "Novedades | Comida para llevar en Alzira - Rustibo",
    description:
      "Descubre las novedades de Rustibo en Alzira, Valencia. Prueba nuestros nuevos nachos rellenos, bolas de Mac&cheese, sabores Tex-Mex, tequeños y tarritos dulces.",
    canonical: "/novedades/",
  },
  promociones: {
    title: "Promociones | Comida para llevar en Alzira - Rustibo",
    description:
      "Aprovecha las promociones de Rustibo en Alzira, Valencia. 50% de descuento en la segunda pizza de lunes a viernes y 3x2 en pizzas los sábados y domingos.",
    canonical: "/promociones/",
  },
  blog: {
    title: "Blog Rustibo | Comida para llevar, pizzas y pollo en Alzira",
    description:
      "Consejos e ideas para pedir comida para llevar en Alzira: pizzas artesanas, Rusti Chicken, entrantes, postres y cenas a domicilio.",
    canonical: "/blog/",
  },
  avisoLegal: {
    title: "Aviso legal | Rustibo",
    description:
      "Aviso legal de Rustibo Alzira: titularidad, datos de contacto, condiciones de uso, propiedad intelectual y responsabilidad.",
    canonical: "/aviso-legal/",
  },
  privacidad: {
    title: "Política de privacidad | Rustibo",
    description:
      "Política de privacidad de Rustibo Alzira. Información sobre datos personales, pedidos, contacto y derechos del usuario.",
    canonical: "/privacidad/",
  },
  cookies: {
    title: "Política de cookies | Rustibo",
    description:
      "Política de cookies de Rustibo Alzira. Información sobre uso de cookies, consentimiento y configuración del navegador.",
    canonical: "/cookies/",
  },
};

export function metadataFromSeo(seo) {
  const canonical = seo.canonical || "/";
  const absoluteUrl = new URL(canonical, SITE_URL).toString();

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: absoluteUrl,
      siteName: "Rustibo",
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}
