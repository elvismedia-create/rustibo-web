import Link from "next/link";
import { ArrowRight, BadgePercent, Phone, Store } from "lucide-react";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.promociones);

const promos = [
  {
    title: "50% en tu 2ª pizza",
    detail: "De lunes a viernes para pedidos de recoger en tienda. Elige tus pizzas favoritas, pasa a recogerlas y aprovecha la segunda con descuento.",
    price: "Segunda pizza al 50%",
    image: "/images/promo_pizza_2_uni.png",
    href: "/categoria/pizzas",
  },
  {
    title: "3x2 en pizzas",
    detail: "Fines de semana. Pide tres pizzas y paga dos recogiendo en tienda. Perfecta para compartir en casa, probar varios sabores y cenar sin complicarte.",
    price: "3x2",
    image: "/images/promo_pizza_3_uni.png",
    href: "/categoria/pizzas",
  },
  {
    title: "RustiChicken Combo",
    detail: "Incluye 3 piezas de pollo, 3 tiras de pollo y 3 alitas. Un combo crujiente y contundente para compartir o completar tu pedido Rustibo.",
    price: "3 + 3 + 3",
    image: "/images/promo_rustichicken.png",
    href: "/categoria/pollo-rustichicken",
  },
];

export default function PromocionesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[28px] bg-[var(--color-green-dark)] p-8 text-[var(--color-white)] md:p-12">
        <BadgePercent className="mb-5 text-[var(--color-lime)]" size={42} />
        <h1 className="text-6xl uppercase leading-none md:text-8xl">Promociones Rustibo</h1>
        <p className="mt-4 max-w-2xl text-lg font-normal text-[var(--color-white)]">
          Ofertas pensadas para pedir rápido, compartir fácil y cenar bien en Alzira.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {promos.map((promo) => (
          <Link key={promo.title} href={promo.href} className="group block transition hover:brightness-95">
            <div className="promo-card relative min-h-72 overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${promo.image}')` }}
              />
              <span className="font-brand-menu absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-lime)] px-4 py-2 text-lg uppercase text-[var(--color-green-dark)]">
                <Store size={18} strokeWidth={2.4} />
                Recoger en tienda
              </span>
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 px-1">
              <div>
                <p className="text-lg font-semibold uppercase text-[var(--color-green-medium)]">{promo.price}</p>
                <h2 className="text-5xl uppercase leading-none text-[var(--color-green-dark)]">{promo.title}</h2>
                <p className="mt-2 max-w-xl font-normal text-[var(--color-gray-text)]">{promo.detail}</p>
              </div>
              <span className="font-brand-menu inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-lime)] px-5 py-3 uppercase text-[var(--color-green-dark)]">
                Ver carta <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-6 text-center">
        <h2 className="text-4xl uppercase text-[var(--color-green-dark)]">¿Listo para pedir?</h2>
        <a href="tel:962413948" className="order-button font-brand-menu mt-4 inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-xl uppercase">
          <Phone size={22} />
          Llamar a Rustibo
        </a>
      </div>
    </main>
  );
}
