
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import LuxuryText from './LuxuryText';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div id="servizi" className="text-center max-w-2xl mx-auto mb-16 scroll-mt-32">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Percorsi Benessere</span>
          <LuxuryText as="h2" className="text-4xl md:text-5xl mb-6 font-serif">I nostri percorsi</LuxuryText>
          <p className="text-stone font-light">
            Soluzioni specifiche studiate per rispondere alle necessità biologiche della tua chioma. 
            Dal riequilibrio della cute alla protezione del colore.
          </p>
        </div>

        {/* Desktop Version (Grid + Modal) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[40px] overflow-hidden border border-sand shadow-lg cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-espresso via-espresso/60 to-transparent text-ivory translate-y-6 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                <p className="text-xs text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity mb-4 line-clamp-2">
                  {service.shortDesc}
                </p>
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
                  Scopri di più <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Version (Full Content List) */}
        <div className="block md:hidden space-y-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden border border-sand shadow-lg flex flex-col"
            >
              <div className="h-64 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-espresso/80 to-transparent">
                  <h3 className="font-serif text-2xl text-ivory">{service.title}</h3>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-2">Per chi è</h4>
                  <p className="text-stone text-sm leading-relaxed">{service.forWho}</p>
                </div>
                <div>
                  <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-2">Problema che risolve</h4>
                  <p className="text-stone text-sm leading-relaxed">{service.problem}</p>
                </div>
                <div>
                  <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-2">Cosa facciamo in salone</h4>
                  <ul className="space-y-3">
                    {service.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-stone">
                        <Check size={14} className="text-gold mt-0.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-sand/30 p-6 rounded-2xl border border-sand/50">
                  <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-1">Mantenimento a casa</h4>
                  <p className="text-stone text-xs italic leading-relaxed">{service.maintenance}</p>
                </div>
                <div className="pt-2">
                  <a 
                    href={service.bookingUrl || "https://page.fo/Consulenza-Personalizzata"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-espresso text-ivory py-5 rounded-2xl text-center font-bold uppercase tracking-widest text-[11px] hover:bg-gold transition-colors flex items-center justify-center gap-2"
                  >
                    Prenota questo trattamento
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal (Desktop Only) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] hidden md:flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-ivory w-full max-w-4xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 bg-ivory/80 p-2 rounded-full text-espresso hover:text-gold"
              >
                <X size={24} />
              </button>
              
              <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto">
                <img src={selectedService.image} className="w-full h-full object-cover" alt="" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <LuxuryText as="h3" className="text-3xl mb-4">{selectedService.title}</LuxuryText>
                
                <div className="space-y-6 text-stone text-sm">
                  <div>
                    <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-2">Per chi è</h4>
                    <p>{selectedService.forWho}</p>
                  </div>
                  <div>
                    <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-2">Problema che risolve</h4>
                    <p>{selectedService.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-2">Cosa facciamo in salone</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedService.steps.map((step, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={12} className="text-gold" /> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-sand/30 p-4 rounded-2xl border border-sand/50">
                    <h4 className="text-espresso font-bold uppercase tracking-widest text-[10px] mb-1">Mantenimento a casa</h4>
                    <p className="italic">{selectedService.maintenance}</p>
                  </div>
                </div>

                <a 
                  href={selectedService.bookingUrl || "https://page.fo/Consulenza-Personalizzata"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedService(null)}
                  className="mt-10 w-full bg-espresso text-ivory py-4 rounded-full inline-block text-center font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors"
                >
                  Prenota questo trattamento
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
