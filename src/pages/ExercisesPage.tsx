import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Anchor, Brain, Moon, X, Check, ArrowRight, Heart, Sparkles, MessageSquare, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO } from '../data';

const EXERCISES = [
  { id: 'desacelera', title: 'Desacelera', subtitle: 'Respiração Guiada 4-7-8', desc: 'Regule a ansiedade e o estresse agudo com a respiração diafragmática.', icon: Wind, badge: 'Ansiedade' },
  { id: 'ancora', title: 'Âncora de Emergência', subtitle: 'Técnica 5-4-3-2-1', desc: 'Aterramento imediato para tirar a mente de crises ou pânico.', icon: Anchor, badge: 'Pânico' },
  { id: 'tcc', title: 'Reorganizador TCC', subtitle: 'Descompressão Mental', desc: 'Reestruture pensamentos catastróficos com a Psicologia TCC.', icon: Brain, badge: 'Foco' },
  { id: 'durmazen', title: 'Durmazen', subtitle: 'Relaxamento para o Sono', desc: 'Vença a insônia com a descompressão muscular progressiva.', icon: Moon, badge: 'Sono' },
];

const GROUNDING = [
  { count: 5, label: 'coisas que você pode VER ao seu redor' },
  { count: 4, label: 'coisas que você pode TOCAR agora' },
  { count: 3, label: 'sons que você consegue OUVIR' },
  { count: 2, label: 'cheiros que você pode PERCEBER' },
  { count: 1, label: 'coisa positiva sobre VOCÊ' },
];

