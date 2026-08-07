import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { categoriasData } from "@/data/menuData";

export const metadata = {
  title: "Carta Rustibo | Pide online en Alzira",
  description: "Consulta la carta completa de Rustibo: pizzas, entrantes, hamburguesas, pollo, arroces, kebabs y más.",
};

export default function CartaPage() {
  const categorias = Object.entries(categoriasData).map(([key, data]) => ({
    slug: data.slug || data.id || key,
    ...data,
  }));

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-normal uppercase text-[var(--color-gray-sub)]">Recogida y domicilio en Alzira</p>
          <h1 className="text-6xl uppercase text-[var(--color-green-dark)] md:text-7xl">Carta Rustibo</h1>
          <p className="mt-2 max-w-2xl font-normal text-[var(--color-gray-text)]">
            Elige una categoría, revisa platos y precios, y llama para completar tu pedido. Domicilio con mínimo de 12€ y pago con tarjeta en casa.
          </p>
        </div>
        <a href="tel:962413948" className="order-button font-brand-menu inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-xl uppercase">
          <Phone size={22} />
          Pedir por teléfono
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat) => (
          <Link key={cat.slug} href={`/categoria/${cat.slug}`} className="promo-card group overflow-hidden rounded-2xl bg-[var(--color-white)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${cat.imagenPrincipal}')` }}
              />
              <h2 className="absolute bottom-4 left-4 right-4 text-5xl uppercase leading-none text-[var(--color-white)]">
                {cat.titulo}
              </h2>
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="line-clamp-2 text-sm font-normal text-[var(--color-gray-text)]">{cat.subtitulo}</p>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-green-dark)]">
                <ArrowRight size={20} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
