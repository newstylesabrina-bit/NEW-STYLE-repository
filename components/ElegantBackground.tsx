
import React from 'react';
import { motion } from 'framer-motion';

const ElegantBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ivory">
      {/* Silk-like light blobs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-sand rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
      />
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] bg-gold/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
      />
      <motion.div
        animate={{
          x: [0, 30, -50, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-ivory rounded-full mix-blend-overlay filter blur-[150px] opacity-50"
      />

      {/* Subtle hair-fiber lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="fibers" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <motion.path
            animate={{ d: ["M 10 10 Q 50 10 90 90", "M 10 10 Q 50 90 90 10", "M 10 10 Q 50 10 90 90"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            d="M 10 10 Q 50 10 90 90"
            stroke="#B08D57"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#fibers)" />
      </svg>
    </div>
  );
};

export default ElegantBackground;