export default function ExercisesPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [phase, setPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire');
  const [seconds, setSeconds] = useState(60);
  const [groundStep, setGroundStep] = useState(0);
  const [thought, setThought] = useState('');
  const [thoughtStep, setThoughtStep] = useState(0);
  const [showCalm, setShowCalm] = useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Exercícios e Ferramentas de Autorregulação | Psicólogo Winner Furtado';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    if (activeIdx === null || EXERCISES[activeIdx]?.id !== 'desacelera' || showCalm) return;
    const pTimer = setInterval(() => setPhase((prev) => (prev === 'inspire' ? 'hold' : prev === 'hold' ? 'expire' : 'inspire')), 4000);
    const sTimer = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => { clearInterval(pTimer); clearInterval(sTimer); };
  }, [activeIdx, showCalm]);

  const openEx = (idx: number) => {
    setActiveIdx(idx); setShowCalm(false); setSeconds(60); setPhase('inspire');
    setGroundStep(0); setThoughtStep(0); setThought('');
  };

  const currEx = activeIdx !== null ? EXERCISES[activeIdx] : null;

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#FDFCFB] pt-32 pb-24 border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FDFCFB] hover:text-[#C5A059] transition-colors border border-[#444] bg-[#242424] px-3.5 py-2">
            <Home className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
            Voltar ao Início
          </Link>
        </div>

        {/* Section Header */}
        <div className="border-b border-[#333] pb-8 mb-12">
          <span className="inline-flex items-center text-[10px] font-sans font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 border border-[#C5A059]/20 mb-3">
            <Sparkles className="w-3 h-3 mr-1.5" /> Ferramentas Práticas de Autorregulação
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#FDFCFB] tracking-tight mb-4">
            Exercícios Guiados para Lidar com Emoções Difíceis
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#8E8A83] max-w-3xl leading-relaxed">
            Ferramentas interativas desenvolvidas para auxiliar na desaceleração da ansiedade, retoma de controle em momentos de agitação e regulação emocional baseada na Terapia Cognitivo-Comportamental.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXERCISES.map((ex, idx) => {
            const Icon = ex.icon;
            return (
              <div key={ex.id} className="bg-[#242424] border border-[#333] hover:border-[#C5A059] p-6 flex flex-col justify-between transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#1A1A1A] border border-[#333] group-hover:border-[#C5A059]">
                      <Icon className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase text-[#8E8A83] bg-[#1A1A1A] px-2 py-0.5 border border-[#333]">
                      {ex.badge}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-[#FDFCFB] mb-0.5">{ex.title}</h2>
                  <p className="font-sans text-xs text-[#C5A059] font-semibold mb-2">{ex.subtitle}</p>
                  <p className="font-sans text-xs text-[#8E8A83] leading-relaxed mb-6">{ex.desc}</p>
                </div>
                <button
                  onClick={() => openEx(idx)}
                  className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#C5A059] hover:text-[#1A1A1A] border border-[#333] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Experimentar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeIdx !== null && currEx && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md flex items-center justify-center p-4">
            <div className="w-full max-w-xl bg-[#222] border border-[#333] p-6 sm:p-8 relative shadow-2xl my-auto">
              
              <button onClick={() => setActiveIdx(null)} className="absolute top-5 right-5 p-2 text-[#8E8A83] hover:text-white bg-[#1A1A1A] border border-[#333] cursor-pointer">
                <X className="w-4 h-4" />
              </button>

              {showCalm ? (
                /* Calm Toast Screen */
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-[#C5A059]/10 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#FDFCFB] mb-2">Conexão e Calma Restabelecidas!</h3>
                  <p className="font-sans text-xs text-[#8E8A83] max-w-md mx-auto mb-6 leading-relaxed">
                    O cuidado emocional é um hábito diário. Se desejar um acompanhamento terapêutico individualizado com o Psicólogo Winner Furtado, estamos prontos para acolher você.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, Dr. Winner! Fiz um exercício no seu site e gostaria de agendar uma consulta.')}`}
                      target="_blank" rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider flex items-center justify-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> Agendar Consulta
                    </a>
                    <button onClick={() => setActiveIdx(null)} className="px-5 py-2.5 bg-[#1A1A1A] text-white border border-[#444] font-bold text-xs uppercase cursor-pointer">
                      Voltar ao Exercício
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Exercise Content */
                <div>
                  <div className="text-center mb-6 border-b border-[#333] pb-4">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#C5A059]">AUTORREGULAÇÃO</span>
                    <h3 className="font-display font-bold text-2xl text-[#FDFCFB] mt-0.5">{currEx.title}</h3>
                    <p className="font-sans text-xs text-[#8E8A83]">{currEx.subtitle}</p>
                  </div>

                  {/* 1. Desacelera */}
                  {currEx.id === 'desacelera' && (
                    <div className="text-center py-2">
                      <p className="font-sans text-xs text-[#8E8A83] mb-4">Sincronize a respiração com a animação:</p>
                      
                      {/* Geometric Breathing Animation */}
                      <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.3 : phase === 'hold' ? 1.3 : 1, rotate: phase === 'inspire' ? 45 : 0 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-0 border-2 border-[#C5A059]/40 rounded-2xl"
                        />
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.15 : phase === 'hold' ? 1.15 : 0.9 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-4 border-2 border-[#FDFCFB]/20 rounded-xl"
                        />
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.05 : phase === 'hold' ? 1.05 : 0.8 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-8 bg-[#C5A059]/20 border border-[#C5A059] rounded-lg flex items-center justify-center"
                        >
                          <span className="font-display italic text-sm text-[#FDFCFB] font-bold">
                            {phase === 'inspire' && 'INSPIRE'}
                            {phase === 'hold' && 'SEGURE'}
                            {phase === 'expire' && 'EXPIRE'}
                          </span>
                        </motion.div>
                      </div>

                      <p className="font-sans text-xs text-[#8E8A83] mb-4">
                        Tempo restante: <strong className="text-[#FDFCFB] font-mono">{seconds}s</strong>
                      </p>
                    </div>
                  )}

                  {/* 2. Âncora */}
                  {currEx.id === 'ancora' && (
                    <div className="py-2 space-y-2 mb-6">
                      <p className="font-sans text-xs text-[#8E8A83] text-center mb-3">Identifique o ambiente ao seu redor:</p>
                      {GROUNDING.map((step, sIdx) => {
                        const isDone = sIdx <= groundStep;
                        return (
                          <button
                            key={step.count} onClick={() => setGroundStep(sIdx)}
                            className={`w-full p-3 border text-left flex items-center justify-between transition-colors cursor-pointer ${
                              isDone ? 'bg-[#C5A059]/10 border-[#C5A059] text-[#FDFCFB]' : 'bg-[#1A1A1A] border-[#333] text-[#8E8A83]'
                            }`}
                          >
                            <div className="flex items-center space-x-2.5">
                              <span className="w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#444] flex items-center justify-center font-mono font-bold text-xs text-[#C5A059]">
                                {step.count}
                              </span>
                              <span className="font-sans text-xs">{step.label}</span>
                            </div>
                            {isDone && <Check className="w-4 h-4 text-[#C5A059]" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* 3. Reorganizador TCC */}
                  {currEx.id === 'tcc' && (
                    <div className="py-2 mb-6">
                      {thoughtStep === 0 ? (
                        <div className="space-y-3">
                          <label className="block font-sans text-xs text-[#8E8A83]">Qual preocupação está incomodando você agora?</label>
                          <input
                            type="text" value={thought} onChange={(e) => setThought(e.target.value)}
                            placeholder="Ex: Não vou conseguir dar conta..."
                            className="w-full p-2.5 bg-[#1A1A1A] border border-[#444] text-xs font-sans text-[#FDFCFB] focus:outline-none focus:border-[#C5A059]"
                          />
                          <button
                            disabled={!thought.trim()} onClick={() => setThoughtStep(1)}
                            className="w-full py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                          >
                            Analisar com a TCC
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-3 bg-[#1A1A1A] border-l-2 border-[#C5A059]">
                            <p className="font-sans text-[10px] text-[#8E8A83]">Seu pensamento:</p>
                            <p className="font-display italic text-xs text-[#FDFCFB]">"{thought}"</p>
                          </div>
                          <div className="space-y-1.5 text-xs font-sans text-[#8E8A83]">
                            <p className="text-[#C5A059] font-bold uppercase text-[10px]">Perguntas de Reflexão TCC:</p>
                            <p>• Quais são as evidências REAIS a favor e contra isso?</p>
                            <p>• O que você diria a um grande amigo nessa mesma situação?</p>
                          </div>
                          <button onClick={() => setShowCalm(true)} className="w-full py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider cursor-pointer">
                            Reestruturar Pensamento
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. Durmazen */}
                  {currEx.id === 'durmazen' && (
                    <div className="py-4 text-center space-y-4 mb-6">
                      <Moon className="w-10 h-10 text-[#C5A059] mx-auto animate-pulse" />
                      <p className="font-display text-base italic text-[#FDFCFB]">
                        "Solte os ombros, relaxe o travamento da mandíbula e sinta seu corpo afundar no colchão."
                      </p>
                      <p className="font-sans text-xs text-[#8E8A83] max-w-sm mx-auto leading-relaxed">
                        Focalize em relaxar cada grupo muscular: pés, pernas, abdômen, ombros e os músculos do rosto.
                      </p>
                    </div>
                  )}

                  {/* Footer Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#333]">
                    <button onClick={() => setShowCalm(true)} className="w-full sm:w-1/2 py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider cursor-pointer">
                      Estou Mais Calmo
                    </button>
                    <button onClick={() => openEx((activeIdx + 1) % EXERCISES.length)} className="w-full sm:w-1/2 py-2.5 bg-[#1A1A1A] text-[#FDFCFB] border border-[#444] font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center space-x-1">
                      <span>Próximo Exercício</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
