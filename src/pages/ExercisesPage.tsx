import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Anchor, Smile, ShieldCheck, Brain, Target, Moon, X, Check, ArrowRight, Home, MessageSquare, Play, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR_INFO } from '../data';

const EXERCISES = [
  {
    id: 'desacelera',
    title: 'Respiração Guiada',
    subtitle: 'Ritmo 4-7-8',
    desc: 'Uma pausa simples e eficaz para desacelerar os batimentos e acalmar a mente nos momentos em que tudo parecer muito acelerado.',
    icon: Heart,
    badge: 'Destaque',
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
    id: 'sono',
    title: 'Quero Dormir Melhor',
    subtitle: 'Protocolo de Higiene do Sono',
    desc: 'Um protocolo prático de higiene do sono para preparar o seu corpo e sua mente para um descanso profundo e reparador.',
    icon: Moon,
    badge: 'Sono & Descanso',
  },
  {
    id: 'preocupacoes',
    title: 'Organizando a Mente',
    subtitle: 'Resolução de Problemas TCC',
    desc: 'Nem toda preocupação precisa ser resolvida agora. Vamos descobrir qual delas merece sua energia neste momento.',
    icon: Brain,
    badge: 'Organizar a Mente',
  },
  {
    id: 'resolucao_problemas',
    title: 'Resolução de Problemas',
    subtitle: 'Estratégia TCC em 6 Passos',
    desc: 'Uma estratégia prática para transformar preocupações produtivas em um plano de ação claro, passo a passo.',
    icon: Target,
    badge: 'Ação & Foco',
  },
  {
    id: 'checkin',
    title: 'Check-in Emocional',
    subtitle: 'Consciência & Acolhimento',
    desc: 'Uma pausa gentil para reconhecer o que você está sentindo neste momento, sem cobranças ou julgamentos.',
    icon: Smile,
    badge: 'Autocuidado',
  },
  {
    id: 'seguranca',
    title: 'Resgate de Segurança',
    subtitle: 'Autoestima & Firmeza',
    desc: 'Um exercício de fortalecimento pessoal para momentos de dúvida, insegurança ou autocrítica excessiva.',
    icon: ShieldCheck,
    badge: 'Fortalecer',
  },
];

const GROUNDING = [
  {
    count: 5,
    label: '5 coisas que você pode ver ao seu redor (visão)',
    instruction: 'Sem pressa, observe o ambiente ao seu redor. Escolha uma cor de sua preferência e identifique mentalmente cinco objetos dessa cor. Deixe seu olhar passear pelo ambiente enquanto faz essa busca.',
  },
  {
    count: 4,
    label: '4 coisas que você pode tocar perto de você (tato)',
    instruction: 'Escolha quatro objetos ao seu redor e toque cada um deles. Observe com curiosidade sua textura, temperatura, peso ou formato, percebendo as sensações que surgem em suas mãos.',
  },
  {
    count: 3,
    label: '3 sons que você consegue ouvir no ambiente (audição)',
    instruction: 'Feche os olhos por alguns instantes e identifique três sons ao seu redor. Observe se eles estão mais próximos ou distantes, se são mais agudos ou graves e como sua intensidade varia ao longo do tempo.',
  },
  {
    count: 2,
    label: '2 cheiros ou aromas no ar ao seu redor (olfato)',
    instruction: 'Identifique dois aromas que você consegue perceber neste momento. Observe suas características: são agradáveis ou desagradáveis? Doces, cítricos ou suaves? Perceba como seu corpo reage a cada aroma, sem tentar mudar essa experiência.',
  },
  {
    count: 1,
    label: '1 coisa que você pode sentir o gosto (paladar)',
    instruction: 'Perceba um sabor presente neste momento. Pode ser o gosto que ficou na boca, um gole de água ou um alimento. Observe suas características: é doce, salgado, amargo, azedo ou neutro? Perceba como esse sabor muda à medida que você presta atenção nele.',
  },
];

