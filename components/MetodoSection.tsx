
import React from 'react';
import { Check } from 'lucide-react';
import LuxuryText from './LuxuryText';

const MetodoSection: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-sand/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-[30px] overflow-hidden shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1200" 
                alt="Microcamera" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                <div className="bg-white/90 p-6 rounded-2xl text-center">
                  <p className="text-gold font-serif text-xl mb-1 italic">Analisi Molecolare</p>
                  <p className="text-stone text-[10px] uppercase tracking-widest font-bold">Zoom 200x</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <LuxuryText as="h2" className="text-4xl md:text-5xl mb-6">Il Metodo <br /> Diagnosi Profonda</LuxuryText>
            <p className="text-stone mb-8 leading-relaxed">
              Il nostro approccio non inizia con le forbici, ma con la consapevolezza. 
              Attraverso l'uso di una microcamera professionale, analizziamo il tuo cuoio capelluto 
              per identificare le reali cause di stress del capello.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: "Analisi Cute", desc: "Verifica di sebo, infiammazioni e salute del follicolo." },
                { title: "Struttura Stelo", desc: "Misurazione del grado di porosità e rottura." },
                { title: "Piano Mirato", desc: "Creazione di un percorso di rinascita personalizzato." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-espresso">{item.title}</h4>
                    <p className="text-stone text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl border border-sand shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <p className="text-espresso font-serif text-xl">Prima Consulenza</p>
                <span className="text-gold font-bold">€25</span>
              </div>
              <p className="text-stone text-sm mb-6">Include analisi completa con microcamera, diagnosi stelo e piano d'azione.</p>
              <a 
                href="https://page.fo/Consulenza-Personalizzata" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-4 rounded-xl border-2 border-espresso hover:bg-espresso hover:text-white transition-all text-espresso font-bold uppercase tracking-widest text-xs"
              >
                Prenota Analisi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
