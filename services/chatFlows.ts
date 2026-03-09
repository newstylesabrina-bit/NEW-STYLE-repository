export const chatFlows = {
  start: {
    message: "Ciao, sono SARA. Ti aiuto a capire il percorso più adatto. Qual è la tua esigenza principale?",
    options: [
      { label: "Cute grassa", next: "cuteGrassa" },
      { label: "Cute che prude", next: "cutePrurito" },
      { label: "Caduta", next: "caduta" },
      { label: "Crespo", next: "crespo" },
      { label: "Colore e riflessi", next: "coloreRiflessi" },
      { label: "Schiariture", next: "schiariture" }
    ]
  },

  cuteGrassa: {
    message: "Capito. Ti succede soprattutto che la cute si sporchi in fretta, si appesantisca o perda volume?",
    options: [
      { label: "Si sporca subito", next: "resetPurify" },
      { label: "È pesante", next: "resetPurify" },
      { label: "Perde volume", next: "resetPurify" }
    ]
  },

  resetPurify: {
    message: "Da quello che descrivi, il percorso più vicino è Reset & Purify. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Reset & Purify dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  cutePrurito: {
    message: "Capito. Ti succede soprattutto in alcuni periodi, dopo i lavaggi oppure senti anche sensibilità e fastidio costante?",
    options: [
      { label: "In alcuni periodi", next: "cuteDiagnosi" },
      { label: "Dopo i lavaggi", next: "cuteDiagnosi" },
      { label: "Fastidio costante", next: "cuteDiagnosi" }
    ]
  },

  cuteDiagnosi: {
    message: "In questo caso il primo passo corretto è una diagnosi con microcamera, così possiamo capire la situazione della cute e consigliarti il percorso più adatto. Vuoi prenotare su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare la diagnosi con microcamera per cute sensibile o che prude dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  caduta: {
    message: "Capito. La caduta ti sembra soprattutto stagionale, legata a stress oppure noti anche capelli più deboli e assottigliati?",
    options: [
      { label: "Stagionale", next: "cadutaDiagnosi" },
      { label: "Stress / periodo difficile", next: "cadutaDiagnosi" },
      { label: "Capelli più deboli", next: "cadutaDiagnosi" }
    ]
  },

  cadutaDiagnosi: {
    message: "In questi casi la cosa più corretta è partire da una diagnosi con microcamera, così possiamo capire lo stato reale della cute e impostare il percorso giusto. Vuoi prenotare su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare la diagnosi con microcamera per caduta dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  crespo: {
    message: "Capito. Il crespo lo senti soprattutto con umidità, sulle lunghezze secche oppure fai fatica a mantenere ordine e morbidezza?",
    options: [
      { label: "Con umidità", next: "rebornCute" },
      { label: "Lunghezze secche", next: "rebornLunghezze" },
      { label: "Capelli disordinati", next: "frizzControl" }
    ]
  },

  rebornCute: {
    message: "Da quello che descrivi, il percorso più vicino è Reborn Cute. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Reborn Cute dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  rebornLunghezze: {
    message: "Da quello che descrivi, il percorso più vicino è Reborn Lunghezze. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Reborn Lunghezze dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  frizzControl: {
    message: "Da quello che descrivi, il percorso più vicino è Frizz Control. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Frizz Control dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  coloreRiflessi: {
    message: "Capito. Vuoi soprattutto ravvivare il colore, correggere riflessi indesiderati oppure uniformare il risultato?",
    options: [
      { label: "Ravvivare il colore", next: "gloss" },
      { label: "Correggere riflessi", next: "tonalizzazione" },
      { label: "Uniformare il colore", next: "tonalizzazione" }
    ]
  },

  gloss: {
    message: "Da quello che descrivi, il percorso più vicino è Gloss Illuminante. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Gloss Illuminante dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  tonalizzazione: {
    message: "Da quello che descrivi, il percorso più vicino è Tonalizzazione Professionale. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Tonalizzazione Professionale dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  },

  schiariture: {
    message: "Capito. Cerchi soprattutto un effetto naturale e luminoso oppure una schiaritura più evidente e d'impatto?",
    options: [
      { label: "Naturale e luminoso", next: "schiaritureGloss" },
      { label: "Più evidente", next: "schiaritureGloss" },
      { label: "Vorrei una consulenza", next: "schiaritureGloss" }
    ]
  },

  schiaritureGloss: {
    message: "Da quello che descrivi, il percorso più vicino è Schiariture & Gloss. Vuoi prenotare direttamente su WhatsApp?",
    options: [
      {
        label: "Prenota su WhatsApp",
        whatsappMessage: "Salve! Vorrei prenotare il trattamento Schiariture & Gloss dal-sitoweb."
      },
      {
        label: "Torna all'inizio",
        next: "start"
      }
    ]
  }
} as const;