const SLEEP_ITEMS = [
  { id: 1, text: 'Evite consumir bebidas com cafeína após as 15h, especialmente se você costuma ter dificuldade para dormir.' },
  { id: 2, text: 'Reserve a cama apenas para dormir e para atividades sexuais. Isso ajuda seu cérebro a associar esse ambiente ao sono.' },
  { id: 3, text: 'Prefira refeições leves no período da noite. Alimentações muito volumosas podem dificultar o sono.' },
  { id: 4, text: 'Procure se expor à luz natural por cerca de 20 a 30 minutos logo após acordar. Mesmo em dias nublados, a claridade natural já pode ajudar a regular seu relógio biológico.' },
  { id: 5, text: 'Se você costuma ter dificuldade para dormir à noite, evite cochilos durante o dia.' },
  { id: 6, text: 'Pratique atividade física regularmente, de preferência durante o dia ou no início da noite.' },
  { id: 7, text: 'À noite, prefira uma iluminação mais suave e com tons quentes. Isso ajuda seu organismo a entender que está chegando a hora de descansar.' },
  { id: 8, text: 'Evite usar telas com muito brilho antes de dormir. Se precisar utilizá-las, reduza o brilho e, se possível, ative o filtro de luz noturna.' },
  { id: 9, text: 'Se acordar durante a noite, tente não olhar para o relógio. Saber as horas pode aumentar a ansiedade e dificultar que o sono volte naturalmente.' },
  { id: 10, text: 'Nas 2 a 3 horas antes de dormir, procure evitar trabalho ou estudos intensos. Prefira atividades relaxantes e pouco estimulantes, como ler um livro ou ouvir uma música tranquila.' },
  { id: 11, text: 'Sempre que possível, mantenha horários semelhantes para dormir e acordar, inclusive nos finais de semana.' },
];

const WORRY_QUESTIONS = [
  {
    id: 1,
    question: '1. Existe alguma ação concreta que eu possa fazer hoje sobre essa preocupação?',
    options: [
      { text: 'Sim', isUnproductive: false },
      { text: 'Não', isUnproductive: true },
    ]
  },
  {
    id: 2,
    question: '2. Essa preocupação depende principalmente de mim?',
    options: [
      { text: 'Sim', isUnproductive: false },
      { text: 'Não', isUnproductive: true },
    ]
  },
  {
    id: 3,
    question: '3. Estou pensando em possibilidades futuras ou em um problema que já está acontecendo?',
    options: [
      { text: 'Possibilidades futuras', isUnproductive: true },
      { text: 'Problema atual', isUnproductive: false },
    ]
  },
  {
    id: 4,
    question: '4. Pensar nisso agora está me ajudando a resolver ou apenas me deixando mais ansioso?',
    options: [
      { text: 'Está ajudando', isUnproductive: false },
      { text: 'Está me deixando mais ansioso', isUnproductive: true },
    ]
  },
  {
    id: 5,
    question: '5. Se eu continuar pensando nisso pelos próximos 30 minutos, algo realmente mudará?',
    options: [
      { text: 'Sim', isUnproductive: false },
      { text: 'Não', isUnproductive: true },
    ]
  },
];

const PROBLEM_STEPS = [
  {
    step: 1,
    title: '1. Identifique o problema',
    instruction: 'Descreva-o da forma mais específica possível.',
  },
  {
    step: 2,
    title: '2. Liste todas as soluções possíveis',
    instruction: 'Liste todas as soluções que conseguir imaginar. Não se preocupe se algumas parecerem improváveis ou até um pouco estranhas.',
  },
  {
    step: 3,
    title: '3. Avalie vantagens e desvantagens',
    instruction: 'Avalie as vantagens e desvantagens de cada alternativa com calma.',
  },
  {
    step: 4,
    title: '4. Escolha a melhor opção',
    instruction: 'Escolha a opção que faz mais sentido para você neste momento.',
  },
  {
    step: 5,
    title: '5. Coloque seu plano em prática',
    instruction: 'Coloque seu plano em prática. Comece pelo menor passo possível hoje.',
  },
  {
    step: 6,
    title: '6. Avalie o resultado',
    instruction: 'Avalie o resultado. Se necessário, ajuste a estratégia ou experimente outra alternativa.',
  },
];

