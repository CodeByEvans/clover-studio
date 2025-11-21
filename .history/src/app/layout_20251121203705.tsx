import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactQueryProvider from "@/app/provider";
import { NotificationsProvider } from "@/context/notifications-context";
import NotificationContainer from "@/components/notifications/notification-container";
import { Collections } from "@/types/collection.type";
import { getCollections } from "@/utils/supabase/collections";
import { CartProvider } from "@/context/cart-context";
import { DataProvider } from "@/context/product-context";
import { DataBoundary } from "@/components/DataBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... tu metadata
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections: Collections = await getCollections();

  return (
    <html lang="es">
      <body className={inter.className}>
        <ReactQueryProvider>
          {/* ✅ Header FUERA de DataBoundary - puede ser Server Component */}
          <Header collections={collections} />

          <DataProvider>
            <CartProvider>
              <NotificationsProvider>
                <DataBoundary>
                  {/* Solo el contenido que necesita el contexto está aquí */}
                  <div className="flex min-h-screen flex-col">
                    <main className="flex-1">{children}</main>
                  </div>
                </DataBoundary>

                {/* NotificationContainer necesita estar dentro de NotificationsProvider pero fuera de DataBoundary */}
                <NotificationContainer />
              </NotificationsProvider>
            </CartProvider>
          </DataProvider>

          {/* ✅ Footer FUERA de DataBoundary - puede ser Server Component */}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
