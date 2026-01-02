import type React from "react";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactQueryProvider from "@/app/provider";

import { CartProvider } from "@/context/cart-context";
import { DataProvider } from "@/context/data-context";
import { DataBoundary } from "@/components/DataBoundary";
import { Toaster } from "@/components/ui/sonner";
import { CartSidebar } from "@/components/CartSidebar";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiénes Somos - Clover Studio",
  description:
    "Conoce la historia de Clover Studio: un pequeño emprendimiento que crea velas, rosas y aromatizantes artesanales con amor y dedicación.",
  openGraph: {
    title: "Quiénes Somos - Clover Studio",
    description:
      "Conoce la historia de Clover Studio: un pequeño emprendimiento que crea velas, rosas y aromatizantes artesanales con amor y dedicación.",
    url: "https://cloverstudio.es/quienes-somos",
    siteName: "Clover Studio",
    images: [
      {
        url: "/logo.svg",
        width: 260,
        height: 260,
        alt: "Logo de Clover Studio",
      },
    ],
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={eb_garamond.className}>
        <ReactQueryProvider>
          <DataProvider>
            <CartProvider>
              <DataBoundary>
                <Header />
                <div>
                  <main className="flex-1">{children}</main>
                  <Toaster />
                  <CartSidebar />
                </div>
                <Footer />
              </DataBoundary>
            </CartProvider>
          </DataProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
