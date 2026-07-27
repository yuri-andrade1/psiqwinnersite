import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Anchor, Brain, Moon, X, Check, ArrowRight, Heart, Home, MessageSquare, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO } from '../data';

const EXERCISES = [
  {
    id: 'desacelera',
    title: 'Respiração Guiada',
    subtitle: 'Ritmo 4-7-8',
    desc: 'Uma pausa simples e eficaz para desacelerar os batimentos e acalmar a mente nos momentos em que tudo parecer muito acelerado.',
    duration: '3 minutos',
    icon: Heart,
    badge: 'Destaque',
  },
  {
    id: 'ancora',
    title: 'Aterramento no Presente',
    subtitle: 'Conexão 5-4-3-2-1',
    desc: 'Um exercício prático para trazer a atenção de volta ao aqui e agora durante momentos de tensão ou ansiedade.',
    duration: '3 minutos',
    icon: Anchor,
    badge: 'Acalmar',
  },
  {
    id: 'tcc',
    title: 'Pausa para a Mente',
    subtitle: 'Clareza & Leveza',
    desc: 'Um exercício simples para aliviar a sobrecarga de preocupações e olhar para os pensamentos com mais serenidade.',
    duration: '2 minutos',
    icon: Brain,
    badge: 'Clareza',
  },
  {
    id: 'durmazen',
    title: 'Relaxamento para Dormir',
    subtitle: 'Descompressão Corporal',
    desc: 'Solte gradualmente a tensão dos músculos e prepare o corpo para um descanso tranquilo e reparador.',
    duration: '4 minutos',
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
    document.title = 'Práticas Guiadas & Autorregulação | Dr. Winner Furtado';
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
  const mainExercise = EXERCISES[0]; // Hero feature (Respiração)
  const sideExercises = EXERCISES.slice(1); // Other 3 exercises

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
            PAUSA &amp; CUIDADO
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight mb-3">
            Um espaço para desacelerar e recuperar a presença.
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#555] max-w-2xl leading-relaxed">
            Exercícios práticos desenhados para guiar você em momentos de tensão, ajudando a respirar fundo e recuperar o equilíbrio no seu próprio tempo.
          </p>

          {/* Ambient Wave Animation */}
          <div className="w-full h-12 overflow-hidden mt-6 opacity-40">
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12">
              <motion.path
                d="M0,20 C300,60 600,-20 900,40 C1050,70 1150,10 1200,30 L1200,80 L0,80 Z"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                animate={{
                  d: [
                    "M0,20 C300,60 600,-20 900,40 C1050,70 1150,10 1200,30 L1200,80 L0,80 Z",
                    "M0,40 C200,0 500,70 800,10 C1000,-10 1120,50 1200,20 L1200,80 L0,80 Z",
                    "M0,20 C300,60 600,-20 900,40 C1050,70 1150,10 1200,30 L1200,80 L0,80 Z",
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M0,40 C250,-10 450,50 700,10 C950,-30 1100,50 1200,20 L1200,80 L0,80 Z"
                fill="none"
                stroke="#8E8A83"
                strokeWidth="1"
                strokeDasharray="4 4"
                animate={{
                  d: [
                    "M0,40 C250,-10 450,50 700,10 C950,-30 1100,50 1200,20 L1200,80 L0,80 Z",
                    "M0,10 C180,50 380,-10 620,40 C860,80 1050,0 1200,30 L1200,80 L0,80 Z",
                    "M0,40 C250,-10 450,50 700,10 C950,-30 1100,50 1200,20 L1200,80 L0,80 Z",
                  ]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Editorial Layout: Hero Feature (Left) + Side List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COL: Large Hero Feature Card (Respiração Guiada) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] text-[#FDFCFB] border border-[#1A1A1A] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-md">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1A1A1A] bg-[#C5A059] px-3 py-1">
                  EXERCÍCIO PRINCIPAL
                </span>
                <span className="inline-flex items-center text-xs text-[#8E8A83] font-mono">
                  <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                  {mainExercise.duration}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#FDFCFB] mb-2">
                {mainExercise.title}
              </h2>
              <p className="font-sans text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-6">
                {mainExercise.subtitle}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#8E8A83] leading-relaxed mb-8 max-w-lg">
                {mainExercise.desc}
              </p>

              {/* Live Preview Pulse Visual */}
              <div className="my-6 p-6 bg-[#242424] border border-[#333] flex items-center space-x-6">
                <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 border-2 border-[#C5A059]/40 rounded-xl"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-3 border border-[#FDFCFB]/20 rounded-lg"
                  />
                  <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/20 relative z-10" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FDFCFB] mb-1">Ritmo de Respiração Guiada</p>
                  <p className="text-[11px] text-[#8E8A83]">Sincronia suave de 4s de inspiração, 2s de pausa e 4s de expiração.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-[#333]">
              <button
                onClick={() => openEx(0)}
                className="w-full py-4 bg-[#C5A059] text-[#1A1A1A] hover:bg-[#b08d4a] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Iniciar Respiração Guiada</span>
              </button>
            </div>
          </div>

          {/* RIGHT COL: Side List of Other 3 Exercises */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {sideExercises.map((ex, sIdx) => {
              const originalIdx = sIdx + 1;
              const Icon = ex.icon;
              return (
                <div
                  key={ex.id}
                  className="bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] p-6 transition-all shadow-sm flex flex-col justify-between flex-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-[#F9F7F2] border border-[#E5E1DA]">
                          <Icon className="w-4 h-4 text-[#1A1A1A]" />
                        </div>
                        <span className="text-[9px] font-sans font-bold uppercase text-[#8E8A83] bg-[#F9F7F2] px-2 py-0.5 border border-[#E5E1DA]">
                          {ex.badge}
                        </span>
                      </div>
                      <span className="inline-flex items-center text-[11px] font-mono text-[#8E8A83]">
                        <Clock className="w-3 h-3 mr-1 text-[#8E8A83]" />
                        {ex.duration}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-0.5">{ex.title}</h3>
                    <p className="font-sans text-[11px] text-[#8E8A83] font-semibold mb-2">{ex.subtitle}</p>
                    <p className="font-sans text-xs text-[#555] leading-relaxed mb-4">{ex.desc}</p>
                  </div>

                  <button
                    onClick={() => openEx(originalIdx)}
                    className="w-full py-2.5 bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#E5E1DA] hover:border-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Iniciar Prática</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

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
                      
                      {/* Heart Pulsating Breathing Visual */}
                      <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.3 : phase === 'hold' ? 1.3 : 1 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-0 border-2 border-[#1A1A1A]/20 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.18 : phase === 'hold' ? 1.18 : 0.9 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-3 border border-[#8E8A83]/30 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: phase === 'inspire' ? 1.1 : phase === 'hold' ? 1.1 : 0.85 }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                          className="absolute inset-6 bg-[#F9F7F2] border-2 border-[#1A1A1A] rounded-full flex flex-col items-center justify-center shadow-sm"
                        >
                          <Heart className="w-5 h-5 text-[#1A1A1A] fill-[#1A1A1A]/10 mb-1" />
                          <span className="font-display italic text-xs text-[#1A1A1A] font-bold">
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
