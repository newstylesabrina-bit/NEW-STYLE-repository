
import React from 'react';
import { Sparkles, Scan, Waves, Droplets, Paintbrush, ShieldCheck } from 'lucide-react';
import { Service, Package, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'reset-purify',
    title: 'Reset & Purify',
    shortDesc: 'Elimina impurità, sebo e sensazione di appesantimento.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    forWho: 'Chi percepisce i capelli sporchi subito dopo il lavaggio o avverte pesantezza.',
    problem: 'Accumulo di tossine e sebo in eccesso sulla cute.',
    steps: ['Analisi microcamera', 'Peeling enzimatico', 'Detersione specifica', 'Massaggio ossigenante'],
    maintenance: 'Shampoo purificante bilanciato una volta a settimana a casa.',
    bookingUrl: 'https://api.whatsapp.com/send/?phone=390422741899&text=Salve!Vorrei+Prenotare+la+Consulenza+Reset+Purify+dal-sitoweb.'
  },
  {
    id: 'reborn-cute',
    title: 'Reborn Cute',
    shortDesc: 'Riequilibrio profondo per cute sensibile o con prurito.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    forWho: 'Persone con arrossamenti, prurito o fastidio localizzato.',
    problem: 'Alterazione del film idrolipidico cutaneo.',
    steps: ['Diagnosi sensibilità', 'Impacco lenitivo', 'Vapore tiepido', 'Lozione calmante'],
    maintenance: 'Evitare acqua troppo calda e usare detergenti ultra-delicati.',
    bookingUrl: 'https://page.fo/reborn-cute-dal-sitoweb'
  },
  {
    id: 'reborn-lunghezze',
    title: 'Reborn Lunghezze',
    shortDesc: 'Idratazione estrema per capelli spenti e secchi.',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800',
    forWho: 'Capelli disidratati dal sole, calore o trattamenti chimici.',
    problem: 'Cuticole aperte e perdita di elasticità.',
    steps: ['Filler proteico', 'Maschera idratante', 'Chiusura cuticole', 'Siero gloss'],
    maintenance: 'Utilizzo di maschere nutrienti e termoprotettori.',
    bookingUrl: 'https://page.fo/reborn-lunghezze-dal-sitoweb'
  },
  {
    id: 'frizz-control',
    title: 'Frizz Control',
    shortDesc: 'Disciplina e anti-crespo per una chioma setosa.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    forWho: 'Capelli ribelli che soffrono l’umidità.',
    problem: 'Porosità eccessiva dello stelo.',
    steps: ['Trattamento disciplinante', 'Sigillatura termica', 'Finish anti-humidity'],
    maintenance: 'Olio protettivo prima dell’uscita in caso di umidità.',
    bookingUrl: 'https://page.fo/frizz-control-dal-sitoweb'
  },
  {
    id: 'colore-correzione',
    title: 'Consulenza Colore',
    shortDesc: 'Correzione riflessi e tonalizzazione su misura.',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800',
    forWho: 'Chi vuole eliminare riflessi gialli o aranciati indesiderati.',
    problem: 'Sbiadimento del colore naturale o chimico.',
    steps: ['Test del sottotono', 'Scelta del riflesso', 'Gloss personalizzato'],
    maintenance: 'Shampoo con pigmenti correttori ogni 15 giorni.',
    bookingUrl: 'https://page.fo/consulenza-colore-dal-sitoweb'
  },
  {
    id: 'schiariture-gloss',
    title: 'Schiariture & Gloss',
    shortDesc: 'Luminosità multidimensionale e rigenerazione.',
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800',
    forWho: 'Chi desidera un biondo luminoso ma sano.',
    problem: 'Capelli schiariti fragili e privi di luce.',
    steps: ['Protezione molecolare', 'Schiaritura graduale', 'Glossing finale'],
    maintenance: 'Kit di ricostruzione molecolare home-care.',
    bookingUrl: 'https://page.fo/schiariture-gloss-dal-sitoweb'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'start',
    name: 'Metodo Start',
    description: 'Il primo passo per conoscere la salute dei tuoi capelli.',
    price: '€25',
    features: ['Analisi con microcamera', 'Diagnosi cute e stelo', 'Piano di trattamento personalizzato'],
    forWho: 'Per chi vuole capire davvero lo stato di cute e stelo prima di iniziare un percorso mirato.',
    problem: 'Mancanza di diagnosi chiara, trattamenti scelti a caso e difficoltà a capire cosa serve davvero ai capelli.',
    homeCare: 'Indicazioni iniziali sui prodotti più adatti in base alla diagnosi effettuata in salone.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://api.whatsapp.com/send/?phone=390422741899&text=Salve!+Vorrei+Prenotare+il+trattamento+Metodo+Start+dal-sitoweb.'
  },
  {
    id: 'reset',
    name: 'Reset & Purify',
    description: 'Purificazione e benessere immediato.',
    price: '€75',
    features: ['Diagnosi con microcamera', 'Reset & Purify completo', 'Trattamento lunghezze basic', 'Piega Wellness'],
    isPremium: true,
    forWho: 'Per chi ha cute appesantita, eccesso di sebo, pesantezza o bisogno di un reset profondo.',
    problem: 'Cute occlusa, pesantezza, perdita di freschezza, scarso volume e difficoltà a mantenere la piega pulita e leggera.',
    homeCare: 'Shampoo riequilibrante e routine personalizzata per mantenere la cute pulita più a lungo.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://api.whatsapp.com/send/?phone=390422741899&text=Salve!+Vorrei+Prenotare+il+trattamento+Reset+%26+Purify+dal-sitoweb.'
  },
  {
    id: 'elite',
    name: 'Elite Experience',
    description: 'La trasformazione totale della tua immagine.',
    price: '€140+',
    features: ['Diagnosi avanzata', 'Trattamento rigenerante', 'Consulenza colore/gloss', 'Taglio e piega', 'Kit mantenimento'],
    forWho: 'Per chi desidera un risultato completo, armonico e ad alto impatto estetico.',
    problem: 'Immagine spenta, colore poco valorizzante, capelli non allineati alla propria identità e bisogno di una trasformazione totale.',
    homeCare: 'Protocollo di mantenimento completo per prolungare il risultato ottenuto in salone.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    whatsappUrl: 'https://api.whatsapp.com/send/?phone=390422741899&text=Salve!+Vorrei+Prenotare+il+trattamento+Elite+Experience+dal-sitoweb.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Elena B.', location: 'Oderzo', content: "La consulenza con la microcamera mi ha aperto gli occhi. Non avevo idea che i miei problemi dipendessero dalla cute grassa. Risultati incredibili!", rating: 5 },
  { id: '2', name: 'Sandra', location: 'Mansuè', content: "Sabrina è una vera professionista. Il salone è elegante e rilassante. Il percorso Reset & Purify è una manna dal cielo.", rating: 5 },
  { id: '3', name: 'Giulia R.', location: 'Treviso', content: "Finalmente qualcuno che non si limita a tagliare, ma cura davvero il capello. Il mio biondo non è mai stato così sano.", rating: 5 },
  { id: '4', name: 'Sara L.', location: 'Gorgo al Monticano', content: "Ambiente accogliente e prodotti di altissima qualità. Senti la differenza già dal primo lavaggio.", rating: 5 },
];

