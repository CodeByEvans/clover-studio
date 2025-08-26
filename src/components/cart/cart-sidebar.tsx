"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  FileText,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalInEuros = getTotalPrice();

  // Manejo de animaciones
  useEffect(() => {
    // Limpiamos cualquier timeout previo
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (isOpen) {
      setIsVisible(true);
      // pequeña demora para disparar la animación
      timeoutRef.current = setTimeout(() => setIsAnimating(true), 20);
    } else {
      setIsAnimating(false);
      // ocultamos el sidebar después de que termine la transición
      timeoutRef.current = setTimeout(() => setIsVisible(false), 300);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  const handleClose = () => {
    if (!isAnimating) return; // prevenir clicks mientras está cerrando
    setIsAnimating(false);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const pdfContent = `CLOVER RESIN STUDIO - PEDIDO

Productos:
${items
  .map(
    (item) =>
      `- ${item.product.name} x${item.quantity} - €${
        item.product.price * item.quantity
      }`
  )
  .join("\n")}

Total: €${totalInEuros}
Fecha: ${new Date().toLocaleDateString()}`;

    const blob = new Blob([pdfContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pedido-clover-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    setIsExporting(false);
  };

  const handleWhatsAppOrder = () => {
    const message = `¡Hola! Me gustaría hacer un pedido:\n\n${items
      .map((item) => `• ${item.product.name} x${item.quantity}`)
      .join(
        "\n"
      )}\n\nTotal: €${totalInEuros}\n\n¿Podrían confirmar disponibilidad y precio final?`;
    window.open(
      `https://wa.me/34691453544?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-all duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-6 border-b border-gray-100 transform transition-all duration-500 ${
            isAnimating
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`transform transition-all duration-700 ${
                isAnimating ? "rotate-0 scale-100" : "rotate-180 scale-0"
              }`}
            >
              <ShoppingBag className="w-6 h-6 text-[#8B1E3F]" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Mi Carrito</h2>
            <span
              className={`bg-[#F8C8DC] text-[#8B1E3F] px-2 py-1 rounded-full text-sm font-semibold transform transition-all duration-500 ${
                isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              {getTotalItems()}
            </span>
          </div>
          <button
            onClick={handleClose}
            className={`p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:rotate-90 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div
              className={`flex flex-col items-center justify-center h-full text-center transform transition-all duration-700 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-500 ${
                  isAnimating ? "scale-100 rotate-0" : "scale-0 rotate-45"
                }`}
              >
                <ShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-[#999999] mb-4">
                Agrega productos para comenzar tu pedido
              </p>
              <button
                onClick={handleClose}
                className={`bg-[#8B1E3F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a1a37] transition-all duration-300 transform hover:scale-105 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                Explorar Productos
              </button>
            </div>
          ) : (
            items.map((item, index) => {
              const totalItemPrice = item.product.price * item.quantity;
              return (
                <div
                  key={item.product.id}
                  className={`flex gap-4 p-4 bg-gray-50 rounded-xl transform transition-all duration-500 hover:shadow-md hover:scale-[1.02] ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`transform transition-all duration-500 ${
                      isAnimating ? "scale-100 rotate-0" : "scale-0 rotate-12"
                    }`}
                    style={{ transitionDelay: `${index * 50 + 50}ms` }}
                  >
                    <Image
                      src={item.product.images[0].large || "/placeholder.svg"}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-[#999999] mb-2">
                      {item.product.category.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span
                          className={`w-8 text-center font-medium transform transition-all duration-300 ${
                            isAnimating ? "scale-100" : "scale-0"
                          }`}
                          style={{ transitionDelay: `${index * 50 + 100}ms` }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        className={`text-right transform transition-all duration-500 ${
                          isAnimating
                            ? "translate-x-0 opacity-100"
                            : "translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 50 + 150}ms` }}
                      >
                        <p className="font-bold text-[#8B1E3F]">
                          €{totalItemPrice}
                        </p>
                        <p className="text-xs text-[#999999]">
                          €{item.product.price} c/u
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className={`border-t border-gray-100 p-6 space-y-4 transform transition-all duration-500 ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div
              className={`flex justify-between items-center text-xl font-bold transform transition-all duration-700 ${
                isAnimating ? "scale-100" : "scale-95"
              }`}
            >
              <span>Total:</span>
              <span
                className={`text-[#8B1E3F] transform transition-all duration-500 ${
                  isAnimating ? "scale-100" : "scale-0"
                }`}
              >
                €{totalInEuros}
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppOrder}
                className={`w-full bg-[#8B1E3F] hover:bg-[#7a1a37] text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </button>

              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className={`w-full border-2 border-[#F8C8DC] text-[#8B1E3F] hover:bg-[#F8C8DC] py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 transform hover:scale-105 active:scale-95 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <FileText
                  className={`w-5 h-5 ${isExporting ? "animate-pulse" : ""}`}
                />
                {isExporting ? "Generando PDF..." : "Exportar PDF"}
              </button>

              <button
                onClick={clearCart}
                className={`w-full border-2 border-red-400 text-red-500 hover:bg-red-50 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <Trash2 className="w-5 h-5" />
                Vaciar Carrito
              </button>
            </div>

            <p
              className={`text-xs text-[#999999] text-center transform transition-all duration-500 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Los precios pueden variar. Confirmaremos el precio final por
              WhatsApp.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
