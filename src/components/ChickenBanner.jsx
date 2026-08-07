export default function ChickenBanner() {
  return (
    <section className="w-full bg-[var(--color-white)] py-8 px-4">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[var(--color-green-border)] ">
        <div className="relative aspect-[21/9] md:aspect-[4/1] w-full">
          <img 
            src="/images/pollo-hero.avif" 
            alt="Rusti Chicken - Auténtico Pollo Frito Americano"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
