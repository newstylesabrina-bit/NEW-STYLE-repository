
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Metodo', href: '#metodo' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Risultati', href: '#risultati' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contatti', href: '#contatti' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img
  src="/logo-newstyle-parrucchieri.png"
  alt="New Style Parrucchieri"
  className="max-h-[64px] md:max-h-[80px] w-auto"
/>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-[16px] uppercase tracking-[0.14em] text-espresso hover:text-gold transition-all duration-300 font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://page.fo/Consulenza-Personalizzata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-espresso text-ivory px-7 py-3 rounded-full text-[15px] uppercase tracking-[0.12em] transition-all duration-300 hover:bg-gold hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] shadow-md font-bold"
            >
              Prenota Consulenza
            </a>
          </div>

          <button className="lg:hidden text-espresso" onClick={() => setIsMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center p-10"
          >
            <button className="absolute top-8 right-8 text-espresso" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="font-serif text-4xl text-espresso hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://page.fo/Consulenza-Personalizzata"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-gold text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Prenota ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
