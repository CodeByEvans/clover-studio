"use client";

import { useCart } from "@/context/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, Download } from "lucide-react";
import { useState } from "react";
import { sendOrderViaWhatsApp } from "@/lib/sendOrderViaWhatsApp";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export function CartSidebar() {
  const {
    cart,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    total,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    sendOrderViaWhatsApp(cart, total);
    clearCart();
    closeCart();
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent
        side="right"
        className="w-full sm:w-96 bg-background border-l border-border"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold">Mi Carrito</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Tu carrito está vacío
            </p>
            <Button
              variant="outline"
              onClick={closeCart}
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Seguir comprando
            </Button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 space-y-4 mb-6 max-h-96 overflow-y-auto px-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-secondary rounded-lg border border-border"
                >
                  {item.portrait && (
                    <img
                      src={item.portrait || "/placeholder.svg"}
                      alt={item.title}
                      className="w-20 h-20 rounded object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      €{item.price.toFixed(2)}
                    </p>

                    {item.fragrance && (
                      <p className="text-sm text-muted-foreground">
                        Aroma: {item.fragrance.name} ({item.fragrance.intensity}
                        )
                      </p>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item, item.quantity - 1)}
                        className="p-1 hover:bg-primary/20 rounded transition"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                        className="p-1 hover:bg-primary/20 rounded transition"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeItem(item)}
                        className="ml-auto p-1 hover:bg-red-100 text-red-600 rounded transition"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-border pt-4 mb-6 px-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-foreground">
                  Total:
                </span>
                <span className="text-2xl font-bold text-primary">
                  €{total.toFixed(2)}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-3 px-4">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-6"
                >
                  <>
                    <MdOutlineShoppingCartCheckout size={18} className="mr-2" />
                    Completar compra
                  </>
                </Button>
                <Button
                  variant="outline"
                  onClick={closeCart}
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Seguir comprando
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Al completar tu compra, recibirás un PDF y se abrirá WhatsApp
                para contactarnos.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
