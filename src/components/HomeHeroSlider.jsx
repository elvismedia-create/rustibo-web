"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const heroSlides = [
  {
    eyebrow: "Para llevar y domicilio",
    title: "Pide Rustibo",
    highlight: "y disfruta!",
    text: "Comida recién hecha para recoger o recibir en casa en Alzira. Llama y te lo preparamos al momento.",
    image: "/images/hero-rustibo-comidas-para-llevar.jpg",
    secondaryHref: "/carta",
    secondaryLabel: "Ver carta",
  },
  {
    eyebrow: "Nuevos postres",
    title: "Tarritos dulces",
    highlight: "para rematar!",
    text: "Kinder, carrot cake y horchata con fartons en temporada. Añade un tarrito a tu pedido y termina la cena como toca.",
    image: "/images/novedades-postre-tarritos-rustibo.jpg",
    secondaryHref: "/categoria/postres",
    secondaryLabel: "Ver postres",
  },
];

export default function HomeHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="home-hero group relative min-h-[520px] overflow-hidden rounded-[28px] border border-[var(--color-green-border)] bg-[var(--color-green-dark)] text-[var(--color-white)]">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`home-hero-slide ${index === activeSlide ? "is-active" : ""}`}
          aria-hidden={index !== activeSlide}
        >
          <div
            className="home-hero-slide-bg absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="home-hero-content relative z-10 flex min-h-[520px] max-w-lg flex-col items-start justify-center px-6 py-10 sm:px-10 lg:px-14 bg-gradient-to-r from-[var(--color-green-dark)] via-[var(--color-green-dark)]/80 to-transparent">
            <span className="font-brand-menu mb-3 inline-flex w-fit rounded-full bg-[var(--color-lime)] px-4 py-2 text-lg uppercase text-[var(--color-green-dark)]">
              {slide.eyebrow}
            </span>
            <h1 className="text-5xl uppercase leading-none text-[var(--color-white)] sm:text-6xl lg:text-7xl">
              <span className="block whitespace-nowrap">{slide.title}</span>
              <span className="block text-[var(--color-lime)]">{slide.highlight}</span>
            </h1>
            <p className="mt-2 max-w-[410px] text-base font-semibold leading-snug text-[var(--color-white)] sm:text-lg lg:max-w-[460px]">
              {slide.text}
            </p>
            <div className="home-hero-actions mt-7 flex flex-wrap gap-4">
              <a href="tel:962413948" className="order-button font-brand-menu inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-xl uppercase">
                Llamar ahora
                <Phone size={22} />
              </a>
              <Link href={slide.secondaryHref} className="font-brand-menu inline-flex items-center gap-2 rounded-2xl border-2 border-[var(--color-white)] px-8 py-4 text-xl uppercase text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-green-dark)]">
                {slide.secondaryLabel}
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="home-hero-dots" aria-label="Slides del hero">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`home-hero-dot ${index === activeSlide ? "is-active" : ""}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Ver ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
