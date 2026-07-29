import React from 'react';
import { Heart, Anchor, Smile, ShieldCheck, Brain, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXERCISES_PREVIEW = [
  { title: 'Respiração Guiada', subtitle: 'Ritmo 4-7-8', icon: Heart, badge: 'Destaque' },
  { title: 'Aterramento no Presente', subtitle: 'Conexão 5-4-3-2-1', icon: Anchor, badge: 'Acalmar' },
  { title: 'Organizando as Preocupações', subtitle: 'Resolução TCC', icon: Brain, badge: 'Organizar' },
  { title: 'Check-in Emocional', subtitle: 'Consciência & Acolhimento', icon: Smile, badge: 'Autocuidado' },
];

export default function InteractiveExercises() {
  return (
    <section id="exercicios" className="py-20 bg-[#FDFCFB] text-[#1A1A1A] border-b border-[#E5E1DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#E5E1DA] pb-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8E8A83] block mb-2">
              PAUSA &amp; CUIDADO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              Práticas Guiadas para Momentos de Tensão
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/exercicios"
              className="inline-flex items-center px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#333] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Acessar Espaço de Exercícios</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Cards Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXERCISES_PREVIEW.map((ex) => {
            const Icon = ex.icon;
            return (
              <Link
                key={ex.title}
                to="/exercicios"
                className="bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] p-5 flex flex-col justify-between transition-all group cursor-pointer shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#F9F7F2] border border-[#E5E1DA]">
                      <Icon className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase text-[#8E8A83] bg-[#F9F7F2] px-2 py-0.5 border border-[#E5E1DA]">
                      {ex.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-0.5">{ex.title}</h3>
                  <p className="font-sans text-xs text-[#8E8A83] font-semibold mb-4">{ex.subtitle}</p>
                </div>

                <div className="pt-3 border-t border-[#E5E1DA] flex items-center justify-between text-[11px] font-bold text-[#8E8A83] group-hover:text-[#1A1A1A] transition-colors">
                  <span>Iniciar Prática</span>
                  <Play className="w-3 h-3 text-[#1A1A1A] fill-current" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
