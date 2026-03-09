
import React from 'react';
import { motion } from 'framer-motion';

interface LuxuryTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  gradient?: boolean;
  underline?: boolean;
}

const LuxuryText: React.FC<LuxuryTextProps> = ({ 
  children, 
  as: Tag = 'h2', 
  className = '', 
  gradient = false,
  underline = false 
}) => {
  return (
    <div className="relative inline-block w-full">
      <Tag className={`
        font-serif tracking-tight leading-tight 
        ${gradient ? 'bg-gradient-to-r from-espresso via-gold to-espresso bg-clip-text text-transparent' : 'text-espresso'}
        ${className}
      `}>
        {children}
      </Tag>
      {underline && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
          className="h-[1px] bg-gold/40 mt-1 origin-left w-full"
        />
      )}
    </div>
  );
};

export default LuxuryText;
