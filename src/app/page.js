import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, CreditCard, MapPin } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import { homeSeo, metadataFromSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(homeSeo);

const promos = [
  {
    title: "50% EN TU 2ª PIZZA",
    kicker: "LUNES A VIERNES",
    price: "RECOGER EN TIENDA",
    text: "Descuento en la segunda pizza para pedidos de recogida.",
    image: "/images/promo_pizza_2_uni.webp",
    href: "/promociones",
  },
  {
    title: "3X2 EN PIZZAS",
    kicker: "FINES DE SEMANA",
    price: "RECOGER EN TIENDA",
    text: "Pide tres pizzas y paga dos. Perfecto para compartir.",
    image: "/images/promo_pizza_3_uni.webp",
    href: "/promociones",
  },
  {
    title: "RUSTICHICKEN COMBO",
    kicker: "COMBO CRUJIENTE",
    price: "3 + 3 + 3",
    text: "3 piezas, 3 tiras y 3 alitas de pollo.",
    image: "/images/promo_rustichicken.webp",
    href: "/categoria/pollo-rustichicken",
  },
];

const menuCards = [
  {
    title: "Pizzas",
    href: "/categoria/pizzas",
    bg: "var(--card-pizzas)",
    color: "var(--color-white)",
    bgImage: "/images/categories/card-bg-pizzas.webp",
  },
  {
    title: "Entrantes",
    href: "/categoria/entrantes",
    bg: "var(--card-entrantes)",
    color: "var(--color-white)",
    bgImage: "/images/categories/card-bg-entrantes.webp",
  },
  {
    title: "Tex Mex",
    href: "/categoria/tex-mex",
    bg: "var(--card-promociones)",
    color: "var(--color-white)",
    bgImage: "/images/categories/card-bg-texmex.webp",
  },
  {
    title: "Arroces",
    href: "/categoria/arroces",
    bg: "var(--card-bebidas)",
    color: "var(--card-bebidas-text)",
    bgImage: "/images/categories/card-bg-arroces.webp",
  },
  {
    title: "Pastas",
    href: "/categoria/pasta",
    bg: "var(--card-postres)",
    color: "var(--card-postres-text)",
    bgImage: "/images/categories/card-bg-pasta.webp",
  },
  {
    title: "Carnes",
    href: "/categoria/carnes-asadas",
    bg: "var(--card-extras)",
    color: "var(--color-green-dark)",
    bgImage: "/images/categories/card-bg-carnes.webp",
  },
];

const featuredProducts = [
  { name: "Kebab", price: "5,00€", detail: "El clásico que siempre apetece", href: "/categoria/kebabs" },
  { name: "Hamburguesa Especial", price: "6,50€", detail: "Queso, huevo y bacon", href: "/categoria/hamburguesas" },
  { name: "Bocata Rustibó", price: "6,50€", detail: "Lomo, pimiento, patatas y alioli", href: "/categoria/bocadillos" },
  { name: "Pizza 3x2", price: "Paga 2", detail: "Plan perfecto para compartir", href: "/promociones" },
  { name: "RustiChicken", price: "9,50€", detail: "Crujiente y recién hecho", href: "/categoria/pollo-rustichicken" },
  { name: "Bocata de Calamares", price: "6,50€", detail: "Un clásico de Rustibó", href: "/categoria/bocadillos" },
];

const SHOW_RUSTI_POINTS = false;

function RustiPointsSection() {
  return (
    <section className="section-gap-bottom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="surface-bordered flex items-center gap-5 rounded-lg px-5 py-5 md:px-7">
        <div className="shrink-0 text-3xl uppercase leading-[0.78] md:text-4xl">
          <span className="block text-[var(--color-red-price)]">Rusti</span>
          <span className="block text-[var(--color-green-dark)]">Puntos</span>
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl uppercase leading-none md:text-3xl">
            <span className="text-[var(--color-green-dark)]">Empieza a acumular </span>
            <span className="text-[var(--color-red-price)]">Rusti </span>
            <span className="text-[var(--color-green-dark)]">Puntos</span>
          </h2>
          <p className="mt-1 text-sm font-normal leading-snug text-[var(--color-gray-text)] md:text-base">
            Únete ya para conseguir puntos que podrás canjear por deliciosas recompensas. Por cada 1€ acumularás 10 Rusti Puntos.
          </p>
        </div>

        <Link
          href="/carta"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-green-dark)] transition-transform hover:scale-105"
          aria-label="Empezar a acumular Rusti Puntos"
        >
          <ArrowRight size={26} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <HomeHeroSlider />

        <div className="delivery-note section-gap-above">
          <span className="delivery-note-item delivery-note-item-left">
            <Clock size={19} />
            <span>Haz tus pedidos entre las 19:00-20:00h. Recíbelo cuando desees.</span>
          </span>
          <span className="delivery-note-item">
            <MapPin size={19} />
            <span><strong>Pedidos a domicilio gratis</strong>. Mínimo 12€.</span>
          </span>
          <span className="delivery-note-item">
            <CreditCard size={19} />
            <span><strong>Pago con tarjeta</strong> a domicilio.</span>
          </span>
        </div>
      </section>

      <section className="section-gap-top mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="section-heading-tight">
          <div className="section-heading-row">
            <h2 className="section-title-compact">PROMOS DESTACADAS</h2>
            <Link href="/promociones" className="section-view-all">
              VER TODAS
            </Link>
          </div>
        </div>

        <div className="promos-scroll flex snap-x gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {promos.map((promo) => (
            <Link
              key={promo.title}
              href={promo.href}
              className="surface-bordered group block shrink-0 snap-start overflow-hidden rounded-2xl transition hover:brightness-95"
              style={{ width: "calc(33.333% - 14px)", minWidth: "280px" }}
            >
              <div className="promo-card-image relative h-[280px] overflow-hidden rounded-t-2xl rounded-b-none">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 768px) 280px, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="promo-info-panel">
                <div className="promo-copy">
                  <p className="promo-kicker">{promo.kicker}</p>
                  <h3 className="promo-title">{promo.title}</h3>
                  <p className="promo-highlight">{promo.price}</p>
                  <p className="promo-description">{promo.text}</p>
                </div>
                <span className="promo-arrow">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-menu-explore section-gap-bottom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading-tight">
          <div className="section-heading-row">
            <div>
              <h2 className="section-title-compact">Lo más pedido en Rustibó</h2>
            </div>
            <Link href="/carta" className="section-view-all">
              VER CARTA
            </Link>
          </div>
        </div>

        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <Link key={product.name} href={product.href} className="featured-product-card group">
              <div className="featured-product-copy">
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
              </div>
              <div className="featured-product-meta">
                <span>{product.price}</span>
                <span className="featured-product-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-gap-bottom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading-tight">
          <div className="section-heading-row">
            <h2 className="section-title-compact">Explora nuestro menú</h2>
            <Link href="/carta" className="section-view-all">
              VER TODAS
            </Link>
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-10 md:grid-cols-3">
          {menuCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              prefetch={false}
              className="group relative block h-[160px] overflow-hidden rounded-2xl transition-all hover:brightness-95"
              style={{
                backgroundColor: card.bg,
              }}
            >
              {card.bgImage ? (
                <Image
                  src={card.bgImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              ) : null}
              {card.image && (
                <Image
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  width={260}
                  height={180}
                  className={`menu-card-food ${card.imageClass}`}
                />
              )}
              <h3
                className="absolute bottom-0 left-0 z-10 p-4 text-[34px] uppercase leading-none"
                style={{ color: card.color, fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
              >
                {card.title}
              </h3>
            </Link>
          ))}
        </div>

      </section>

      {SHOW_RUSTI_POINTS && <RustiPointsSection />}

      <AboutSection />
    </div>
  );
}
