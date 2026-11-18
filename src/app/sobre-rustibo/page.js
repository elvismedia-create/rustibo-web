import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "Sobre Rustibó | Comida para llevar en Alzira",
  description: "Conoce la historia y el equipo de Rustibó, comida recién hecha para llevar en Alzira desde 2007.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <AboutSection />
    </main>
  );
}
