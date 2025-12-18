import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactQueryProvider from "@/app/provider";
import { NotificationsProvider } from "@/context/notifications-context";
import NotificationContainer from "@/components/notifications/notification-container";

import { CartProvider } from "@/context/cart-context";
import { DataProvider } from "@/context/data-context";
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
  return (
    <html lang="es">
      <body className={inter.className}>
        <ReactQueryProvider>
          <DataProvider>
            <NotificationsProvider>
              <CartProvider>
                <DataBoundary>
                  <Header />
                  <div>
                    <main className="flex-1">{children}</main>
                  </div>
                  <Footer />
                </DataBoundary>

                <NotificationContainer />
              </CartProvider>
            </NotificationsProvider>
          </DataProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
