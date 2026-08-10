import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.novedades);

const novedades = [
  {
    title: "Tex Mex",
    text: "Sabores potentes para pedir y compartir: nachos, burgers y ese punto picante que engancha. Ideal para una cena informal con mucho queso, salsas y bocados para el centro.",
    image: "/images/novedad-texmex.png",
    href: "/categoria/tex-mex",
  },
  {
    title: "Tequeños",
    text: "Crujientes, dorados y perfectos para empezar la cena con algo para picar. Van genial como entrante antes de la pizza o para sumar variedad a cualquier pedido.",
    image: "/images/novedad-tequenos.png",
    href: "/categoria/entrantes",
  },
  {
    title: "Bolas de Mac&Cheese",
    text: "Bocados cremosos de mac and cheese con rebozado crujiente. Pequeñas, intensas y pensadas para compartir mientras llega el plato fuerte.",
    image: "/images/novedad-mac-cheese.png",
    href: "/categoria/entrantes",
  },
  {
    title: "Nachos Rellenos",
    text: "Triángulos crujientes con relleno sabroso para acompañar cualquier pedido. Un entrante fácil de picar, con ese punto caliente que apetece desde el primer bocado.",
    image: "/images/novedad-nachos-rellenos.png",
    href: "/categoria/entrantes",
  },
  {
    title: "Tarritos dulces",
    text: "Postres en tarrito para rematar el pedido: Kinder, carrot cake y horchata con fartons en temporada. Cremosos, frescos y perfectos para pedir uno más.",
    image: "/images/novedades-postre-tarritos-rustibo.jpg",
    href: "/categoria/postres",
  },
];

export default function NovedadesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-heading-tight">
        <h1 className="section-title-compact flex items-center gap-2 text-[var(--color-green-dark)]">
          <Sparkles size={18} />
          Novedades
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {novedades.map((item) => (
          <Link key={item.title} href={item.href} className="promo-card group overflow-hidden rounded-2xl bg-[var(--color-white)]">
            <div
              className="aspect-[16/9] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <div className="p-6">
              <h2 className="text-5xl uppercase text-[var(--color-green-dark)]">{item.title}</h2>
              <p className="mt-2 font-normal text-[var(--color-gray-text)]">{item.text}</p>
              <span className="font-brand-menu mt-5 inline-flex items-center gap-2 text-xl uppercase text-[var(--color-green-dark)]">
                Ver producto <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
