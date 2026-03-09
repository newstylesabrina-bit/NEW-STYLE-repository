
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles, User, Bot } from 'lucide-react';
import { chatFlows } from '../services/chatFlows';

const AIConsultantChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<keyof typeof chatFlows>('start');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: chatFlows.start.message }
  ]);
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (
    option: { label: string; next?: keyof typeof chatFlows; action?: string; whatsappMessage?: string }
  ) => {
    setMessages(prev => [...prev, { role: 'user', text: option.label }]);

    // Track path (excluding specific buttons)
    if (option.label !== "Prenota su WhatsApp" && option.label !== "Torna all'inizio") {
      setSelectedPath(prev => [...prev, option.label]);
    }

    // Handle WhatsApp message with path
    if (option.whatsappMessage) {
      const pathString = selectedPath.join(" > ");
      const fullMessage = pathString 
        ? `${option.whatsappMessage} Percorso selezionato: ${pathString}`
        : option.whatsappMessage;
      
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=390422741899&text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappUrl, '_blank');
      return;
    }

    if (option.action) {
      window.open(option.action, '_blank');
      return;
    }

    if (option.label === "Torna all'inizio") {
      setSelectedPath([]);
    }

    if (option.next) {
      const nextStep = chatFlows[option.next];
      setCurrentStep(option.next);

      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', text: nextStep.message }]);
      }, 300);
    }
  };

  const currentFlow = chatFlows[currentStep];

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="bg-espresso text-ivory p-4 rounded-full shadow-2xl flex items-center gap-3 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <MessageCircle size={24} className="relative z-10" />
            <span className="relative z-10 font-medium hidden md:block">Chiedi a SARA</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="bg-white border border-sand w-[90vw] md:w-[400px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-espresso p-5 text-ivory flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-tight">SARA</h3>
                  <p className="text-[10px] text-ivory/60 uppercase tracking-widest">Salon Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ivory/30 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm flex gap-3
                    ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-white text-espresso'}
                  `}>
                    <div className="shrink-0 pt-1">
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-gold" />}
                    </div>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options Footer */}
            <div className="flex flex-wrap gap-2 p-4 border-t border-sand/50 bg-white">
              {currentFlow.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 rounded-full border border-sand text-sm text-espresso hover:bg-sand/30 transition-all"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIConsultantChat;
