
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">Privacy Policy</h1>
              <p className="text-stone uppercase tracking-widest text-xs mt-1">Informativa sul trattamento dei dati personali</p>
            </div>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-stone leading-relaxed">
            <section>
              <p className="italic">Ultimo aggiornamento: 9 Marzo 2026</p>
              <p className="mt-4">
                Il presente sito web ha lo scopo di fornire informazioni sui servizi offerti dal salone New Style Parrucchieri e facilitare il contatto diretto con il salone tramite WhatsApp.
              </p>
              <p>
                Il sito non raccoglie dati personali attraverso moduli di registrazione, form di contatto o sistemi di iscrizione.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati è:
              </p>
              <div className="bg-sand/30 p-6 rounded-2xl border border-sand mt-4">
                <p className="font-bold text-espresso">New Style Parrucchieri di Sabrina Carretta</p>
                <p>Piazza Europa, 4</p>
                <p>31040 Mansuè (TV) – Italia</p>
                <p>Telefono: 0422 741899</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Tipologie di dati trattati</h2>
              <p>Durante la navigazione sul sito possono essere raccolte alcune informazioni tecniche, tra cui:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>indirizzo IP</li>
                <li>dati tecnici del dispositivo utilizzato</li>
                <li>dati di navigazione</li>
                <li>interazioni con elementi del sito, come clic sui pulsanti</li>
              </ul>
              <p className="mt-4">
                Questi dati vengono raccolti automaticamente attraverso strumenti di analisi del traffico e sono utilizzati per migliorare il funzionamento del sito e comprendere l’utilizzo dei contenuti.
              </p>
              <p>
                Il sito non raccoglie dati personali identificativi come nome, cognome, email o numero di telefono tramite moduli interni.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Contatto tramite WhatsApp</h2>
              <p>
                Il sito offre la possibilità di contattare direttamente il salone tramite WhatsApp attraverso pulsanti dedicati.
              </p>
              <p className="mt-4">Quando l’utente clicca sul pulsante WhatsApp:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>viene reindirizzato all’applicazione WhatsApp</li>
                <li>il messaggio è precompilato ma non viene inviato automaticamente</li>
                <li>l’invio del messaggio avviene solo se l’utente decide volontariamente di inviarlo</li>
              </ul>
              <p className="mt-4">
                Pertanto il sito non riceve né conserva alcun dato personale fino al momento in cui l’utente decide autonomamente di inviare il messaggio tramite WhatsApp.
              </p>
              <p>
                Il trattamento dei dati eventualmente contenuti nel messaggio inviato avverrà esclusivamente per rispondere alla richiesta dell’utente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Strumenti di analisi e tracciamento</h2>
              <p>
                Il sito utilizza strumenti di analisi statistica e tracciamento per comprendere l’utilizzo delle pagine e migliorare l’esperienza utente.
              </p>
              <p className="mt-4">In particolare:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Google Analytics</li>
                <li>Meta Pixel</li>
              </ul>
              <p className="mt-4">Questi strumenti possono raccogliere dati relativi alle interazioni con il sito, come:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>pagine visitate</li>
                <li>durata della visita</li>
                <li>clic sui pulsanti</li>
                <li>eventi di navigazione</li>
              </ul>
              <p className="mt-4">
                I dati raccolti sono utilizzati per finalità statistiche, analitiche e di misurazione dell’efficacia delle attività di comunicazione e marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Base giuridica del trattamento</h2>
              <p>La base giuridica del trattamento è:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>il legittimo interesse del titolare a migliorare il sito e i servizi offerti</li>
                <li>il consenso eventualmente richiesto per l’utilizzo di cookie e strumenti di tracciamento non tecnici</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Conservazione dei dati</h2>
              <p>
                Il sito non conserva direttamente dati personali degli utenti tramite database o CRM interni.
              </p>
              <p>
                I dati statistici e tecnici raccolti tramite strumenti di analisi e tracciamento vengono trattati secondo le politiche dei rispettivi fornitori dei servizi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Diritti dell’interessato</h2>
              <p>
                Gli utenti possono esercitare i diritti previsti dal Regolamento UE 2016/679 (GDPR), tra cui:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>diritto di accesso</li>
                <li>diritto di rettifica</li>
                <li>diritto alla cancellazione</li>
                <li>diritto alla limitazione del trattamento</li>
                <li>diritto di opposizione</li>
              </ul>
              <p className="mt-4">
                Per eventuali richieste è possibile contattare il titolare del trattamento ai recapiti indicati sopra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-espresso mb-4">Modifiche alla presente informativa</h2>
              <p>
                La presente Privacy Policy può essere aggiornata in qualsiasi momento per adeguarsi a modifiche normative, organizzative o tecniche.
              </p>
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

export default PrivacyPolicy;
