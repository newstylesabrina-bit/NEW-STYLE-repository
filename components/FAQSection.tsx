
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FAQS } from '../constants';
import LuxuryText from './LuxuryText';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 border-t border-sand">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Aiuto & Supporto</span>
            <LuxuryText as="h2" className="text-4xl mb-6 font-serif">Domande Frequenti</LuxuryText>
            <p className="text-stone font-light">Abbiamo raccolto i dubbi più comuni per aiutarti a scegliere il servizio perfetto per te.</p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl border border-sand p-6 cursor-pointer">
                <summary className="list-none flex justify-between items-center font-serif text-xl text-espresso">
                  {faq.question}
                  <ChevronRight size={20} className="text-gold transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-stone leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
