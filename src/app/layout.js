import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL("https://www.rustibo.net"),
  title: "Rustibo | Comida para llevar en Alzira",
  description: "Tu opción para cenar en Alzira. Pizzas, hamburguesas, pollo frito y más.",
};

const reviewsData = {
  rating: "4.8",
  reviews: "250",
};

export default function RootLayout({ children }) {
  // AQUÍ ESTÁ LA MAGIA: Tu dirección real inyectada para Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment", 
    "name": "Rustibo Alzira",
    "image": "https://www.rustibo.net/images/rustibo.jpg", 
    "telephone": "962413948", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Pastora, 9",
      "addressLocality": "Alzira",
      "addressRegion": "Valencia",
      "postalCode": "46600",
      "addressCountry": "ES"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewsData.rating, 
      "reviewCount": reviewsData.reviews 
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "20:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "15:00"
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebas.variable} antialiased bg-[var(--color-white)] text-[var(--color-black)] min-h-screen`}>
        <Header />
        <main className="w-full">
          {children}
          <Footer /> 
        </main>
      </body>
    </html>
  );
}
