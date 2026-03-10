
import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import LuxuryText from './LuxuryText';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="recensioni" className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Feedback</span>
          <LuxuryText as="h2" className="text-4xl font-serif">La parola alle nostre clienti</LuxuryText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[30px] border border-sand shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-stone italic mb-8 font-light leading-relaxed">"{t.content}"</p>
              <div className="flex flex-col">
                <span className="font-serif text-lg text-espresso">{t.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
