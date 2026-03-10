
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Calendar } from 'lucide-react';
import LuxuryText from './LuxuryText';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const ContactSection: React.FC = () => {
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome_completo') as string || 'Non compilato';
    const tel = formData.get('telefono') as string || 'Non compilato';
    const esigenza = formData.get('esigenza_principale') as string || 'Non compilato';
    const msg = formData.get('messaggio_opzionale') as string || 'Non compilato';

    const message = `📩 Nuova richiesta dal sito\n\n👤 Nome: ${nome}\n📞 Telefono: ${tel}\n🎯 Esigenza richiesta: ${esigenza}\n\n📝 Messaggio cliente:\n${msg}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/390422741899?text=${encodedMessage}`;
    
    setBookingStatus('sending');
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setBookingStatus('sent');
    }, 1000);
  };

  return (
   <section id="contatti" className="py-12 md:py-20 bg-sand/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Location</span>
            <LuxuryText as="h2" className="text-4xl md:text-5xl mb-10 font-serif">Vieni a trovarci</LuxuryText>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand"><MapPin size={24} className="text-gold" /></div>
                <div>
                  <h4 className="font-serif text-xl">Mansuè (TV)</h4>
                  <p className="text-stone text-sm">Piazza Europa, 4, 31040 Mansuè (TV)</p>
                  <a href="https://share.google/aswGiPiilp2AiY20a" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-bold uppercase tracking-widest mt-2 inline-block">Ottieni indicazioni</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand"><Phone size={24} className="text-gold" /></div>
                <div>
                  <h4 className="font-serif text-xl">Prenotazioni</h4>
                  <p className="text-stone text-sm">Chiamaci o scrivici su WhatsApp</p>
                  <a href="tel:0422741899" className="text-espresso font-bold mt-1 tracking-wider hover:text-gold transition-colors block">0422 741899</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand"><Clock size={24} className="text-gold" /></div>
                <div>
                  <h4 className="font-serif text-xl">Orari di Apertura</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-stone mt-2">
                    <span className="font-medium">Mar - Gio:</span> <span className="text-espresso">09:00 - 18:30</span>
                    <span className="font-medium">Ven:</span> <span className="text-espresso">08:30 - 19:30</span>
                    <span className="font-medium">Sab:</span> <span className="text-espresso">08:00 - 18:00</span>
                    <span className="font-medium">Lun/Dom:</span> <span className="text-espresso font-bold italic">Chiuso</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/newstyleparrucchieri.mansue/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full border border-sand hover:text-gold transition-colors shadow-sm"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/new.style.mansue/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full border border-sand hover:text-gold transition-colors shadow-sm"><Facebook size={24} /></a>
              <a href="https://www.tiktok.com/@newstyle_parrucchieri" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full border border-sand hover:text-gold transition-colors shadow-sm"><TikTokIcon size={24} /></a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-sand relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-gold/10">
              <Calendar size={120} />
            </div>
            <h3 className="font-serif text-3xl mb-8 relative z-10">Prenota la tua Analisi</h3>
            <form onSubmit={handleBookingSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone">Nome Completo</label>
                  <input name="nome_completo" type="text" required placeholder="Nome e Cognome" className="w-full bg-ivory/50 border border-sand rounded-xl px-4 py-4 focus:outline-none focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone">Telefono</label>
                  <input name="telefono" type="tel" required placeholder="Il tuo numero" className="w-full bg-ivory/50 border border-sand rounded-xl px-4 py-4 focus:outline-none focus:border-gold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone">Esigenza Principale</label>
                <select name="esigenza_principale" className="w-full bg-ivory/50 border border-sand rounded-xl px-4 py-4 focus:outline-none focus:border-gold">
                  <option>Analisi con Microcamera</option>
                  <option>Trattamento Cute Grassa/Sebo</option>
                  <option>Trattamento Cute Sensibile/Prurito</option>
                  <option>Crespo & Disciplina</option>
                  <option>Colore & Riflessi</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone">Messaggio (Opzionale)</label>
                <textarea name="messaggio_opzionale" placeholder="Raccontaci brevemente dei tuoi capelli..." className="w-full bg-ivory/50 border border-sand rounded-xl px-4 py-4 h-32 focus:outline-none focus:border-gold resize-none"></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={bookingStatus !== null}
                className="w-full bg-espresso text-ivory py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-gold transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50"
              >
                {bookingStatus === 'sent' ? 'Richiesta Ricevuta!' : (bookingStatus === 'sending' ? 'Invio...' : 'Invia Richiesta')}
              </button>
              {bookingStatus === 'sent' && (
                <p className="text-center text-xs text-stone mt-4 animate-bounce">Ti ricontatteremo entro 24 ore lavorative.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
