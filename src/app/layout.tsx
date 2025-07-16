import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { FavoritesProvider } from "@/contexts/favorites-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clover Studio",
  description:
    "Descubre nuestra colección de velas artesanales, wax melts y productos aromáticos únicos. Cada pieza está creada con amor para llenar tu hogar de calidez y personalidad.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <FavoritesProvider>
          <Header />
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
