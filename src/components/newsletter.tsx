"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Gift } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para suscribir al newsletter
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-[#8B1E3F]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#F8C8DC] rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-10 h-10 text-[#8B1E3F]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Únete a Nuestra Comunidad</h2>

          <p className="text-xl text-pink-100 mb-8">
            Recibe ofertas exclusivas, nuevos productos y tips para crear ambientes únicos en tu hogar
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email aquí..."
                    className="w-full pl-12 pr-4 py-4 rounded-full border-0 focus:ring-2 focus:ring-[#F8C8DC] outline-none text-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F] px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </div>

              <p className="text-sm text-pink-200 mt-4">
                * Prometemos no enviarte spam. Solo contenido valioso y ofertas especiales.
              </p>
            </form>
          ) : (
            <div className="bg-[#BEE8CC] text-[#8B1E3F] p-6 rounded-2xl max-w-md mx-auto">
              <h3 className="font-bold text-xl mb-2">¡Bienvenido a la familia Clover! 🎉</h3>
              <p>Te hemos enviado un email de confirmación con un descuento especial del 10%</p>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F8C8DC] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#8B1E3F] font-bold">10%</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Descuento de Bienvenida</h4>
              <p className="text-pink-200 text-sm">En tu primera compra</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#BEE8CC] rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-[#8B1E3F]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Ofertas Exclusivas</h4>
              <p className="text-pink-200 text-sm">Solo para suscriptores</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#FDE68A] rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-[#8B1E3F]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Acceso Anticipado</h4>
              <p className="text-pink-200 text-sm">A nuevos productos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
