import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { CREDENTIALS, DOCTOR_INFO } from '../data';

export default function Credentials() {
  // Separate credentials by category
  const mainCredentials = CREDENTIALS.filter(c => c.category === 'graduacao' || c.category === 'pos');
  const additionalFormations = CREDENTIALS.filter(c => c.category === 'formacao' || c.id === 'c7' || c.id === 'c8');
  const professionalExperience = CREDENTIALS.filter(c => c.category === 'experiencia' || c.category === 'associacao');

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
                <p className="font-display font-bold text-xl text-[#1A1A1A]">PBE</p>
                <p className="font-sans text-[9px] text-[#8E8A83] uppercase tracking-wider font-bold mt-1">Ciência Clínica</p>
              </div>
              <div className="text-center p-3 rounded-none bg-[#F9F7F2] border border-[#E5E1DA]">
                <p className="font-display font-bold text-xl text-[#1A1A1A]">Online</p>
                <p className="font-sans text-[9px] text-[#8E8A83] uppercase tracking-wider font-bold mt-1">Sem Fronteiras</p>
              </div>
              <div className="text-center p-3 rounded-none bg-[#F9F7F2] border border-[#E5E1DA]">
                <p className="font-display font-bold text-xl text-[#1A1A1A]">100%</p>
                <p className="font-sans text-[9px] text-[#8E8A83] uppercase tracking-wider font-bold mt-1">Ética & Sigilo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Categorized credentials grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Category 1: Formação Principal & Pós-Graduações */}
            <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-6 sm:p-8 rounded-none editorial-shadow transition-all duration-300 hover:border-[#1A1A1A]/80">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-[#E5E1DA]">
                <GraduationCap className="w-5 h-5 text-[#1A1A1A]" />
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">Formação Acadêmica & Pós-Graduações</h4>
              </div>
              <ul className="space-y-5">
                {mainCredentials.map((cred) => (
                  <li key={cred.id} className="flex items-start space-x-3.5">
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-[#1A1A1A] rounded-none rotate-45" />
                    <div>
                      <h5 className="font-sans font-bold text-sm text-[#1A1A1A] leading-tight">
                        {cred.degree} {cred.id === 'c4' && <span className="text-[10px] text-[#8E8A83] font-normal italic">(Cursando)</span>}
                      </h5>
                      <p className="font-sans text-xs text-[#8E8A83] mt-1 font-semibold">{cred.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: Formações Complementares */}
            <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-6 sm:p-8 rounded-none editorial-shadow transition-all duration-300 hover:border-[#1A1A1A]/80">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-[#E5E1DA]">
                <BookOpen className="w-5 h-5 text-[#1A1A1A]" />
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">Cursos de Formação Complementar</h4>
              </div>
              <ul className="space-y-5">
                {additionalFormations.map((cred) => (
                  <li key={cred.id} className="flex items-start space-x-3.5">
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-[#1A1A1A] rounded-none rotate-45" />
                    <div>
                      <h5 className="font-sans font-bold text-sm text-[#1A1A1A] leading-tight">{cred.degree}</h5>
                      <p className="font-sans text-xs text-[#8E8A83] mt-1 font-semibold">{cred.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: Registro & Atuação */}
            <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-6 sm:p-8 rounded-none editorial-shadow transition-all duration-300 hover:border-[#1A1A1A]/80">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-[#E5E1DA]">
                <Award className="w-5 h-5 text-[#1A1A1A]" />
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">Registro Profissional & Atuação</h4>
              </div>
              <ul className="space-y-5">
                {professionalExperience.map((cred) => (
                  <li key={cred.id} className="flex items-start space-x-3.5">
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-[#1A1A1A] rounded-none rotate-45" />
                    <div>
                      <h5 className="font-sans font-bold text-sm text-[#1A1A1A] leading-tight">{cred.degree}</h5>
                      <p className="font-sans text-xs text-[#8E8A83] mt-1 font-semibold">{cred.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

