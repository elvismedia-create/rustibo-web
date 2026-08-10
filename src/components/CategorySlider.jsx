"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategorySlider() {
  // Configuración del carrusel (Embla)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    dragFree: true, 
    containScroll: "trimSnaps",
    align: "start"
  });

  // Funciones de navegación para las flechas
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Lista completa de las 14 categorías con sus rutas de imagen
  // IMPORTANTE: Sube tus imágenes a /public/images/categories/ con estos nombres.
  const categories = [
    { name: "Tex Mex", img: "/images/categories/cat_texmex.jpg" },
    { name: "Arroces", img: "/images/categories/cat_arroces.jpg" },
    { name: "Bocadillos", img: "/images/categories/cat_bocadillos.jpg" },
    { name: "Carnes asadas", img: "/images/categories/cat_carnes.jpg" },
    { name: "Entrantes", img: "/images/categories/cat_entrantes.jpg" },
    { name: "Ensaladas", img: "/images/categories/cat_ensaladas.jpg" },
    { name: "Hamburguesas", img: "/images/categories/cat_burgers.jpg" },
    { name: "Kebabs", img: "/images/categories/cat_kebabs.jpg" },
    { name: "Pasta", img: "/images/categories/cat_pasta.jpg" },
    { name: "Pizzas", img: "/images/categories/cat_pizzas.jpg" },
    { name: "RustiBizza", img: "/images/categories/cat_rustibizza.jpg" },
    { name: "Pollo RustiChicken", img: "/images/categories/cat_pollo.jpg" },
    { name: "Sandwiches", img: "/images/categories/cat_sandwiches.jpg" },
    { name: "Postres", img: "/images/postres_ustibo.jpg" },
    { name: "Menú Infantil", img: "/images/categories/cat_infantil.jpg" },
  ];

  return (
    <section className="py-12 bg-[var(--color-black)] relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Slider */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-white)]">
            Explora nuestra <span className="text-[var(--color-lime)] uppercase">Carta</span>
          </h2>
          
          {/* Flechas de navegación (visibles solo en escritorio) */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-[var(--color-green-border)] flex items-center justify-center text-[var(--color-white)] hover:bg-[var(--color-lime)] hover:text-[var(--color-black)] transition-all"
              aria-label="Anterior categoría"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-[var(--color-green-border)] flex items-center justify-center text-[var(--color-white)] hover:bg-[var(--color-lime)] hover:text-[var(--color-black)] transition-all"
              aria-label="Siguiente categoría"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Contenedor del Slider (Embla) */}
        {/* pt-6 y -mt-6 para que el efecto hover (translate-y) no corte la imagen por arriba */}
        <div className="overflow-hidden pt-6 -mt-6" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing">
            
            {categories.map((cat, index) => (
              <div 
                key={index} 
                className="flex-[0_0_auto] min-w-[110px] md:min-w-[150px] flex flex-col items-center gap-3 group pb-4"
              >
                {/* Círculo contenedor de la imagen con efectos hover */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-green-dark)] border-2 border-[var(--color-green-border)] flex items-center justify-center p-1 transition-all duration-300 group-hover:border-[var(--color-lime)] group-hover:-translate-y-3 relative overflow-hidden">
                  
                  {/* Imagen Real de la Categoría */}
                  <img 
                    src={cat.img} 
                    alt={`Categoría ${cat.name}`} 
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy" // Mejora el rendimiento cargando solo cuando es visible
                    // Imagen de respaldo por si falla la carga (puedes quitar esto si quieres)
                    onError={(e) => { e.currentTarget.style.display = 'none' }} 
                  />
                  
                  {/* Superposición sutil que desaparece al hacer hover */}
                  <div className="absolute inset-0 bg-[var(--color-black)]/30 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Nombre de la categoría estilo Rustibo */}
                <span className="text-[var(--color-green-medium)] text-xs md:text-sm font-bold uppercase tracking-wider group-hover:text-[var(--color-lime)] transition-colors text-center px-2 leading-tight min-h-[32px] flex items-center">
                  {cat.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
