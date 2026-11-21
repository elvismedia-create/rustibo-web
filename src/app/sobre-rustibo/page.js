import AboutSection from "@/components/AboutSection";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.about);

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <AboutSection />
    </main>
  );
}
