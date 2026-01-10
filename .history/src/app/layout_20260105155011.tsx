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
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  collectionsAPI,
  headerHighlightsAPI,
  navigationAPI,
} from "@/services/api";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clover Studio: Velas Artesanales, Wax-Melts y Decoración",
  description:
    "Descubre nuestras velas artesanales y wax-melts hechos a mano con cera de soja y fragancias únicas. Añade un toque especial a tu hogar con nuestra decoración exclusiva.",
  keywords: [
    "Clover Studio",
    "velas artesanales",
    "wax-melts",
    "decoración",
    "cera de soja",
    "fragancias",
    "velas decorativas",
  ],
  authors: [{ name: "Clover Studio", url: "https://cloverstudio.es" }],
  creator: "Clover Studio",
  publisher: "Clover Studio",
  robots: "index, follow",
  openGraph: {
    title: "Clover Studio - Velas Artesanales, Wax-Melts y Decoración",
    description:
      "Descubre nuestras velas artesanales y wax-melts hechos a mano con cera de soja y fragancias únicas. Añade un toque especial a tu hogar con nuestra decoración exclusiva.",
    url: "https://cloverstudio.es",
    siteName: "Clover Studio",
    images: [
      {
        url: "/logo.svg",
        width: 260,
        height: 260,
        alt: "Clover Studio Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export async function loader() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["collections"],
    queryFn: collectionsAPI.getAll,
  });

  await queryClient.prefetchQuery({
    queryKey: ["navigation"],
    queryFn: navigationAPI.getAll,
  });

  await queryClient.prefetchQuery({
    queryKey: ["header-highlights"],
    queryFn: headerHighlightsAPI.getAll,
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dehydratedState } = await loader();
  return (
    <html lang="es">
      <body className={eb_garamond.className}>
        <ReactQueryProvider>
          <DataProvider>
            <CartProvider>
              <DataBoundary>
                <HydrationBoundary state={dehydratedState}>
                  <Header />
                </HydrationBoundary>
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
