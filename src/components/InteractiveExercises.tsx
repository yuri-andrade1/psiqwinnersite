import React from 'react';
import { Wind, Anchor, Brain, Moon, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXERCISES_PREVIEW = [
  { title: 'Desacelera', subtitle: 'Respiração Guiada 4-7-8', icon: Wind, badge: 'Ansiedade' },
  { title: 'Âncora de Emergência', subtitle: 'Técnica 5-4-3-2-1', icon: Anchor, badge: 'Pânico' },
  { title: 'Reorganizador TCC', subtitle: 'Descompressão Mental', icon: Brain, badge: 'Foco' },
  { title: 'Durmazen', subtitle: 'Relaxamento para o Sono', icon: Moon, badge: 'Sono' },
];

export default function InteractiveExercises() {
  return (
    <section id="exercicios" className="py-20 bg-[#1A1A1A] text-[#FDFCFB] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#333] pb-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center text-[10px] font-sans font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 border border-[#C5A059]/20 mb-3">
              <Sparkles className="w-3 h-3 mr-1.5" /> Espaço de Autorregulação Emocional
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#FDFCFB] tracking-tight">
              Exercícios &amp; Ferramentas Práticas
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/exercicios"
              className="inline-flex items-center px-5 py-2.5 bg-[#C5A059] hover:bg-[#b08d4a] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Acessar Portal de Exercícios</span>
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
                className="bg-[#242424] border border-[#333] hover:border-[#C5A059] p-5 flex flex-col justify-between transition-colors group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#1A1A1A] border border-[#333] group-hover:border-[#C5A059]">
                      <Icon className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase text-[#8E8A83] bg-[#1A1A1A] px-2 py-0.5 border border-[#333]">
                      {ex.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#FDFCFB] mb-0.5">{ex.title}</h3>
                  <p className="font-sans text-xs text-[#C5A059] font-semibold mb-4">{ex.subtitle}</p>
                </div>

                <div className="pt-3 border-t border-[#333] flex items-center justify-between text-[11px] font-bold text-[#8E8A83] group-hover:text-[#FDFCFB] transition-colors">
                  <span>Experimentar Exercício</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
