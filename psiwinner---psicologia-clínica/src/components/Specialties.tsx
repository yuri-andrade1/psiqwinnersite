import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Flame, HeartCrack, Sparkles, Users, Compass, Check, ArrowRight } from 'lucide-react';
import { SPECIALTIES, DOCTOR_INFO } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Flame,
  HeartCrack,
  Sparkles,
  Users,
  Compass,
};

export default function Specialties() {
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>(null);

  const handleWhatsAppInquiry = (specialtyTitle: string) => {
    const customMessage = `Olá, Dr. Psiwinner! Estive vendo o seu site e gostaria de saber mais sobre o atendimento para: ${specialtyTitle}.`;
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="especialidades" className="py-24 bg-[#F9F7F2] relative border-b border-[#1A1A1A]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display italic text-base text-[#8E8A83] mb-3">
            Especialidades Clínicas
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Como posso ajudar você a superar seus desafios
          </p>
          <div className="w-16 h-0.5 bg-[#1A1A1A] mx-auto mb-6"></div>
          <p className="font-sans text-sm text-[#2C3531] leading-relaxed">
            Através da Terapia Cognitivo-Comportamental (TCC) e métodos baseados em evidências, ofereço suporte especializado e personalizado para as seguintes demandas:
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec, index) => {
            const IconComponent = iconMap[spec.iconName] || Brain;
            const isExpanded = activeSpecialty === spec.id;

            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col justify-between p-8 rounded-none border transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-[#FDFCFB] border-[#1A1A1A] editorial-shadow-dark'
                    : 'bg-[#FDFCFB] border-[#E5E1DA] hover:border-[#1A1A1A] editorial-shadow'
                }`}
                id={`specialty-card-${spec.id}`}
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-none border ${
                      isExpanded ? 'bg-[#1A1A1A] text-[#FDFCFB] border-[#1A1A1A]' : 'bg-[#F9F7F2] text-[#1A1A1A] border-[#E5E1DA]'
                    } transition-colors duration-300`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    {/* Active State Indicator Badge */}
                    {spec.symptoms.length > 0 && (
                      <button
                        onClick={() => setActiveSpecialty(isExpanded ? null : spec.id)}
                        className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:opacity-80 px-2.5 py-1 bg-[#F9F7F2] border border-[#E5E1DA] transition-colors duration-200"
                      >
                        {isExpanded ? 'Ocultar Sintomas' : 'Ver Sintomas'}
                      </button>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-3">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-xs text-[#2C3531] leading-relaxed mb-6">
                    {spec.description}
                  </p>

                  {/* Symptoms Checklist Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-[#E5E1DA] pt-4 mb-6"
                      >
                        <h4 className="font-sans font-bold text-[10px] text-[#1A1A1A] uppercase tracking-wider mb-3">
                          Sintomas comuns associados:
                        </h4>
                        <ul className="space-y-2">
                          {spec.symptoms.map((symptom, sIdx) => (
                            <li key={sIdx} className="flex items-start text-xs text-[#2C3531]">
                              <Check className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5 mr-2" />
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-[#E5E1DA] flex items-center justify-between">
                  <button
                    onClick={() => handleWhatsAppInquiry(spec.title)}
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83] transition-colors duration-200 cursor-pointer"
                  >
                    Dúvidas sobre este sintoma?
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informational Prompt Banner */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-[#8E8A83]">
            Não encontrou o que estava procurando?{' '}
            <button 
              onClick={() => handleWhatsAppInquiry('Outras demandas')} 
              className="ml-1 text-[#1A1A1A] font-bold underline hover:no-underline cursor-pointer"
            >
              Fale comigo diretamente pelo WhatsApp para uma avaliação personalizada.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}

