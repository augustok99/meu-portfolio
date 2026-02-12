import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

// Número pode ser configurado via Vite env: VITE_WHATSAPP ()
const phone = (import.meta.env.VITE_WHATSAPP as string) || "";
const defaultText = encodeURIComponent(
  "Olá! Gostaria de falar sobre um projeto.",
);

export default function WhatsAppFloating() {
  const href = `https://wa.me/${phone}?text=${defaultText}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato WhatsApp"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="fixed md:bottom-6 bottom-18 md:right-6 right-2 z-50 flex items-center bg-[#25D366] text-white px-3 py-3 mb-5 mr-2 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-150 print:hidden"
    >
      <SiWhatsapp className="w-8 h-8" />
    </motion.a>
  );
}
