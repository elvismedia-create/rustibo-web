export const blogPosts = [
  {
    slug: "pizza-viral-dulce-picante-alzira",
    title: "La pizza dulce-picante que arrasa en redes: cómo pedir una versión Rustibo en Alzira",
    excerpt: "El toque dulce-picante, las pizzas crujientes y los sabores intensos siguen creciendo en redes. Te contamos cómo llevar esa tendencia a tu próxima cena para llevar.",
    category: "Tendencia viral",
    date: "2026-05-26",
    readTime: "4 min",
    image: "/images/promo_pizza_2_uni.png",
    keywords: "pizza viral Alzira, pizza dulce picante, pizza para llevar Alzira, tendencias comida TikTok",
    content: [
      {
        heading: "Por qué lo dulce-picante funciona tan bien",
        body: "Las tendencias de comida viral suelen tener algo en común: contrastes claros, mucho sabor y una imagen fácil de compartir. El toque dulce-picante se ha convertido en uno de esos recursos que hace que una pizza resulte más memorable, porque mezcla queso, salsa, carne o pollo con un final intenso.",
      },
      {
        heading: "Cómo pedirlo en formato pizza",
        body: "Si quieres una pizza con espíritu viral, busca combinaciones con barbacoa, bacon, pollo, picante o quesos potentes. En Rustibo puedes ir hacia opciones como barbacoa, mariachi, chicken-bacon o especial quesos, y completar con entrantes para crear una cena más llamativa.",
      },
      {
        heading: "La clave está en compartir",
        body: "Las pizzas virales funcionan mejor cuando se piden al centro. Dos o tres medianas con sabores distintos permiten probar más combinaciones, hacer una cena variada y evitar que todos terminen pidiendo lo mismo.",
      },
      {
        heading: "Para llevar o domicilio en Alzira",
        body: "Si buscas pizza para llevar en Alzira, puedes pedir para recoger o a domicilio. Los pedidos a domicilio son gratis con mínimo de 12€ y también puedes pagar con tarjeta en casa.",
      },
    ],
  },
  {
    slug: "pollo-crujiente-sandwiches-virales-alzira",
    title: "Pollo crujiente, salsas y bocados potentes: la fórmula viral para pedir en Alzira",
    excerpt: "El pollo frito y los bocados crujientes siguen siendo protagonistas en redes. Ideas para pedir Rusti Chicken, entrantes y combinaciones con mucho gancho.",
    category: "Pollo crujiente",
    date: "2026-05-26",
    readTime: "3 min",
    image: "/images/promo_rustichicken.png",
    keywords: "pollo crujiente Alzira, pollo frito viral, Rusti Chicken, comida viral Alzira",
    content: [
      {
        heading: "El crujiente siempre llama la atención",
        body: "Los vídeos de comida que mejor funcionan suelen enseñar texturas claras: queso fundido, pan tostado, pollo crujiente o salsas cremosas. Por eso el pollo frito, las tiras y las alitas siguen siendo una apuesta fuerte para cenas informales.",
      },
      {
        heading: "Rusti Chicken como plato central",
        body: "Un cubo de Rusti Chicken funciona como centro de mesa para compartir. Puedes pedir piezas, tiras o alitas y acompañarlas con patatas, nachos o alguna pizza para que la cena tenga variedad sin complicarse.",
      },
      {
        heading: "Salsas, entrantes y efecto compartir",
        body: "La fórmula viral no depende solo del plato principal. Entrantes como patatas, nachos, aros de cebolla o fingers ayudan a montar una mesa más apetecible y fácil de compartir, especialmente si sois varios en casa.",
      },
      {
        heading: "Una cena cómoda en Alzira",
        body: "Pedir pollo crujiente a domicilio en Alzira es una solución rápida para noches de partido, películas o reuniones improvisadas. Puedes pagar con tarjeta a domicilio y recibirlo cuando desees si haces tu pedido entre las 19:00 y las 20:00h.",
      },
    ],
  },
  {
    slug: "cena-viral-para-compartir-pizzas-nachos-pollo",
    title: "Cómo montar una cena viral en casa: pizzas, nachos, pollo y entrantes para compartir",
    excerpt: "Las cenas que triunfan en redes tienen color, variedad y platos fáciles de coger. Así puedes montar una mesa apetecible con carta Rustibo.",
    category: "Planes para compartir",
    date: "2026-05-26",
    readTime: "4 min",
    image: "/images/hero-rustibo-comidas-para-llevar.jpg",
    keywords: "cena para compartir Alzira, comida viral para casa, pizzas nachos pollo, comida a domicilio Alzira",
    content: [
      {
        heading: "La mesa viral tiene variedad",
        body: "Una cena que entra por los ojos no suele depender de un solo plato. Funciona mejor cuando hay colores, texturas y opciones para picar: pizzas cortadas, nachos, pollo crujiente, patatas y alguna salsa al centro.",
      },
      {
        heading: "Empieza con una base fácil",
        body: "Elige dos o tres platos principales. Por ejemplo, pizzas medianas para compartir, Rusti Chicken como punto crujiente y algún entrante tipo nachos o patatas. Así cada persona puede combinar a su gusto.",
      },
      {
        heading: "Piensa en bocados, no solo en raciones",
        body: "Los entrantes funcionan porque son fáciles de coger mientras se habla, se ve una serie o se comparte una noche con amigos. Esa es la razón por la que los combos, las piezas de pollo y las patatas suelen encajar tan bien en planes de grupo.",
      },
      {
        heading: "Hazlo fácil: pedir, recoger o recibir",
        body: "En Rustibo puedes pedir comida para llevar en Alzira o solicitar domicilio gratis desde 12€. Si quieres organizarlo con tiempo, haz tu pedido entre las 19:00 y las 20:00h y recíbelo cuando desees.",
      },
    ],
  },
];

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);
