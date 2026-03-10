
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, X, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../constants';
import LuxuryText from './LuxuryText';
import { Package } from '../types';

const PackagesSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const closeModal = () => setSelectedPackage(null);

  return (
    <section id="pacchetti" className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Esperienze Complete</span>
          <LuxuryText as="h2" className="text-4xl md:text-5xl mb-6">I Nostri Percorsi</LuxuryText>
          <p className="text-stone font-light">
            Scegli il livello di cura più adatto alle tue esigenze. Ogni pacchetto è studiato per offrire un'esperienza di benessere totale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                relative p-10 rounded-[40px] border flex flex-col h-full transition-all duration-500
                ${pkg.isPremium 
                  ? 'bg-espresso text-ivory border-gold shadow-2xl scale-105 z-10' 
                  : 'bg-white text-espresso border-sand shadow-sm hover:shadow-md'
                }
              `}
            >
              {pkg.isPremium && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                  <Sparkles size={12} /> Consigliato
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-3xl mb-2">{pkg.name}</h3>
                <p className={`text-sm ${pkg.isPremium ? 'text-ivory/60' : 'text-stone'}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-serif">{pkg.price}</span>
                {pkg.price.includes('+') && <span className="text-sm ml-1 opacity-60">a partire da</span>}
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${pkg.isPremium ? 'bg-gold/20 text-gold' : 'bg-sand text-espresso'}`}>
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedPackage(pkg)}
                className={`
                  w-full py-4 rounded-2xl text-center text-[10px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2
                  ${pkg.isPremium 
                    ? 'bg-gold text-white hover:bg-white hover:text-espresso' 
                    : 'bg-espresso text-ivory hover:bg-gold'
                  }
                `}
              >
                PRENOTA ORA
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-espresso/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-ivory rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white md:bg-white/20 backdrop-blur-md text-espresso hover:bg-gold hover:text-white transition-all shadow-lg border border-sand/20"
              >
                <X size={24} />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-5/4 h-32 md:h-auto relative">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent md:hidden" />
              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-2">Dettagli Percorso</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-2 leading-tight">{selectedPackage.name}</h2>
                  <p className="text-2xl text-gold font-serif">{selectedPackage.price}</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-3">Per chi è</h4>
                    <p className="text-stone font-light leading-relaxed">{selectedPackage.forWho}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-3">Problema che risolve</h4>
                    <p className="text-stone font-light leading-relaxed">{selectedPackage.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-3">Cosa facciamo in salone</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedPackage.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-stone">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-3xl bg-sand/30 border border-sand">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso mb-2">Mantenimento a casa</h4>
                    <p className="text-sm text-stone italic">{selectedPackage.homeCare}</p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={selectedPackage.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 rounded-2xl bg-espresso text-ivory text-[12px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl group"
                    >
                      PRENOTA QUESTO TRATTAMENTO
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PackagesSection;
