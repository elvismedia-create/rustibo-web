import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-[var(--color-green-dark)] overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-green-dark)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-12">
          
          {/* COLUMNA IZQUIERDA: Textos y Botón */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 text-left">
            
            {/* Etiqueta superior */}
            <div className="font-brand-menu flex items-center gap-2 bg-[var(--color-green-dark)] border border-[var(--color-green-border)] text-[var(--color-lime)] py-1.5 px-4 rounded-full text-lg uppercase mb-2">
              <Flame className="w-4 h-4 text-[var(--color-lime)]" />
              100% Sabor Rustibo
            </div>
            
            {/* Título principal (Inspirado en tu imagen) */}
            <h1 className="text-5xl lg:text-7xl text-[var(--color-white)] leading-none uppercase">
              Auténtico <br />
              <span className="text-[var(--color-lime)] text-6xl lg:text-8xl">Pollo Frito</span> <br />
              Americano
            </h1>
            
            <p className="text-lg text-[var(--color-white)] max-w-lg mt-4">
              El menú más crujiente de Alzira. Haz tu pedido ahora y recíbelo caliente en casa o ven a recogerlo a nuestro local sin esperas.
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="font-brand-menu bg-[var(--color-lime)] hover:bg-[var(--color-green-nav)] hover:text-[var(--color-white)] text-[var(--color-green-dark)] py-4 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
                VER MENÚ Y PEDIR
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen y "Etiquetas" dinámicas */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Imagen del producto (He puesto un placeholder de pollo frito de alta calidad. Luego pondrás la tuya recortada sin fondo) */}
            <img 
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop" 
              alt="Pollo frito crujiente" 
              className="relative z-10 w-full max-w-md lg:max-w-lg object-cover rounded-3xl rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-[var(--color-green-border)]"
            />
            
            {/* Etiqueta flotante estilo "Oferta" superpuesta a la imagen */}
            <div className="absolute bottom-4 -left-2 lg:-left-10 bg-[var(--color-green-dark)] border-2 border-[var(--color-lime)] text-[var(--color-white)] py-3 px-6 rounded-xl transform -rotate-6 z-20">
              <span className="text-[var(--color-lime)] block text-xs tracking-widest uppercase">Combo desde</span>
              <span className="text-4xl">8,50€</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
