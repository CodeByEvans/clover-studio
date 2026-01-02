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
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`https://wa.me/${clientEnvs.whatsappPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors">
          <FaWhatsapp size={32} />
        </div>
      </Link>
    </motion.div>
  );
};
