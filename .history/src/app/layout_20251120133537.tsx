import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactQueryProvider from "@/app/provider";
import { NotificationsProvider } from "@/contexts/notifications-context";
import NotificationContainer from "@/components/notifications/notification-container";
import { Collections } from "@/types/collection.type";
import { getCollections } from "@/utils/supabase/collections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Clover Studio", // Para páginas individuales
    default: "Clover Studio",
  },
  description:
    "Descubre nuestra colección de velas artesanales, wax melts y productos aromáticos únicos. Cada pieza está creada con amor para llenar tu hogar de calidez y personalidad.",
  keywords: ["velas", "artesanales", "wax melts", "aromáticos", "hogar"],
  authors: [{ name: "Clover Studio" }],
  creator: "Clover Studio",
  metadataBase: new URL("https://cloverstudio.es"),
  openGraph: {
    title: "Clover Studio",
    description: "Velas artesanales, wax melts y productos aromáticos únicos",
    url: "https://cloverstudio.com",
    siteName: "Clover Studio",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Collection fetch
  const collections: Collections = await getCollections();
  return (
    <html lang="es">
      <body className={inter.className}>
        <NotificationsProvider>
          <ReactQueryProvider>
            <div className="flex min-h-screen flex-col">
              <Header collections={collections} />
              <main className="flex-1">{children}</main>
              <Footer />
              <NotificationContainer />
            </div>
          </ReactQueryProvider>
        </NotificationsProvider>
      </body>
    </html>
  );
}
