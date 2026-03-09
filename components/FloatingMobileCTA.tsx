
import React from 'react';
import { motion } from 'framer-motion';

const FloatingMobileCTA: React.FC = () => {
  const whatsappUrl = "https://wa.me/390422741899?text=Vorrei%20prenotare%20una%20consulenza%20personalizzata";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="md:hidden fixed bottom-[110px] right-[20px] z-[999]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[85px] h-[85px] bg-gold text-white rounded-full shadow-[0_10px_25px_rgba(176,141,87,0.4)] border-2 border-white/20 active:scale-95 transition-transform"
      >
        <div className="flex flex-col items-center leading-none">
          <span className="text-[10px] uppercase tracking-[0.1em] font-bold mb-1">Prenota</span>
          <span className="text-[8px] uppercase tracking-[0.05em] opacity-80 font-medium">Ora</span>
        </div>
      </a>
    </motion.div>
  );
};

export default FloatingMobileCTA;
