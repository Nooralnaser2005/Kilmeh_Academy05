import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const instagramUrl = "https://www.instagram.com/kilmeh_academy/";
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=962781159642&text&type=phone_number&app_absent=0";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300"
        title="Contact on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>

      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.1 }}
        className="w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
        title="Follow on Instagram"
      >
        <Instagram size={28} />
      </motion.a>
    </div>
  );
}
