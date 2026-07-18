import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, DOCTOR_INFO } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleWhatsAppContact = () => {
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(DOCTOR_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-24 bg-[#FDFCFB] relative border-b border-[#1A1A1A]">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center mb-16 border-b border-[#E5E1DA] pb-8">
          <h2 className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">FAQ - Dúvidas Frequentes</h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Perguntas Comuns Sobre a Terapia
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2C3531] max-w-2xl mx-auto leading-relaxed">
            Entendo que iniciar o processo terapêutico pode trazer dúvidas. Aqui estão algumas respostas rápidas para te ajudar a se sentir mais seguro(a).
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FDFCFB] border border-[#1A1A1A] rounded-none overflow-hidden transition-all duration-300"
                id={`faq-item-${index}`}
              >
                {/* Header Toggle Clickable */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group bg-[#F9F7F2]/50 hover:bg-[#F9F7F2]"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <span className="font-mono text-xs font-bold text-[#8E8A83] shrink-0">
                      {(index + 1).toString().padStart(2, '0')}.
                    </span>
                    <span className="font-display font-bold text-[#1A1A1A] group-hover:text-[#8E8A83] transition-colors duration-200 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  
                  <span className={`p-1.5 border border-[#1A1A1A] bg-[#FDFCFB] text-[#1A1A1A] transition-all duration-300 transform shrink-0 rounded-none ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* Expanded Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#1A1A1A] bg-[#FDFCFB]">
                        <p className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer block */}
        <div className="mt-12 text-center bg-[#F9F7F2] border border-[#1A1A1A] p-6 sm:p-8 rounded-none editorial-shadow">
          <p className="font-display font-bold text-[#1A1A1A] mb-2 text-base">Tem alguma outra pergunta?</p>
          <p className="font-sans text-xs text-[#2C3531] mb-4">
            Se sua dúvida não está listada acima, não se preocupe! Fale diretamente comigo.
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-all duration-300 cursor-pointer rounded-none border border-[#1A1A1A]"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Tirar Dúvida no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}

