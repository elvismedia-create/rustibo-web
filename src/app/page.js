import Link from "next/link";
import { ArrowRight, Clock, CreditCard, MapPin, Phone } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import { homeSeo, metadataFromSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(homeSeo);

const promos = [
  {
    title: "50% EN TU 2ª PIZZA",
    kicker: "LUNES A VIERNES",
    price: "RECOGER EN TIENDA",
    text: "Descuento en la segunda pizza para pedidos de recogida.",
    image: "/images/promo_pizza_2_uni.png",
    href: "/promociones",
  },
  {
    title: "3X2 EN PIZZAS",
    kicker: "FINES DE SEMANA",
    price: "RECOGER EN TIENDA",
    text: "Pide tres pizzas y paga dos. Perfecto para compartir.",
    image: "/images/promo_pizza_3_uni.png",
    href: "/promociones",
  },
  {
    title: "RUSTICHICKEN COMBO",
    kicker: "COMBO CRUJIENTE",
    price: "3 + 3 + 3",
    text: "3 piezas, 3 tiras y 3 alitas de pollo.",
    image: "/images/promo_rustichicken.png",
    href: "/categoria/pollo-rustichicken",
  },
];

const menuCards = [
  {
    title: "Pizzas",
    href: "/categoria/pizzas",
    bg: "var(--card-pizzas)",
    color: "var(--color-white)",
    bgImage: "/images/categories/card-bg-pizzas.png",
  },
  {
    title: "Entrantes",
    href: "/categoria/entrantes",
    bg: "var(--card-entrantes)",
    color: "var(--color-white)",
    bgImage: "/images/categories/card-bg-entrantes.png",
  },
  {
    title: "Tex Mex",
    href: "/categoria/tex-mex",
    bg: "var(--card-promociones)",
    color: "var(--color-white)",
    bgImage: "/images/categories/card-bg-texmex.png",
  },
  {
    title: "Arroces",
    href: "/categoria/arroces",
    bg: "var(--card-bebidas)",
    color: "var(--card-bebidas-text)",
    bgImage: "/images/categories/card-bg-arroces.png",
  },
  {
    title: "Pastas",
    href: "/categoria/pasta",
    bg: "var(--card-postres)",
    color: "var(--card-postres-text)",
    bgImage: "/images/categories/card-bg-pasta.png",
  },
  {
    title: "Carnes",
    href: "/categoria/carnes-asadas",
    bg: "var(--card-extras)",
    color: "var(--color-green-dark)",
    bgImage: "/images/categories/card-bg-carnes.png",
  },
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
        <div className="home-hero group relative min-h-[520px] overflow-hidden rounded-[28px] border border-[var(--color-green-border)] bg-[var(--color-green-dark)] text-[var(--color-white)]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/hero-rustibo-comidas-para-llevar.jpg')" }}
          />
          <div className="home-hero-content relative z-10 flex min-h-[520px] max-w-lg flex-col items-start justify-center px-6 py-10 sm:px-10 lg:px-14 bg-gradient-to-r from-[var(--color-green-dark)] via-[var(--color-green-dark)]/80 to-transparent">
            <span className="font-brand-menu mb-3 inline-flex w-fit rounded-full bg-[var(--color-lime)] px-4 py-2 text-lg uppercase text-[var(--color-green-dark)]">
              Para llevar y domicilio
            </span>
            <h1 className="text-5xl uppercase leading-none text-[var(--color-white)] sm:text-6xl lg:text-7xl">
              <span className="block whitespace-nowrap">Pide Rustibo</span>
              <span className="block text-[var(--color-lime)]">y disfruta!</span>
            </h1>
            <p className="mt-2 max-w-[410px] text-base font-semibold leading-snug text-[var(--color-white)] sm:text-lg lg:max-w-[460px]">
              Comida recién hecha para recoger o recibir en casa en Alzira. Llama y te lo preparamos al momento.
            </p>
            <div className="home-hero-actions mt-7 flex flex-wrap gap-4">
              <a href="tel:962413948" className="order-button font-brand-menu inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-xl uppercase">
                Llamar ahora
                <Phone size={22} />
              </a>
              <Link href="/carta" className="font-brand-menu inline-flex items-center gap-2 rounded-2xl border-2 border-[var(--color-white)] px-8 py-4 text-xl uppercase text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-green-dark)]">
                Ver carta
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>

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

        <div className="flex snap-x gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {promos.map((promo) => (
            <Link
              key={promo.title}
              href={promo.href}
              className="surface-bordered group block shrink-0 snap-start overflow-hidden rounded-2xl transition hover:brightness-95"
              style={{ width: "calc(33.333% - 14px)", minWidth: "280px" }}
            >
              <div className="relative h-[280px] overflow-hidden rounded-t-2xl rounded-b-none">
                <img
                  src={promo.image}
                  alt={promo.title}
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
                backgroundImage: card.bgImage ? `url('${card.bgImage}')` : undefined,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {card.image && (
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
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