export const FAQS: FAQItem[] = [
  { question: "Serve davvero la microcamera?", answer: "Sì, perché permette di vedere ciò che l'occhio umano non percepisce: lo stato dei follicoli, eventuali accumuli di sebo o infiammazioni cutanee." },
  { question: "Quanto dura la consulenza?", answer: "La prima consulenza approfondita dura circa 30-40 minuti, inclusa l'analisi e la spiegazione del piano personalizzato." },
  { question: "Cosa consigliate per il crespo?", answer: "Il nostro percorso Frizz Control lavora sulla porosità del capello per sigillare le cuticole e proteggerle dall'umidità esterna." },
  { question: "Posso fare il colore se ho la cute sensibile?", answer: "Assolutamente sì. Utilizziamo prodotti protettivi e tecniche che minimizzano il contatto con la pelle, previa analisi della sensibilità." },
  { question: "Ogni quanto va fatto il Reset & Purify?", answer: "Dipende dalla diagnosi, ma generalmente consigliamo un ciclo di purificazione ogni cambio stagione o una volta al mese per pelli tendenti al grasso." },
  { question: "Lavorate solo su appuntamento?", answer: "Sì, per garantire a ogni cliente l'attenzione e il tempo necessari per una consulenza di alta qualità." },
  { question: "Dove si trova il salone?", answer: "Siamo a Mansuè (TV), facilmente raggiungibili da Oderzo e zone limitrofe. Abbiamo parcheggio riservato." },
  { question: "C'è un costo per la prima diagnosi?", answer: "La diagnosi con microcamera ha un valore di 25€, ma è spesso inclusa nei nostri percorsi benessere." }
];
