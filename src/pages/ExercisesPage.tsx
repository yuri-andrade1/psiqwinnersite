import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Anchor, Brain, Moon, X, Check, ArrowRight, Heart, Home, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO } from '../data';

const EXERCISES = [
  {
    id: 'desacelera',
    title: 'Respiração Guiada',
    subtitle: 'Ritmo 4-7-8',
    desc: 'Uma pausa curta para acalmar a mente e desacelerar os batimentos quando tudo parecer muito acelerado.',
    icon: Wind,
    badge: 'Desacelerar',
  },
  {
    id: 'ancora',
    title: 'Aterramento no Presente',
    subtitle: 'Conexão 5-4-3-2-1',
    desc: 'Um exercício prático para trazer a atenção de volta ao aqui e agora durante momentos de tensão ou ansiedade.',
    icon: Anchor,
    badge: 'Acalmar',
  },
  {
    id: 'tcc',
    title: 'Pausa para a Mente',
    subtitle: 'Clareza & Leveza',
    desc: 'Um exercício simples para aliviar a sobrecarga de preocupações e olhar para os pensamentos com mais serenidade.',
    icon: Brain,
    badge: 'Clareza',
  },
  {
    id: 'durmazen',
    title: 'Relaxamento para Dormir',
    subtitle: 'Descompressão Corporal',
    desc: 'Solte gradualmente a tensão dos músculos e prepare o corpo para um descanso tranquilo.',
    icon: Moon,
    badge: 'Descanso',
  },
];

