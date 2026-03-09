
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-espresso pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-espresso transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium uppercase tracking-widest text-xs">Vai alla home</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
              <Cookie size={24} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">Cookie Policy</h1>
              <p className="text-stone uppercase tracking-widest text-xs mt-1">Informativa sull’utilizzo dei cookie</p>
            </div>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-stone leading-relaxed">
            <section>
              <p className="italic">Ultimo aggiornamento: 9 Marzo 2026</p>
              <p className="mt-4">
                Questo sito utilizza cookie tecnici e strumenti di analisi e tracciamento per migliorare l’esperienza di navigazione e comprendere l’utilizzo delle pagine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono salvati sul dispositivo dell’utente durante la navigazione su un sito web.
              </p>
              <p>
                I cookie permettono al sito di riconoscere il dispositivo dell’utente e raccogliere informazioni utili per il funzionamento e l’analisi del traffico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Tipologie di cookie utilizzati</h2>
              
              <div className="space-y-6">
                <div className="bg-sand/30 p-6 rounded-2xl border border-sand">
                  <h3 className="text-xl font-serif text-espresso mb-2">Cookie tecnici</h3>
                  <p>
                    Il sito utilizza cookie tecnici necessari al corretto funzionamento delle pagine e dei servizi.
                  </p>
                </div>

                <div className="bg-sand/30 p-6 rounded-2xl border border-sand">
                  <h3 className="text-xl font-serif text-espresso mb-2">Cookie analitici</h3>
                  <p>
                    Il sito utilizza Google Analytics per raccogliere informazioni statistiche sull’utilizzo del sito, come:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>pagine visitate</li>
                    <li>tempo di permanenza</li>
                    <li>interazioni con il sito</li>
                    <li>provenienza del traffico</li>
                  </ul>
                </div>

                <div className="bg-sand/30 p-6 rounded-2xl border border-sand">
                  <h3 className="text-xl font-serif text-espresso mb-2">Cookie di marketing e tracciamento</h3>
                  <p>
                    Il sito utilizza anche Meta Pixel per misurare alcune interazioni con il sito e valutare l’efficacia delle attività promozionali e pubblicitarie.
                  </p>
                  <p className="mt-2">Questo strumento può rilevare eventi come:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>visualizzazioni di pagina</li>
                    <li>clic su pulsanti</li>
                    <li>interazioni con elementi del sito</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Gestione dei cookie</h2>
              <p>
                L’utente può gestire o disabilitare i cookie direttamente dalle impostazioni del proprio browser.
              </p>
              <p>
                La disabilitazione di alcuni cookie potrebbe limitare alcune funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Consenso</h2>
              <p>
                Laddove necessario, l’utilizzo dei cookie e degli strumenti di tracciamento sarà subordinato al consenso dell’utente tramite apposito banner o sistema di gestione del consenso.
              </p>
              <p className="mt-4">Per maggiori informazioni sui servizi di terze parti:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Analytics</a></li>
                <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Meta / Facebook</a></li>
              </ul>
            </section>

            <div className="pt-12 border-t border-sand flex justify-center">
              <Link 
                to="/" 
                className="bg-espresso text-ivory px-10 py-4 rounded-full font-medium uppercase tracking-widest text-sm hover:bg-gold transition-all shadow-xl hover:shadow-gold/20"
              >
                Vai alla home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
