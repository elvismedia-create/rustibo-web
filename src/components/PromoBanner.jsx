import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="w-full bg-[var(--color-white)] py-8 px-4">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[var(--color-green-border)] ">
        <div className="relative aspect-[21/9] md:aspect-[3/1] w-full">
          {/* Sustituye /promo-pizza.jpg por la ruta de tu imagen image_1b9752.jpg */}
          <img 
            src="/images/promo-pizza.jpg" 
            alt="50% descuento en tu segunda pizza de lunes a viernes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}