const GROUNDING = [
  { count: 5, label: 'coisas que você pode ver ao seu redor agora' },
  { count: 4, label: 'coisas que você pode tocar perto de você' },
  { count: 3, label: 'sons que você consegue ouvir no ambiente' },
  { count: 2, label: 'cheiros ou sensações do ar' },
  { count: 1, label: 'coisa boa sobre você neste momento' },
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
    document.title = 'Práticas de Acalmamento & Bem-Estar | Dr. Winner Furtado';
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
    <main className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] pt-32 pb-24 border-b border-[#E5E1DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83] transition-colors border border-[#1A1A1A] px-3.5 py-1.5">
            <Home className="w-3.5 h-3.5 mr-2 text-[#8E8A83]" />
            Voltar ao Início
          </Link>
        </div>

        {/* Section Header */}
        <div className="border-b border-[#E5E1DA] pb-8 mb-12">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8E8A83] block mb-2">
            Pausa &amp; Cuidado
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-3">
            Práticas Guiadas para Momentos de Tensão
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#555] max-w-2xl leading-relaxed">
            Pequenos exercícios práticos baseados na psicologia clínica para ajudar você a desacelerar, respirar fundo e recuperar o equilíbrio no seu próprio ritmo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXERCISES.map((ex, idx) => {
            const Icon = ex.icon;
            return (
              <div key={ex.id} className="bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] p-6 flex flex-col justify-between transition-all group shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 bg-[#F9F7F2] border border-[#E5E1DA]">
                      <Icon className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase text-[#8E8A83] bg-[#F9F7F2] px-2.5 py-1 border border-[#E5E1DA]">
                      {ex.badge}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-[#1A1A1A] mb-0.5">{ex.title}</h2>
                  <p className="font-sans text-xs text-[#8E8A83] font-semibold mb-3">{ex.subtitle}</p>
                  <p className="font-sans text-xs text-[#555] leading-relaxed mb-6">{ex.desc}</p>
                </div>
                <button
                  onClick={() => openEx(idx)}
                  className="w-full py-2.5 bg-[#1A1A1A] text-white hover:bg-[#333] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Iniciar Prática</span>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-[#FDFCFB] border border-[#E5E1DA] p-6 sm:p-8 relative shadow-xl my-auto text-[#1A1A1A]">
              
              <button onClick={() => setActiveIdx(null)} className="absolute top-5 right-5 p-2 text-[#8E8A83] hover:text-[#1A1A1A] bg-[#F9F7F2] border border-[#E5E1DA] cursor-pointer">
                <X className="w-4 h-4" />
              </button>

              {showCalm ? (
                /* Natural Feedback Screen */
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-[#F9F7F2] border border-[#E5E1DA] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-2">Espero que você esteja se sentindo melhor</h3>
                  <p className="font-sans text-xs text-[#555] max-w-sm mx-auto mb-6 leading-relaxed">
                    Respeite o seu tempo. Se você sente que gostaria de conversar melhor sobre o que está passando, o atendimento psicológico pode ajudar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, Dr. Winner! Estava no seu site e gostaria de saber sobre as consultas.')}`}
                      target="_blank" rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#1A1A1A] text-white hover:bg-[#333] font-bold text-xs uppercase tracking-wider flex items-center justify-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> Falar com Dr. Winner
                    </a>
                    <button onClick={() => setActiveIdx(null)} className="px-5 py-2.5 bg-white text-[#1A1A1A] border border-[#E5E1DA] font-bold text-xs uppercase cursor-pointer">
                      Concluir
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Exercise Content */
                <div>
                  <div className="text-center mb-6 border-b border-[#E5E1DA] pb-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8E8A83]">PAUSA GUIADA</span>
                    <h3 className="font-display font-bold text-2xl text-[#1A1A1A] mt-0.5">{currEx.title}</h3>
                    <p className="font-sans text-xs text-[#8E8A83]">{currEx.subtitle}</p>
                  </div>

                  {/* 1. Desacelera */}
                  {currEx.id === 'desacelera' && (
                    <div className="text-center py-2">
                      <p className="font-sans text-xs text-[#555] mb-4">Acompanhe a respiração no seu tempo:</p>
                      
                      {/* Geometric Breathing Animation */}
                      <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.25 : phase === 'hold' ? 1.25 : 1, rotate: phase === 'inspire' ? 45 : 0 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-0 border-2 border-[#1A1A1A]/30 rounded-2xl"
                        />
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.12 : phase === 'hold' ? 1.12 : 0.9 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-4 border border-[#8E8A83]/30 rounded-xl"
                        />
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.05 : phase === 'hold' ? 1.05 : 0.8 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-8 bg-[#F9F7F2] border border-[#1A1A1A] rounded-lg flex items-center justify-center"
                        >
                          <span className="font-display italic text-sm text-[#1A1A1A] font-bold">
                            {phase === 'inspire' && 'Inspire...'}
                            {phase === 'hold' && 'Segure...'}
                            {phase === 'expire' && 'Expire...'}
                          </span>
                        </motion.div>
                      </div>

                      <p className="font-sans text-xs text-[#8E8A83] mb-4">
                        Tempo: <strong className="text-[#1A1A1A] font-mono">{seconds}s</strong>
                      </p>
                    </div>
                  )}

                  {/* 2. Âncora */}
                  {currEx.id === 'ancora' && (
                    <div className="py-2 space-y-2 mb-6">
                      <p className="font-sans text-xs text-[#555] text-center mb-3">Observe o ambiente ao seu redor:</p>
                      {GROUNDING.map((step, sIdx) => {
                        const isDone = sIdx <= groundStep;
                        return (
                          <button
                            key={step.count} onClick={() => setGroundStep(sIdx)}
                            className={`w-full p-3 border text-left flex items-center justify-between transition-colors cursor-pointer ${
                              isDone ? 'bg-[#F9F7F2] border-[#1A1A1A] text-[#1A1A1A]' : 'bg-white border-[#E5E1DA] text-[#8E8A83]'
                            }`}
                          >
                            <div className="flex items-center space-x-2.5">
                              <span className="w-6 h-6 rounded-full bg-[#F9F7F2] border border-[#E5E1DA] flex items-center justify-center font-mono font-bold text-xs text-[#1A1A1A]">
                                {step.count}
                              </span>
                              <span className="font-sans text-xs">{step.label}</span>
                            </div>
                            {isDone && <Check className="w-4 h-4 text-[#1A1A1A]" />}
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
                          <label className="block font-sans text-xs text-[#555]">O que está preocupando você neste momento?</label>
                          <input
                            type="text" value={thought} onChange={(e) => setThought(e.target.value)}
                            placeholder="Escreva brevemente o pensamento..."
                            className="w-full p-2.5 bg-white border border-[#E5E1DA] text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                          />
                          <button
                            disabled={!thought.trim()} onClick={() => setThoughtStep(1)}
                            className="w-full py-2.5 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                          >
                            Continuar
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-3 bg-[#F9F7F2] border-l-2 border-[#1A1A1A]">
                            <p className="font-sans text-[10px] text-[#8E8A83]">Seu pensamento:</p>
                            <p className="font-display italic text-xs text-[#1A1A1A]">"{thought}"</p>
                          </div>
                          <div className="space-y-1.5 text-xs font-sans text-[#555]">
                            <p className="text-[#1A1A1A] font-bold uppercase text-[10px]">Para refletir:</p>
                            <p>• Quais são os fatos reais que confirmam isso agora?</p>
                            <p>• O que você aconselharia a uma pessoa querida que estivesse com esse mesmo receio?</p>
                          </div>
                          <button onClick={() => setShowCalm(true)} className="w-full py-2.5 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider cursor-pointer">
                            Acalmar a Mente
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. Durmazen */}
                  {currEx.id === 'durmazen' && (
                    <div className="py-4 text-center space-y-3 mb-6">
                      <Moon className="w-8 h-8 text-[#8E8A83] mx-auto animate-pulse" />
                      <p className="font-display text-base italic text-[#1A1A1A]">
                        "Descanse os ombros, solte a mandíbula e deite confortavelmente."
                      </p>
                      <p className="font-sans text-xs text-[#555] max-w-sm mx-auto leading-relaxed">
                        Preste atenção na sensação de peso e relaxamento nos pés, pernas, costas e rosto.
                      </p>
                    </div>
                  )}

                  {/* Footer Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E5E1DA]">
                    <button onClick={() => setShowCalm(true)} className="w-full sm:w-1/2 py-2.5 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider cursor-pointer">
                      Estou Mais Tranquilo
                    </button>
                    <button onClick={() => openEx((activeIdx + 1) % EXERCISES.length)} className="w-full sm:w-1/2 py-2.5 bg-[#F9F7F2] text-[#1A1A1A] border border-[#E5E1DA] font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center space-x-1">
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
