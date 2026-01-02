import { clientEnvs } from "@/config/client-envs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingWhatsappIcon = () => {
  return (
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
  );
};