const EMOTIONS = [
  { id: 'tensao', label: 'Tensão ou Agitação', message: 'É natural sentir o corpo tenso quando a mente carrega muitas exigências. Solte os ombros por um instante.' },
  { id: 'cansaco', label: 'Cansaço Mental', message: 'Sua mente precisa de pausas curtas para recompor as energias. Permita-se apenas respirar agora.' },
  { id: 'preocupacao', label: 'Preocupação com o Futuro', message: 'O futuro é construído um passo de cada vez. Concentre sua atenção apenas no próximo passo viável.' },
  { id: 'inseguranca', label: 'Dúvida ou Insegurança', message: 'Lembre-se de que você tem recursos internos construídos ao longo da sua história para lidar com os desafios.' },
];

const STRENGTHS = [
  'Superação de momentos difíceis no passado',
  'Cuidado e empatia com as pessoas queridas',
  'Dedicação e capacidade de aprendizado contínuo',
  'Busca por evolução e autoconhecimento',
];

export default function ExercisesPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [phase, setPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire');
  const [seconds, setSeconds] = useState(60);
  const [groundStep, setGroundStep] = useState(0);
  const [sleepChecks, setSleepChecks] = useState<Record<number, boolean>>({});
  const [problemStep, setProblemStep] = useState(0);
  const [worryStep, setWorryStep] = useState(0);
  const [isStoppedUnproductive, setIsStoppedUnproductive] = useState(false);
  const [isAllProductive, setIsAllProductive] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedStrength, setSelectedStrength] = useState<number | null>(null);
  const [showCalm, setShowCalm] = useState(false);
  const [isTriageOpen, setIsTriageOpen] = useState(false);

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
    setGroundStep(0); setSleepChecks({}); setProblemStep(0); setWorryStep(0);
    setIsStoppedUnproductive(false); setIsAllProductive(false);
    setSelectedEmotion(null); setSelectedStrength(null);
  };

  const handleTriageSelect = (targetExIdx: number) => {
    setIsTriageOpen(false);
    openEx(targetExIdx);
  };

  const toggleSleepCheck = (id: number) => {
    setSleepChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleWorryAnswer = (opt: { text: string; isUnproductive: boolean }) => {
    if (opt.isUnproductive) {
      setIsStoppedUnproductive(true);
    } else {
      if (worryStep < WORRY_QUESTIONS.length - 1) {
        setWorryStep((prev) => prev + 1);
      } else {
        setIsAllProductive(true);
      }
    }
  };

  const currEx = activeIdx !== null ? EXERCISES[activeIdx] : null;
  const mainExercise = EXERCISES[0];
  const sideExercises = EXERCISES.slice(1);

  const checkedSleepCount = Object.values(sleepChecks).filter(Boolean).length;

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] pt-32 pb-24 border-b border-[#E5E1DA] relative overflow-hidden">
      {/* Ambient Wind Breeze Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M -200,120 Q 300,80 600,140 T 1400,100"
            fill="none"
            stroke="#8E8A83"
            strokeWidth="1.5"
            strokeDasharray="140 220"
            animate={{ strokeDashoffset: [-360, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M -200,320 Q 400,380 750,300 T 1400,350"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeDasharray="100 250"
            animate={{ strokeDashoffset: [-450, 250] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M -200,550 Q 250,500 650,580 T 1400,520"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeDasharray="180 300"
            animate={{ strokeDashoffset: [-400, 400] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83] transition-colors border border-[#1A1A1A] px-3.5 py-1.5">
            <Home className="w-3.5 h-3.5 mr-2 text-[#8E8A83]" />
            Voltar ao Início
          </Link>
        </div>

        {/* Section Header */}
        <div className="border-b border-[#E5E1DA] pb-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8E8A83] block mb-2">
                PAUSA &amp; CUIDADO
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight mb-3">
                Um espaço para desacelerar e recuperar a presença.
              </h1>
              <p className="font-sans text-xs sm:text-sm text-[#555] leading-relaxed">
                Exercícios práticos desenhados para guiar você em momentos de tensão, ajudando a respirar fundo e recuperar o equilíbrio no seu próprio tempo.
              </p>
            </div>

            {/* Triage Trigger Button */}
            <div className="w-full sm:w-auto shrink-0">
              <button
                onClick={() => setIsTriageOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-3 bg-[#F9F7F2] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer text-center"
              >
                <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Não sei qual escolher? Triagem Rápida</span>
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Layout: Hero Feature (Left) + Side Grid (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COL: Large Hero Feature Card (Respiração Guiada) */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-[#FDFCFB] border border-[#1A1A1A] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-md">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1A1A1A] bg-[#C5A059] px-3 py-1">
                  EXERCÍCIO PRINCIPAL
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

              {/* Live Preview GIF Visual */}
              <div className="my-6 p-6 bg-[#242424] border border-[#333] flex items-center space-x-6">
                <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0 bg-white/5 rounded-lg overflow-hidden border border-white/10 p-1">
                  <img src="/exercicio.gif" alt="Exercício de Respiração" className="w-full h-full object-contain rounded" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FDFCFB] mb-1">Ritmo de Respiração Guiada</p>
                  <p className="text-[11px] text-[#8E8A83]">Sincronia suave para desacelerar o ritmo e acalmar a mente.</p>
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

          {/* RIGHT COL: Side Grid of Other 6 Exercises */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sideExercises.map((ex, sIdx) => {
              const originalIdx = sIdx + 1;
              const Icon = ex.icon;
              return (
                <div
                  key={ex.id}
                  className="bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] p-5 transition-all shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-[#F9F7F2] border border-[#E5E1DA]">
                        <Icon className="w-4 h-4 text-[#1A1A1A]" />
                      </div>
                      <span className="text-[9px] font-sans font-bold uppercase text-[#8E8A83] bg-[#F9F7F2] px-2 py-0.5 border border-[#E5E1DA]">
                        {ex.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-0.5">{ex.title}</h3>
                    <p className="font-sans text-[10px] text-[#8E8A83] font-semibold mb-2">{ex.subtitle}</p>
                    <p className="font-sans text-xs text-[#555] leading-relaxed mb-4">{ex.desc}</p>
                  </div>

                  <button
                    onClick={() => openEx(originalIdx)}
                    className="w-full py-2 bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#E5E1DA] hover:border-[#1A1A1A] text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Iniciar Prática</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Triage Modal */}
      <AnimatePresence>
        {isTriageOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-[#FDFCFB] border border-[#E5E1DA] p-6 sm:p-8 relative shadow-xl my-auto text-[#1A1A1A] max-h-[90vh] overflow-y-auto">
              <button onClick={() => setIsTriageOpen(false)} className="absolute top-5 right-5 p-2 text-[#8E8A83] hover:text-[#1A1A1A] bg-[#F9F7F2] border border-[#E5E1DA] cursor-pointer">
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6 border-b border-[#E5E1DA] pb-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-1.5 mb-1">
                  <Compass className="w-3.5 h-3.5" /> TRIAGEM RÁPIDA DE AUTORREGULAÇÃO
                </span>
                <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">Como você está se sentindo agora?</h3>
                <p className="font-sans text-xs text-[#8E8A83] mt-1">Selecione a sensação mais forte no momento para receber a recomendação ideal:</p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { idx: 0, title: '🫀 Coração acelerado, falta de ar ou agitação física', desc: 'Recomendação: Respiração Guiada (Ritmo 4-7-8)' },
                  { idx: 1, title: '🌀 Crises, pensamento acelerado ou sensação de desconexão', desc: 'Recomendação: Aterramento no Presente (5-4-3-2-1)' },
                  { idx: 2, title: '🌙 Insônia, agitação noturna ou dificuldade para dormir', desc: 'Recomendação: Quero Dormir Melhor (Protocolo TCC)' },
                  { idx: 3, title: '🧠 Mente cheia de "e se?", indecisão ou ruminação sobre o futuro', desc: 'Recomendação: Organizando a Mente (TCC)' },
                  { idx: 4, title: '🎯 Preciso agir e criar um plano prático para um problema real', desc: 'Recomendação: Resolução de Problemas TCC' },
                  { idx: 5, title: '😔 Tristeza, exaustão mental ou nó na garganta', desc: 'Recomendação: Check-in Emocional & Acolhimento' },
                  { idx: 6, title: '💔 Autocrítica excessiva, insegurança ou medo de errar', desc: 'Recomendação: Resgate de Segurança (Autoestima TCC)' },
                ].map((option) => (
                  <button
                    key={option.idx}
                    onClick={() => handleTriageSelect(option.idx)}
                    className="w-full p-3.5 bg-white hover:bg-[#F9F7F2] border border-[#E5E1DA] hover:border-[#1A1A1A] text-left transition-all group cursor-pointer shadow-sm"
                  >
                    <p className="font-sans text-xs font-bold text-[#1A1A1A] mb-1 group-hover:text-[#C5A059] transition-colors">
                      {option.title}
                    </p>
                    <p className="font-sans text-[11px] text-[#8E8A83] font-semibold">
                      → {option.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="text-center pt-2">
                <button onClick={() => setIsTriageOpen(false)} className="text-xs text-[#8E8A83] hover:text-[#1A1A1A] underline cursor-pointer">
                  Fechar e navegar livremente pelos exercícios
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Exercise Modal */}
      <AnimatePresence>
        {activeIdx !== null && currEx && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-[#FDFCFB] border border-[#E5E1DA] p-6 sm:p-8 relative shadow-xl my-auto text-[#1A1A1A] max-h-[90vh] overflow-y-auto">
              
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
                      
                      {/* Custom Breathing GIF Visual */}
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 flex flex-col items-center justify-center bg-[#F9F7F2] border-2 border-[#1A1A1A] rounded-2xl p-3 sm:p-4 shadow-sm overflow-hidden">
                        <img src="/exercicio.gif" alt="Exercício de Respiração" className="w-full h-32 sm:h-40 object-contain rounded-xl mb-2 sm:mb-3" />
                        <span className="font-sans text-[10px] sm:text-[11px] text-[#1A1A1A] font-bold tracking-wide uppercase text-center">
                          Inspire ao expandir • Expire ao contrair
                        </span>
                      </div>

                      <p className="font-sans text-xs text-[#8E8A83] mb-4">
                        Tempo: <strong className="text-[#1A1A1A] font-mono">{seconds}s</strong>
                      </p>
                    </div>
                  )}

                  {/* 2. Âncora */}
                  {currEx.id === 'ancora' && (
                    <div className="py-2 space-y-2 mb-6">
                      <p className="font-sans text-xs text-[#555] text-center mb-3">Toque em cada sentido para ler a instrução guiada:</p>
                      {GROUNDING.map((step, sIdx) => {
                        const isSelected = groundStep === sIdx;
                        return (
                          <div key={step.count} className="space-y-1.5">
                            <button
                              onClick={() => setGroundStep(sIdx)}
                              className={`w-full p-3 border text-left flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected ? 'bg-[#F9F7F2] border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'bg-white border-[#E5E1DA] text-[#555]'
                              }`}
                            >
                              <div className="flex items-center space-x-2.5">
                                <span className="w-6 h-6 rounded-full bg-[#F9F7F2] border border-[#E5E1DA] flex items-center justify-center font-mono font-bold text-xs text-[#1A1A1A]">
                                  {step.count}
                                </span>
                                <span className="font-sans text-xs">{step.label}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-[#1A1A1A]" />}
                            </button>

                            {isSelected && (
                              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-[#F9F7F2] border-l-2 border-[#1A1A1A] text-xs text-[#1A1A1A] leading-relaxed">
                                {step.instruction}
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* 3. Higiene do Sono (NOVO EXERCÍCIO COM CHECKBOXES & SCORE) */}
                  {currEx.id === 'sono' && (
                    <div className="py-2 mb-6 space-y-4">
                      <p className="font-sans text-xs text-[#555] text-center mb-3">
                        A intenção aqui é um check-in simples com o protocolo de higiene do sono. Vá marcando os hábitos que você colocou em prática hoje:
                      </p>

                      <div className="space-y-2.5">
                        {SLEEP_ITEMS.map((item) => {
                          const isChecked = !!sleepChecks[item.id];
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleSleepCheck(item.id)}
                              className={`w-full p-3.5 border text-left font-sans text-xs transition-all cursor-pointer flex items-start justify-between space-x-3 shadow-sm ${
                                isChecked
                                  ? 'bg-[#F9F7F2] border-[#1A1A1A] text-[#1A1A1A] font-medium'
                                  : 'bg-white border-[#E5E1DA] text-[#555] hover:border-[#1A1A1A]'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  isChecked ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' : 'border-[#8E8A83] bg-white'
                                }`}>
                                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                                <span className="leading-relaxed">{item.text}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Score Evaluation & Feedback Box */}
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 bg-[#F9F7F2] border-l-4 border-[#C5A059] mt-6 space-y-4">
                        <p className="font-sans text-xs text-[#1A1A1A] leading-relaxed">
                          Parabéns por reservar alguns minutos para cuidar do seu sono. Lembre-se: mudanças consistentes costumam trazer mais resultados do que mudanças perfeitas.
                        </p>

                        <div className="pt-3 border-t border-[#E5E1DA] space-y-2">
                          <p className="text-xs font-bold text-[#1A1A1A]">
                            Você marcou <span className="underline decoration-[#C5A059] decoration-2 font-mono text-sm">{checkedSleepCount}</span> {checkedSleepCount === 1 ? 'item' : 'itens'} hoje:
                          </p>
                          <div className="space-y-2 pt-1">
                            <div className={`p-3 border text-xs font-sans transition-all ${
                              checkedSleepCount <= 3 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold shadow-sm' : 'bg-white border-[#E5E1DA] text-[#555]'
                            }`}>
                              🌱 0-3: Todo começo conta. Escolha um hábito para praticar amanhã.
                            </div>
                            <div className={`p-3 border text-xs font-sans transition-all ${
                              checkedSleepCount >= 4 && checkedSleepCount <= 7 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold shadow-sm' : 'bg-white border-[#E5E1DA] text-[#555]'
                            }`}>
                              🌿 4-7: Você já está construindo uma boa rotina.
                            </div>
                            <div className={`p-3 border text-xs font-sans transition-all ${
                              checkedSleepCount >= 8 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold shadow-sm' : 'bg-white border-[#E5E1DA] text-[#555]'
                            }`}>
                              🌳 8-11: Excelente! A consistência costuma ser a chave para um sono de melhor qualidade.
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* 4. Organizando a Mente (Decisão Curto-Circuito por Aba) */}
                  {currEx.id === 'preocupacoes' && (
                    <div className="py-2 mb-6 space-y-4">
                      
                      {/* Step Indicator & Progress Bar */}
                      {!isStoppedUnproductive && !isAllProductive && (
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-[#8E8A83] mb-1.5 font-mono">
                            <span>Etapa {worryStep + 1} de {WORRY_QUESTIONS.length}</span>
                            <span>{Math.round(((worryStep + 1) / WORRY_QUESTIONS.length) * 100)}%</span>
                          </div>
                          <div className="w-full bg-[#E5E1DA] h-1.5 rounded-full overflow-hidden mb-4">
                            <div
                              className="bg-[#1A1A1A] h-full transition-all duration-300"
                              style={{ width: `${((worryStep + 1) / WORRY_QUESTIONS.length) * 100}%` }}
                            />
                          </div>
                          <p className="font-sans text-xs text-[#555] text-center mb-3">
                            Antes de tentar resolver isso, faça uma pausa e responda à pergunta abaixo:
                          </p>
                        </div>
                      )}

                      {/* Question Card (Active Tab) */}
                      {!isStoppedUnproductive && !isAllProductive && WORRY_QUESTIONS[worryStep] && (
                        <motion.div
                          key={worryStep}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          className="p-4 sm:p-5 bg-white border border-[#E5E1DA] shadow-sm space-y-4"
                        >
                          <p className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A] leading-relaxed">
                            {WORRY_QUESTIONS[worryStep].question}
                          </p>

                          <div className="space-y-2.5">
                            {WORRY_QUESTIONS[worryStep].options.map((opt, oIdx) => (
                              <button
                                key={oIdx}
                                onClick={() => handleWorryAnswer(opt)}
                                className="w-full p-3.5 border border-[#E5E1DA] hover:border-[#1A1A1A] hover:bg-[#F9F7F2] text-left font-sans text-xs text-[#1A1A1A] transition-all cursor-pointer flex items-center justify-between group shadow-sm"
                              >
                                <span>☐ {opt.text}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#8E8A83] group-hover:text-[#1A1A1A] transition-colors" />
                              </button>
                            ))}
                          </div>

                          {worryStep > 0 && (
                            <div className="pt-2 text-left">
                              <button
                                onClick={() => setWorryStep((prev) => prev - 1)}
                                className="text-[11px] text-[#8E8A83] hover:text-[#1A1A1A] underline cursor-pointer"
                              >
                                ← Voltar para a pergunta anterior
                              </button>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* UNPRODUCTIVE RESULT (Routes to Grounding 5-4-3-2-1 -> openEx(1)) */}
                      {isStoppedUnproductive && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 bg-[#F9F7F2] border-l-4 border-[#1A1A1A] mt-2 space-y-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">PREOCUPAÇÃO IMPRODUTIVA IDENTIFICADA</p>
                            <p className="font-sans text-xs text-[#1A1A1A] leading-relaxed mb-4">
                              Essa preocupação provavelmente não precisa ser resolvida agora. Ela parece estar tentando prever o futuro ou encontrar certezas que ninguém possui. Você pode anotá-la e reservar um horário específico do dia para voltar a pensar nela. Até lá, permita que sua atenção retorne ao momento presente.
                            </p>
                            <button
                              onClick={() => openEx(1)}
                              className="w-full py-3 bg-[#1A1A1A] text-white hover:bg-[#333] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                            >
                              <span>Voltar ao Presente (Aterramento 5-4-3-2-1)</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* PRODUCTIVE RESULT (Routes to Problem Solving -> openEx(4)) */}
                      {isAllProductive && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 bg-[#F9F7F2] border-l-4 border-[#C5A059] mt-2 space-y-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">PREOCUPAÇÃO PRODUTIVA IDENTIFICADA</p>
                            <p className="font-sans text-xs text-[#1A1A1A] leading-relaxed mb-4">
                              Existe algo que pode ser feito. Em vez de permanecer preso na preocupação, transforme-a em um pequeno plano de ação. Pergunte: qual é o menor passo que posso dar hoje?
                            </p>
                            <button
                              onClick={() => openEx(4)}
                              className="w-full py-3 bg-[#C5A059] text-[#1A1A1A] hover:bg-[#b08d4a] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                            >
                              <span>DEFINIR O PRÓXIMO PASSO (Estratégia de Resolução)</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* 5. Resolução de Problemas TCC */}
                  {currEx.id === 'resolucao_problemas' && (
                    <div className="py-2 mb-6 space-y-4">
                      <p className="font-sans text-xs text-[#555] text-center mb-3">
                        Siga este passo a passo prático para transformar sua preocupação em um plano de ação viável:
                      </p>

                      <div className="space-y-2.5">
                        {PROBLEM_STEPS.map((stepItem, pIdx) => {
                          const isSelected = problemStep === pIdx;
                          return (
                            <div key={stepItem.step} className="space-y-1.5">
                              <button
                                onClick={() => setProblemStep(pIdx)}
                                className={`w-full p-3 border text-left flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected ? 'bg-[#F9F7F2] border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'bg-white border-[#E5E1DA] text-[#555]'
                                }`}
                              >
                                <div className="flex items-center space-x-2.5">
                                  <span className="w-6 h-6 rounded-full bg-[#F9F7F2] border border-[#E5E1DA] flex items-center justify-center font-mono font-bold text-xs text-[#1A1A1A]">
                                    {stepItem.step}
                                  </span>
                                  <span className="font-sans text-xs">{stepItem.title}</span>
                                </div>
                                {isSelected && <Check className="w-4 h-4 text-[#1A1A1A]" />}
                              </button>

                              {isSelected && (
                                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-[#F9F7F2] border-l-2 border-[#1A1A1A] text-xs text-[#1A1A1A] leading-relaxed">
                                  {stepItem.instruction}
                                </motion.div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Doctor's Final Reflection Box */}
                      <div className="p-4 bg-[#F9F7F2] border-l-2 border-[#C5A059] text-xs text-[#1A1A1A] leading-relaxed mt-4">
                        <p className="font-sans italic">
                          "Nem toda solução funciona na primeira tentativa. Resolver problemas também envolve testar, aprender e ajustar o caminho quando necessário."
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 6. Check-in Emocional */}
                  {currEx.id === 'checkin' && (
                    <div className="py-2 mb-6 space-y-4">
                      <p className="font-sans text-xs text-[#555] text-center mb-2">Como você descreveria o que está sentindo agora?</p>
                      <div className="space-y-2">
                        {EMOTIONS.map((emo) => {
                          const isSelected = selectedEmotion === emo.id;
                          return (
                            <button
                              key={emo.id}
                              onClick={() => setSelectedEmotion(emo.id)}
                              className={`w-full p-3 border text-left font-sans text-xs transition-colors cursor-pointer flex items-center justify-between ${
                                isSelected ? 'bg-[#F9F7F2] border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'bg-white border-[#E5E1DA] text-[#555]'
                              }`}
                            >
                              <span>{emo.label}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#1A1A1A]" />}
                            </button>
                          );
                        })}
                      </div>

                      {selectedEmotion && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-[#F9F7F2] border-l-2 border-[#1A1A1A] mt-4">
                          <p className="font-sans text-xs text-[#1A1A1A] leading-relaxed">
                            {EMOTIONS.find((e) => e.id === selectedEmotion)?.message}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* 7. Resgate de Segurança */}
                  {currEx.id === 'seguranca' && (
                    <div className="py-2 mb-6 space-y-4">
                      <p className="font-sans text-xs text-[#555] text-center mb-2">Selecione uma lembrança ou âncora pessoal para fortalecer você agora:</p>
                      <div className="space-y-2">
                        {STRENGTHS.map((str, sIdx) => {
                          const isSelected = selectedStrength === sIdx;
                          return (
                            <button
                              key={sIdx}
                              onClick={() => setSelectedStrength(sIdx)}
                              className={`w-full p-3 border text-left font-sans text-xs transition-colors cursor-pointer flex items-center justify-between ${
                                isSelected ? 'bg-[#F9F7F2] border-[#1A1A1A] text-[#1A1A1A] font-bold' : 'bg-white border-[#E5E1DA] text-[#555]'
                              }`}
                            >
                              <span>{str}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#1A1A1A]" />}
                            </button>
                          );
                        })}
                      </div>

                      {selectedStrength !== null && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-[#F9F7F2] border-l-2 border-[#1A1A1A] mt-4">
                          <p className="font-sans text-xs text-[#1A1A1A] leading-relaxed">
                            Sua capacidade de atravessar momentos difíceis é real e comprovada pela sua própria trajetória. Respire fundo e confie nos seus recursos.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Footer Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E5E1DA]">
                    <button onClick={() => setShowCalm(true)} className="w-full sm:w-1/2 py-2.5 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider cursor-pointer">
                      {currEx.id === 'desacelera'
                        ? 'Estou Mais Calmo'
                        : currEx.id === 'ancora'
                        ? 'Estou Mais Presente'
                        : currEx.id === 'sono'
                        ? 'Cuidar do Meu Sono'
                        : currEx.id === 'checkin'
                        ? 'Reconheci Minhas Emoções'
                        : currEx.id === 'preocupacoes'
                        ? 'Organizei Minha Mente'
                        : currEx.id === 'resolucao_problemas'
                        ? 'Plano Definido'
                        : 'Reencontrei Meus Recursos'}
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
