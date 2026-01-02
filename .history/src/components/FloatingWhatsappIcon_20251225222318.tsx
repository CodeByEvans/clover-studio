"use client";
import { clientEnvs } from "@/config/client-envs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const FloatingWhatsappIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Link
        href={`https://wa.me/${clientEnvs.whatsappPhone}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-green-500 hover:bg-green-600 hover:scale-105 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out">
          <FaWhatsapp size={32} />
        </div>
      </Link>
    </motion.div>
  );
};

export default FloatingWhatsappIcon;
