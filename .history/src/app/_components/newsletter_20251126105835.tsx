import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);

    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center max-w-2xl mx-auto"
      >
        {/* Logo con animación */}
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
            className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC]/40 to-[#D3B5E5]/40 rounded-full blur-xl"
          />
          <div className="relative w-full h-full bg-gradient-to-br from-[#F8C8DC] to-[#D3B5E5] rounded-full flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <div className="w-full text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] bg-clip-text text-transparent"
          >
            Únete a nuestra newsletter
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-6 text-sm md:text-base"
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
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isSubmitted}
                className="w-full pl-11 pr-4 py-6 rounded-lg bg-card/50 border-border hover:border-[#F8C8DC]/50 focus:border-[#F8C8DC] transition-all backdrop-blur-sm"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="px-8 py-6 rounded-lg bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] text-gray-900 font-semibold hover:shadow-lg hover:shadow-[#F8C8DC]/20 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
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
              className="text-[#F8C8DC] text-sm mt-4"
            >
              ¡Gracias por suscribirte! Revisa tu correo 💌
            </motion.p>
          )}
        </div>

        {/* Partículas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 0.5, 0],
                y: [20, -100],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#F8C8DC] rounded-full blur-sm"
              style={{ left: `${30 + i * 20}%` }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
