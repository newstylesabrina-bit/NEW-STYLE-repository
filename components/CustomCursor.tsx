
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (reducedMotion) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        translateX: mouseX,
        translateY: mouseY,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: isHovering ? 90 : 24,
          height: isHovering ? 90 : 24,
          backgroundColor: isHovering ? 'rgba(176, 141, 87, 0.15)' : 'transparent',
          borderColor: isHovering ? 'rgba(176, 141, 87, 0.4)' : '#B08D57',
        }}
        transition={{ duration: 0.3, ease: 'circOut' }}
        className="border border-gold rounded-full flex items-center justify-center backdrop-blur-[2px]"
      >
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] uppercase font-medium tracking-[0.2em] text-gold"
          >
            Prenota
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
