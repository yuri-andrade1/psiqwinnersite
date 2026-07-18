import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, HeartPulse, CheckCircle } from 'lucide-react';
import { CREDENTIALS, DOCTOR_INFO } from '../data';

export default function Credentials() {
  const [activeTab, setActiveTab] = useState<'todos' | 'academic' | 'experiencia'>('todos');

  // Filter logic
  const filteredCredentials = CREDENTIALS.filter((cred) => {
    if (activeTab === 'academic') {
      return cred.category === 'graduacao' || cred.category === 'pos';
    }
    if (activeTab === 'experiencia') {
      return cred.category === 'experiencia' || cred.category === 'associacao';
    }
    return true; // 'todos'
  });

  const getIcon = (category: string) => {
    switch (category) {
      case 'graduacao':
        return <GraduationCap className="w-4 h-4" />;
      case 'pos':
        return <BookOpen className="w-4 h-4" />;
      case 'experiencia':
        return <HeartPulse className="w-4 h-4" />;
      case 'associacao':
        return <Award className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <section id="formacao" className="py-24 bg-[#FDFCFB] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Philosophical bio & credentials stats */}
          <div className="lg:col-span-5">
            <h2 className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">Trajetória & Formação</h2>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-6">
              Excelência acadêmica e compromisso com a ciência
            </h3>
            
            <p className="font-sans text-sm text-[#2C3531] leading-relaxed mb-6">
              {DOCTOR_INFO.longBio}
            </p>

            <blockquote className="border-l-2 border-[#1A1A1A] pl-4 py-1.5 my-8 italic font-display text-base text-[#1A1A1A]">
              "A ciência sem empatia é fria; a empatia sem ciência é ineficiente. Meu compromisso é unir o rigor das pesquisas científicas à sensibilidade da escuta clínica."
              <cite className="block mt-2 text-xs font-bold font-sans uppercase tracking-wider text-[#8E8A83] not-italic">— {DOCTOR_INFO.name}</cite>
            </blockquote>

            {/* Quick stats board */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A1A1A]">
              <div className="text-center p-3 rounded-none bg-[#F9F7F2] border border-[#E5E1DA]">
                <p className="font-display font-bold text-2xl text-[#1A1A1A]">10+</p>
                <p className="font-sans text-[9px] text-[#8E8A83] uppercase tracking-wider font-bold mt-1">Anos de Prática</p>
              </div>
              <div className="text-center p-3 rounded-none bg-[#F9F7F2] border border-[#E5E1DA]">
                <p className="font-display font-bold text-2xl text-[#1A1A1A]">3k+</p>
                <p className="font-sans text-[9px] text-[#8E8A83] uppercase tracking-wider font-bold mt-1">Atendimentos</p>
              </div>
              <div className="text-center p-3 rounded-none bg-[#F9F7F2] border border-[#E5E1DA]">
                <p className="font-display font-bold text-2xl text-[#1A1A1A]">100%</p>
                <p className="font-sans text-[9px] text-[#8E8A83] uppercase tracking-wider font-bold mt-1">Ética & Sigilo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Credentials */}
          <div className="lg:col-span-7">
            
            {/* Timeline Filter Controls */}
            <div className="flex flex-wrap gap-2 mb-10 border-b border-[#1A1A1A] pb-4">
              {[
                { id: 'todos', label: 'Toda a Trajetória' },
                { id: 'academic', label: 'Formação Acadêmica' },
                { id: 'experiencia', label: 'Experiência & Conselhos' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-none border transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#1A1A1A] text-[#FDFCFB] border-[#1A1A1A]'
                      : 'text-[#1A1A1A] bg-[#F9F7F2] border-[#E5E1DA] hover:border-[#1A1A1A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Timeline Tree */}
            <div className="relative border-l border-[#1A1A1A] pl-6 ml-4 space-y-10">
              {filteredCredentials.map((cred, index) => (
                <motion.div
                  key={cred.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative group"
                  id={`credential-timeline-${cred.id}`}
                >
                  {/* Timeline bullet icon */}
                  <span className="absolute -left-[37px] top-0.5 flex items-center justify-center w-8 h-8 rounded-none bg-[#F9F7F2] border border-[#1A1A1A] text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-[#FDFCFB] transition-all duration-300">
                    {getIcon(cred.category)}
                  </span>

                  {/* Timeline content details */}
                  <div>
                    <span className="inline-block text-[10px] font-mono font-bold text-[#1A1A1A] bg-[#F9F7F2] border border-[#1A1A1A] px-2 py-0.5 rounded-none mb-2">
                      {cred.year}
                    </span>
                    <h4 className="font-display font-bold text-lg text-[#1A1A1A] transition-colors duration-200">
                      {cred.degree}
                    </h4>
                    <p className="font-display italic text-sm text-[#8E8A83] mb-2">
                      {cred.institution}
                    </p>
                    {cred.description && (
                      <p className="font-sans text-xs text-[#2C3531] leading-relaxed max-w-xl">
                        {cred.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

