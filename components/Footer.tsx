
import React from 'react';

import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-espresso text-ivory/40 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="font-serif text-xl tracking-tight leading-none text-ivory">New Style</span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-gold mt-1">Parrucchieri di Sabrina Carretta</span>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-center">
          &copy; {new Date().getFullYear()} New Style Parrucchieri. All rights reserved. <br className="md:hidden" />
          <span className="mx-2 hidden md:inline">|</span> 
          P.IVA 03643610268 <span className="mx-2 hidden md:inline">|</span> 
          <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/cookie-policy" className="hover:text-gold transition-colors">Cookie Policy</Link>
        </p>
        <div className="text-[10px] uppercase tracking-widest">
          Design: Salone6Zero
        </div>
      </div>
    </footer>
  );
};

export default Footer;
