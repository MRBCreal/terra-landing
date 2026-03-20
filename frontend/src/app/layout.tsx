import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CookieBanner from "@/components/CookieBanner";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Terra - Construcción para Resultados Superiores y Duraderos | 160 Años de Excelencia",
  description: "Terra Building Companies - Más de 160 años construyendo el futuro. Especialistas en construcción industrial, infraestructura y proyectos de gran escala. Resultados superiores y duraderos.",
  keywords: "construcción, infraestructura, proyectos industriales, Terra Building Companies, construcción comercial, ingeniería civil",
  authors: [{ name: "Terra Building Companies, Inc." }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    url: "https://terra-landing.netlify.app/",
    title: "Terra - Construcción para Resultados Superiores y Duraderos",
    description: "Más de 160 años construyendo el futuro. Especialistas en construcción industrial, infraestructura y proyectos de gran escala.",
    images: [
      {
        url: "https://terra-landing.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra - Construcción para Resultados Superiores",
    description: "Más de 160 años construyendo el futuro. Especialistas en construcción industrial e infraestructura.",
    images: ["https://terra-landing.netlify.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900`}>
        <Navigation />
        <CookieBanner />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
