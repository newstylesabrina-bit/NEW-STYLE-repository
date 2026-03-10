
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import LuxuryText from './LuxuryText';
import glossPrima from '../assets/gloss-prima.png';
import glossDopo from '../assets/gloss-dopo.png';
import tonalizzazionePrima from '../assets/tonalizzazione-prima.png';
import tonalizzazioneDopo from '../assets/tonalizzazione-dopo.png';
import schiariturePrima from '../assets/schiariture-prima.png';
import schiaritureDopo from '../assets/schiariture-dopo.png';

const RESULTS = [
  {
    id: 1,
    title: "Gloss Illuminante",
    desc: "Rinnova la luminosità dei capelli e ravviva il colore naturale o cosmetico con riflessi morbidi e brillanti.",
    percorso: "Diagnosi con microcamera + Gloss personalizzato + Sigillatura del colore.",
    testoFinale: "Ogni gloss viene personalizzato in base alla base di partenza e al risultato desiderato.",
    before: glossPrima,
    after: glossDopo
  },
  {
    id: 2,
    title: "Schiariture",
    desc: "Illuminazioni su misura che donano profondità e movimento ai capelli mantenendo naturalezza ed eleganza.",
    percorso: "Diagnosi con microcamera + Tecnica di schiaritura personalizzata + Tonalizzazione + Trattamento rigenerante.",
    testoFinale: "Le schiariture vengono studiate per valorizzare incarnato, base naturale e stile personale.",
    before: schiariturePrima,
    after: schiaritureDopo
  },
  {
    id: 3,
    title: "Tonalizzazione Professionale",
    desc: "Neutralizza riflessi indesiderati e perfeziona il colore rendendolo più uniforme, luminoso e armonioso.",
    percorso: "Diagnosi con microcamera + Scelta del riflesso + Tonalizzazione tecnica + Gloss finale.",
    testoFinale: "La tonalizzazione permette di correggere e perfezionare il colore senza appesantire i capelli.",
    before: tonalizzazionePrima,
    after: tonalizzazioneDopo
  }
];

const ResultsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  const next = () => setCurrentIndex((prev) => (prev + 1) % RESULTS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + RESULTS.length) % RESULTS.length);

  return (
    <section id="risultati" className="py-14 bg-espresso text-ivory overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-4">
          <div className="max-w-xl">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Real Transformations</span>
            <LuxuryText as="h2" className="text-4xl md:text-5xl text-ivory font-serif">Risultati Visibili</LuxuryText>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-white/20 bg-white/5 hover:bg-gold hover:text-black hover:border-gold transition-all"
          >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all"
            >
              <ChevronRight size={24} />
  </button>
  <p className="text-[11px] text-gold/70 tracking-[0.25em] uppercase">
  scorri altri risultati →
</p>
</div>


</div>
           <div className="grid grid-cols-1 lg:grid-cols-[320px_520px_1fr] gap-10 items-start">
          <div className="relative group">
            <div className="w-[260px] aspect-[9/16] rounded-[32px] overflow-hidden shadow-2xl relative bg-stone/20">
             <AnimatePresence mode="wait">
  <motion.img
    key={currentIndex + (showAfter ? 'after' : 'before')}
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.6 }}
    src={showAfter ? RESULTS[currentIndex].after : RESULTS[currentIndex].before}
    alt={RESULTS[currentIndex].title}
    className="w-full h-full object-cover"
  />
</AnimatePresence>
              
              <div className="absolute top-6 left-6 flex gap-2">
                <button 
                  onClick={() => setShowAfter(false)}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${!showAfter ? 'bg-gold text-white' : 'bg-white/20 backdrop-blur-md text-white'}`}
                >
                  Prima
                </button>
                <button 
                  onClick={() => setShowAfter(true)}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${showAfter ? 'bg-gold text-white' : 'bg-white/20 backdrop-blur-md text-white'}`}
                >
                  Dopo
                </button>
              </div>

              <div className="absolute bottom-6 right-6">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <Sparkles size={20} className="text-gold" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
          className="lg:-ml-10"
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl mb-4 text-gold italic">{RESULTS[currentIndex].title}</h3>
            <p className="text-ivory/70 text-lg font-light leading-relaxed mb-8">
              {RESULTS[currentIndex].desc}
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Il Percorso</p>
                <p className="text-sm">{RESULTS[currentIndex].percorso}</p>
              </div>
              <p className="text-[10px] text-ivory/40 italic">
                {RESULTS[currentIndex].testoFinale}
              </p>
            </div>

            <div className="mt-12">
              <a 
                href="https://page.fo/Consulenza-Personalizzata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gold hover:text-ivory transition-colors group"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-bold">Inizia la tua trasformazione</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
