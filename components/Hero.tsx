
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Search, Sparkles } from 'lucide-react';
import LuxuryText from './LuxuryText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0"
        >
          <LuxuryText as="h1" className="text-5xl md:text-6xl mb-4 leading-[0.85] md:leading-tight" gradient underline>
            New Style<br />Parrucchieri
          </LuxuryText>
          <p className="text-stone text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
            La bellezza dei tuoi capelli inizia dalla salute della tua cute.
            Specialisti in percorsi personalizzati a <span className="text-espresso font-medium">Mansuè (TV)</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://page.fo/Consulenza-Personalizzata"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-espresso text-ivory px-8 py-4 rounded-full items-center gap-3 hover:bg-gold transition-all transform hover:scale-105 shadow-md font-bold text-xs uppercase tracking-widest"
            >
              Prenota Consulenza <ArrowRight size={18} />
            </a>
            <a 
              href="#servizi"
              className="border border-sand px-8 py-4 rounded-full text-espresso hover:border-gold transition-all font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              Scopri i Percorsi
            </a>
          </div>

          <div className="mt-16 flex items-center gap-10">
            <div className="flex flex-col">
              <span className="font-serif text-3xl text-espresso">Sabrina Carretta</span>
              <span className="text-[15px] uppercase tracking-widest text-gold font-bold">Founder & Hair Stylist</span>
            </div>
            <div className="h-12 w-[1px] bg-sand" />
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-medium text-espresso italic">"Oltre il semplice taglio"</span>
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/4] mt-12 md:mt-16 rounded-[40px] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200" 
              alt="Blonde hair styling" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
          </div>
          
          {/* Value floating cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-20 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-white/40 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gold/10 p-2 rounded-xl text-gold"><Search size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone font-bold">Diagnosi</p>
                <p className="text-sm text-espresso font-serif">Cute & Capelli</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 bottom-20 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-white/40 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gold/10 p-2 rounded-xl text-gold"><Sparkles size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone font-bold">Risultati</p>
                <p className="text-sm text-espresso font-serif">Visibili al 100%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
