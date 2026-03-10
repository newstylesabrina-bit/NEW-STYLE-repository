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
    <section id="pacchetti" className="py-12 md:py-20 bg-ivory relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">
            Esperienze Complete
          </span>

          <LuxuryText as="h2" className="text-4xl md:text-5xl mb-6">
            I Nostri Percorsi
          </LuxuryText>

          <p className="text-stone font-light leading-relaxed">
            Scegli il livello di cura più adatto alle tue esigenze. Ogni pacchetto è studiato
            per offrire un&apos;esperienza di benessere totale.
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
                relative p-8 md:p-10 rounded-[40px] border flex flex-col h-full transition-all duration-500
                ${
                  pkg.isPremium
                    ? 'bg-espresso text-ivory border-gold shadow-2xl md:scale-105 z-10'
                    : 'bg-white text-espresso border-sand shadow-sm hover:shadow-md'
                }
              `}
            >
              {pkg.isPremium && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-2 rounded-full text-[13px] md:text-[14px] uppercase tracking-[0.15em] font-bold flex items-center gap-2 shadow-xl whitespace-nowrap">
                  <Sparkles size={18} />
                  Consigliato
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-3xl mb-2">{pkg.name}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    pkg.isPremium ? 'text-ivory/70' : 'text-stone'
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-serif">{pkg.price}</span>
                {pkg.price.includes('+') && (
                  <span className="text-sm ml-1 opacity-60">a partire da</span>
                )}
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`mt-1 p-0.5 rounded-full ${
                        pkg.isPremium ? 'bg-gold/20 text-gold' : 'bg-sand text-espresso'
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-light leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedPackage(pkg)}
                className={`
                  w-full py-4 rounded-2xl text-center text-[10px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2
                  ${
                    pkg.isPremium
                      ? 'bg-gold text-white hover:bg-white hover:text-espresso'
                      : 'bg-espresso text-ivory hover:bg-gold'
                  }
                `}
              >
                Scopri di più
              </button>
            </motion.div>
          ))}
        </div>
      </div>

            <AnimatePresence>
  {selectedPackage && (
    <div className="fixed inset-0 z-[100]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="absolute inset-0 bg-black/70"
      />

      {/* MOBILE: SOLO TESTO */}
      <div className="md:hidden absolute inset-0 flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full bg-ivory overflow-y-auto px-6 pt-10 pb-8"
        >
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-espresso shadow-sm"
            aria-label="Chiudi"
          >
            <X size={24} />
          </button>

          <div className="max-w-xl pr-12">
            <h2 className="text-4xl font-serif text-espresso mb-8 leading-tight">
              {selectedPackage.name}
            </h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso mb-3">
                  Per chi è
                </h4>
                <p className="text-stone leading-relaxed text-[18px]">
                  {selectedPackage.forWho}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso mb-3">
                  Problema che risolve
                </h4>
                <p className="text-stone leading-relaxed text-[18px]">
                  {selectedPackage.problem}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso mb-3">
                  Cosa facciamo in salone
                </h4>
                <div className="space-y-3">
                  {selectedPackage.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={18} className="mt-1 shrink-0 text-gold" />
                      <p className="text-stone leading-relaxed text-[18px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-sand/30 border border-sand">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso mb-2">
                  Mantenimento a casa
                </h4>
                <p className="text-[17px] text-stone italic leading-relaxed">
                  {selectedPackage.homeCare}
                </p>
              </div>

              <div className="pt-2 pb-4">
                <a
                  href={selectedPackage.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModal}
                  className="w-full py-4 rounded-2xl bg-espresso text-ivory text-[11px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 shadow-xl"
                >
                  PRENOTA QUESTO TRATTAMENTO
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl max-h-[90vh] bg-ivory"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-30 p-3 rounded-full bg-ivory/95 text-espresso hover:bg-gold hover:text-white transition-all shadow-lg"
          >
            <X size={24} />
          </button>

          <div className="flex w-full max-h-[90vh]">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-2">
                  Dettagli Percorso
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-2 pr-14 md:pr-0 leading-tight">
                  {selectedPackage.name}
                </h2>

                <p className="text-2xl text-gold font-serif">{selectedPackage.price}</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-3">
                    Per chi è
                  </h4>
                  <p className="text-stone font-light leading-relaxed">
                    {selectedPackage.forWho}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-3">
                    Problema che risolve
                  </h4>
                  <p className="text-stone font-light leading-relaxed">
                    {selectedPackage.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-3">
                    Cosa facciamo in salone
                  </h4>

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
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-espresso mb-2">
                    Mantenimento a casa
                  </h4>
                  <p className="text-sm text-stone italic">{selectedPackage.homeCare}</p>
                </div>

                <div className="pt-4">
                  <a
                    href={selectedPackage.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeModal}
                    className="w-full py-5 rounded-2xl bg-espresso text-ivory text-[12px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl group"
                  >
                    PRENOTA QUESTO TRATTAMENTO
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
</AnimatePresence>
    </section>
  );
};

export default PackagesSection;
