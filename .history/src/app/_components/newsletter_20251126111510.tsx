"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, CheckCircle2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center max-w-2xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="relative w-24 h-24 mb-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-white/20 rounded-full blur-xl"
          />
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
        </motion.div>

        <div className="w-full text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-3 text-white"
          >
            Únete a nuestra newsletter
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/80 mb-6 text-sm md:text-base"
          >
            Accede a descuentos exclusivos y novedades antes que nadie
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <div className="relative flex-1 w-full max-w-xs mx-auto sm:mx-0">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isSubmitted}
                className="w-full pl-11 pr-4 py-6 rounded-lg bg-white text-gray-900 border-0 hover:shadow-lg focus:shadow-xl transition-all"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="px-8 py-6 rounded-lg bg-white text-primary font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  ¡Suscrito!
                </motion.span>
              ) : isLoading ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  ⏳
                </motion.span>
              ) : (
                "Suscribirme"
              )}
            </Button>
          </motion.form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-sm mt-4 font-medium"
            >
              ¡Gracias por suscribirte! Revisa tu correo 💌
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Sparkles animados de fondo - más notorios */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparkles flotantes grandes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
              y: [0, -150],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "-10px",
              filter: "blur(1px)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}

        {/* Sparkles estáticos que parpadean */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`static-${i}`}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
            }}
          />
        ))}

        {/* Destellos diagonales */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            initial={{ opacity: 0, x: -100, rotate: -45 }}
            animate={{
              opacity: [0, 0.6, 0],
              x: [0, 200],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            className="absolute w-20 h-0.5 bg-white"
            style={{
              left: `${i * 20}%`,
              top: `${20 + i * 15}%`,
              filter: "blur(1px)",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Efecto de resplandor general */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
