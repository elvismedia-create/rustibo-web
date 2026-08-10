import { categoriasData } from "@/data/menuData";
import { categorySeo, metadataFromSeo } from "@/data/seoData";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bean, CircleAlert, Egg, Fish, Home, Milk, Nut, PackageCheck, Phone, Shell, Shrimp, Wheat } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(categoriasData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const currentSeo = categorySeo[slug] || {
    title: "Comida para llevar en Alzira | Rustibo",
    description: "Tu opción favorita en Alzira para cenar.",
    canonical: `/categoria/${slug}`,
  };

  return metadataFromSeo(currentSeo);
}

const PizzaIcon = ({ size }) => (
  <svg width={size === "small" ? "24" : "32"} height={size === "small" ? "24" : "32"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1 text-[var(--color-green-dark)]">
    <path d="M4 20 L12 4 A12 12 0 0 1 20 12 Z" />
    <path d="M10.5 7.5 A9 9 0 0 1 16.5 13.5" />
    <circle cx="11" cy="13" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="14" cy="10" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const RenderPrecio = ({ precio }) => {
  if (!precio) return null;
  if (precio.includes("|")) {
    return (
      <div className="flex gap-4 sm:gap-6">
        {precio.split("|").map((opcion) => {
          const [tamano, valor] = opcion.split(":").map((x) => x.trim());
          const isSmall = tamano.toLowerCase().includes("peq");
          return (
            <div key={opcion} className="flex flex-col items-center">
              <PizzaIcon size={isSmall ? "small" : "large"} />
              <span className="font-brand-menu text-[13px] uppercase tracking-wide text-[var(--color-green-dark)]">{tamano}</span>
              <span className="menu-item-price text-2xl uppercase sm:text-3xl">{valor}</span>
            </div>
          );
        })}
      </div>
    );
  }
  return <span className="menu-item-price whitespace-nowrap text-3xl sm:text-4xl">{precio}</span>;
};

const allergenRules = [
  { label: "Gluten", terms: ["pizza", "masa", "sandwich", "bocadillo", "pan", "pasta", "macarrones", "tallarines", "canelones", "lasaña", "fideuá", "empanad", "rebozad", "croqueta", "nuggets", "fingers", "aros de cebolla", "flautas", "tequeños", "romana", "rustibizza"] },
  { label: "Lácteos", terms: ["queso", "cheddar", "gouda", "feta", "camembert", "nata", "bechamel", "yogurt", "yogur", "salsa agria", "crema agria", "ranchera", "kinder", "nutella"] },
  { label: "Huevo", terms: ["huevo", "tortilla", "mayonesa", "salsa rosa"] },
  { label: "Pescado", terms: ["atún", "atun", "anchoa", "bacalao", "salmón", "salmon", "surimi", "tronquitos", "fideuá", "arroz a banda", "all i pebre"] },
  { label: "Crustáceos", terms: ["gamba", "marisco", "bogavante", "cangrejo"] },
  { label: "Moluscos", terms: ["sepia", "calamar"] },
  { label: "Mostaza", terms: ["mostaza"] },
  { label: "Frutos secos", terms: ["nutella"] },
  { label: "Sulfitos", terms: ["pasas"] },
];

const categoryAllergenDefaults = {
  pizzas: ["Gluten", "Lácteos"],
  rustibizza: ["Gluten"],
  bocadillos: ["Gluten"],
  sandwiches: ["Gluten"],
  hamburguesas: ["Gluten"],
  kebabs: ["Gluten"],
  pasta: ["Gluten"],
  "pollo-rustichicken": ["Gluten"],
};

const normalizeText = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const inferAllergens = (producto, slug) => {
  const text = normalizeText(`${producto.nombre} ${producto.descripcion || ""}`);
  const allergens = new Set(categoryAllergenDefaults[slug] || []);

  allergenRules.forEach(({ label, terms }) => {
    if (terms.some((term) => text.includes(normalizeText(term)))) {
      allergens.add(label);
    }
  });

  return Array.from(allergens);
};

const allergenIcons = {
  Gluten: Wheat,
  Lácteos: Milk,
  Huevo: Egg,
  Pescado: Fish,
  Crustáceos: Shrimp,
  Moluscos: Shell,
  Mostaza: Bean,
  "Frutos secos": Nut,
  Sulfitos: CircleAlert,
};

const allergenColors = {
  Gluten: "#c28a13",
  Lácteos: "#2878b8",
  Huevo: "#d49b00",
  Pescado: "#1b7f93",
  Crustáceos: "#d85b2a",
  Moluscos: "#8b5fbf",
  Mostaza: "#b58b00",
  "Frutos secos": "#8a5a22",
  Sulfitos: "#777777",
};

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const categoria = categoriasData[slug];

  if (!categoria) {
    notFound();
  }

  const esMenuInfantil = slug === "menu-infantil";
  const productosAgrupados = !esMenuInfantil && categoria.productos
    ? categoria.productos.reduce((grupos, producto) => {
        const nombreSeccion = producto.seccion || "General";
        grupos[nombreSeccion] = grupos[nombreSeccion] || [];
        grupos[nombreSeccion].push(producto);
        return grupos;
      }, {})
    : {};

  return (
    <main className="pb-16">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/carta" className="font-brand-menu mb-5 inline-flex items-center gap-2 text-xl uppercase text-[var(--color-green-dark)] hover:text-[var(--color-green-nav)]">
          <ArrowLeft size={18} />
          Volver a la carta
        </Link>

        <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-green-border)] bg-[var(--color-green-dark)] text-[var(--color-white)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${categoria.imagenPrincipal}')` }}
          />
          <div className="category-hero-content relative z-10 max-w-lg px-6 py-10 sm:px-10 lg:px-14 lg:py-12 bg-gradient-to-r from-[var(--color-green-dark)] via-[var(--color-green-dark)]/80 to-transparent">
            <p className="mb-3 text-sm font-normal uppercase text-[var(--color-lime)]">Carta Rustibo</p>
            <h1 className="category-hero-title text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">{categoria.titulo}</h1>
            {categoria.subtitulo && (
              <p className="mt-4 text-lg font-normal leading-relaxed text-[var(--color-white)]">{categoria.subtitulo}</p>
            )}
            <a href="tel:962413948" className="order-button font-brand-menu mt-5 inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-xl uppercase">
              <Phone size={21} />
              Pedir ya!
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {esMenuInfantil ? (
          <div className="zona-infantil rounded-[28px] p-8 md:p-12">
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-5xl uppercase text-[var(--color-black)]">A elegir entre</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {categoria.opciones.map((opt) => (
                    <span key={opt} className="font-brand-menu rounded-full border-4 border-[var(--color-black)] bg-[var(--color-white)] px-6 py-3 text-xl text-[var(--color-black)]">
                      {opt}
                    </span>
                  ))}
                </div>
                <h3 className="mt-8 text-4xl uppercase text-[var(--color-black)]">Incluye</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {categoria.incluye.map((inc) => (
                    <li key={inc} className="rounded-xl bg-[var(--color-white)] px-4 py-3 text-lg font-normal text-[var(--color-black)]">{inc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex h-52 w-52 rotate-6 flex-col items-center justify-center rounded-full border-4 border-[var(--color-black)] bg-[var(--color-white)] text-[var(--color-black)]">
                <span className="font-brand-menu text-lg uppercase">Solo por</span>
                <span className="text-7xl uppercase leading-none">{categoria.precioTotal}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-10">
            {Object.entries(productosAgrupados).map(([nombreSeccion, productos]) => (
              <div key={nombreSeccion}>
                {nombreSeccion !== "General" && (
                  <h2 className="menu-section-heading">{nombreSeccion}</h2>
                )}
                <div className="surface-bordered menu-list-card overflow-hidden">
                  {productos.map((producto) => {
                    const allergens = inferAllergens(producto, slug);

                    return (
                      <article key={producto.id} className="menu-item-row flex justify-between">
                        <div className="min-w-0 flex-1">
                          <h3 className="menu-item-title">
                            {producto.nombre.split("*").map((part, index, array) => (
                              <span key={index}>
                                {part}
                                {index < array.length - 1 && <span className="text-[var(--color-red-price)]">*</span>}
                              </span>
                            ))}
                          </h3>
                          {producto.descripcion && (
                            <p className="menu-item-description max-w-2xl">
                              {producto.descripcion}
                            </p>
                          )}
                          {allergens.length > 0 && (
                            <div className="allergen-list">
                              {allergens.map((allergen, index) => {
                                const Icon = allergenIcons[allergen] || CircleAlert;

                                return (
                                  <span
                                    key={allergen}
                                    className="allergen-item"
                                    title={allergen}
                                    aria-label={allergen}
                                    style={{ "--allergen-color": allergenColors[allergen] || "#9a6a00" }}
                                  >
                                    <Icon size={12} strokeWidth={2.4} />
                                    {allergen}
                                    {index < allergens.length - 1 && <span className="allergen-comma">,</span>}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                        <div className="shrink-0 text-right">
                          <RenderPrecio precio={producto.precio} />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="menu-service-strip mt-10">
          <div className="menu-service-item">
            <Home size={46} strokeWidth={1.8} />
            <span>Recoger<br />en tienda</span>
          </div>
          <div className="menu-service-item">
            <PackageCheck size={46} strokeWidth={1.8} />
            <span>Domicilio</span>
          </div>
          <div className="menu-service-divider" />
          <p>La empresa se reserva variar los precios según mercado.</p>
        </div>

        <div className="surface-bordered mt-10 rounded-2xl p-6 text-center">
          <h2 className="text-4xl uppercase text-[var(--color-green-dark)]">Completa tu pedido por teléfono</h2>
          <p className="mt-2 font-normal text-[var(--color-gray-text)]">Recogida en tienda o domicilio con pedido mínimo de 12€. También puedes pagar con tarjeta en casa.</p>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-[var(--color-gray-sub)]">
            Información de alérgenos orientativa según ingredientes visibles en carta. Consulta en tienda para confirmar trazas o cambios de receta.
          </p>
          <a href="tel:962413948" className="phone-cta-button order-button font-brand-menu mt-7 inline-flex items-center justify-center gap-4 rounded-3xl uppercase">
            <Phone className="phone-cta-icon" size={34} />
            962 41 39 48
          </a>
        </div>
      </section>
    </main>
  );
}
