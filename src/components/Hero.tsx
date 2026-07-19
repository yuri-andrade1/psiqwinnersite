import React from 'react';
import { motion, type Variants } from 'motion/react';
import { MessageSquare, ShieldCheck, Globe, Laptop, Sparkles } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(DOCTOR_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FDFCFB] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Decorative Line / Date / Issue Info */}
        <div className="flex justify-between items-center border-b border-[#1A1A1A] pb-3 mb-10 text-[10px] font-sans font-bold uppercase tracking-widest text-[#8E8A83]">
          <span>Especialista em Saúde Mental</span>
          <span className="hidden sm:inline">Atendimento 100% Online — Todo o Brasil e Exterior</span>
          <span>Edição de {new Date().getFullYear()}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Text Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag/Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 self-start px-3 py-1.5 bg-[#F9F7F2] border border-[#1A1A1A] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-sans text-[#1A1A1A]">
                Psicologia Baseada em Evidências
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display italic font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Caminhos para <span className="font-bold font-display not-italic">reconquistar</span> o seu equilíbrio e bem-estar mental.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base text-[#2C3531] leading-relaxed max-w-2xl mb-8"
            >
              {DOCTOR_INFO.shortBio} No consultório de <strong className="text-[#1A1A1A] font-semibold">{DOCTOR_INFO.name}</strong>, você encontrará um ambiente acolhedor, seguro e totalmente confidencial para trilhar a sua jornada de autotransformação.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1A1A] hover:bg-[#333] cursor-pointer transition-all duration-200 rounded-none border border-[#1A1A1A] editorial-shadow-dark"
              >
                <MessageSquare className="w-4 h-4 mr-3 animate-pulse" />
                Agendar por WhatsApp
              </button>
              
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] bg-[#FDFCFB] border border-[#1A1A1A] hover:bg-[#F9F7F2] transition-colors duration-200 rounded-none"
              >
                Conhecer Especialidades
              </a>
            </motion.div>

            {/* Key Service Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#1A1A1A]">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#F9F7F2] border border-[#1A1A1A] text-[#1A1A1A] shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A] uppercase tracking-wider">Atendimento Online</h4>
                  <p className="font-sans text-xs text-[#8E8A83] mt-0.5">Para brasileiros em qualquer lugar do Brasil e no exterior</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#F9F7F2] border border-[#1A1A1A] text-[#1A1A1A] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A] uppercase tracking-wider">Público Atendido</h4>
                  <p className="font-sans text-xs text-[#8E8A83] mt-0.5">Adultos maiores de 18 anos e público LGBTQIA+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="relative w-full max-w-[400px] aspect-square lg:max-w-none lg:aspect-[4/5] overflow-hidden bg-[#F9F7F2] border border-[#1A1A1A] editorial-shadow-dark group"
            >
              {/* Profile Image with fallback */}
              <img
                id="hero-profile-image"
                src="/src/assets/images/psicologo_profile.jpg"
                alt="Retrato profissional de Winner Furtado"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800";
                }}
              />

              {/* Verified Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FDFCFB]/95 backdrop-blur-sm border border-[#1A1A1A] flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-[#1A1A1A] text-base">{DOCTOR_INFO.name}</p>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#8E8A83] mt-0.5">Psicólogo Clínico Sênior</p>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1.5 bg-[#F9F7F2] text-[#1A1A1A] border border-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1A1A1A] mr-0.5" />
                  <span>CRP Ativo</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}
