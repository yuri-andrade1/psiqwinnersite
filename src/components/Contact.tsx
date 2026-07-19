import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, ArrowRight, ShieldCheck, Laptop } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Consulta Online');
  const [message, setMessage] = useState('');
  const [errorWarning, setErrorWarning] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setErrorWarning('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setErrorWarning('');

    const formattedText = `Olá, Dr. Psiwinner!\n\nMeu nome é *${name.trim()}*.\nEstou entrando em contato através do site sobre *${subject}*:\n\n"${message.trim()}"`;
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-[#F9F7F2] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 border-b border-[#E5E1DA] pb-8">
          <h2 className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">Contato & Agendamentos</h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Dê o Primeiro Passo em Direção à sua Saúde Mental
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed">
            Estou à disposição para responder dúvidas, fornecer informações sobre horários disponíveis e agendar sua sessão. Escolha o canal de sua preferência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info Cards and Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 mb-8">
              
              {/* Card Phone */}
              <div className="flex items-start p-5 rounded-none bg-[#FDFCFB] border border-[#1A1A1A] editorial-shadow">
                <div className="p-3 border border-[#1A1A1A] bg-[#F9F7F2] text-[#1A1A1A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="ml-4">
                  <h4 className="font-display font-bold text-[#1A1A1A] text-sm">Telefone / WhatsApp</h4>
                  <p className="font-sans text-[10px] text-[#8E8A83] mb-1">Dúvidas rápidas e agendamento</p>
                  <a
                    href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:underline"
                  >
                    {DOCTOR_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Card Mail */}
              <div className="flex items-start p-5 rounded-none bg-[#FDFCFB] border border-[#1A1A1A] editorial-shadow">
                <div className="p-3 border border-[#1A1A1A] bg-[#F9F7F2] text-[#1A1A1A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="ml-4">
                  <h4 className="font-display font-bold text-[#1A1A1A] text-sm">E-mail Comercial</h4>
                  <p className="font-sans text-[10px] text-[#8E8A83] mb-1">Parcerias e comunicações administrativas</p>
                  <a
                    href={`mailto:${DOCTOR_INFO.email}`}
                    className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:underline"
                  >
                    {DOCTOR_INFO.email}
                  </a>
                </div>
              </div>

              {/* Card Address */}
              <div className="flex items-start p-5 rounded-none bg-[#FDFCFB] border border-[#1A1A1A] editorial-shadow">
                <div className="p-3 border border-[#1A1A1A] bg-[#F9F7F2] text-[#1A1A1A] shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="ml-4">
                  <h4 className="font-display font-bold text-[#1A1A1A] text-sm">Modalidade de Atendimento</h4>
                  <p className="font-sans text-[10px] text-[#8E8A83] mb-1">Segurança e sigilo de forma digital</p>
                  <p className="font-sans text-xs text-[#2C3531] leading-relaxed max-w-xs font-semibold">
                    {DOCTOR_INFO.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Online Therapy Info Card */}
            <div className="flex-1 min-h-[220px] p-6 rounded-none border border-[#1A1A1A] bg-[#1A1A1A] text-[#FDFCFB] flex flex-col justify-center">
              <Laptop className="w-6 h-6 text-[#FDFCFB] mb-3" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-2">Terapia Online</h4>
              <p className="font-sans text-xs text-[#E5E1DA] leading-relaxed">
                As sessões são realizadas por videochamadas criptografadas de ponta a ponta em uma plataforma de saúde segura (em total conformidade com a LGPD e regulamentada pelo CFP), garantindo a mesma eficácia científica e sigilo do atendimento presencial.
              </p>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form compilation with WhatsApp redirect */}
          <div className="lg:col-span-7 bg-[#FDFCFB] border border-[#1A1A1A] rounded-none p-6 sm:p-10 flex flex-col justify-between editorial-shadow-dark">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="h-2 w-2 bg-[#1A1A1A]" />
                <span className="text-[10px] font-bold font-mono text-[#1A1A1A] uppercase tracking-wider">
                  Disponível para novos pacientes
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-2">Fale Comigo pelo WhatsApp</h3>
              <p className="font-sans text-xs text-[#2C3531] mb-8">
                Preencha os dados abaixo para estruturar sua mensagem. Ao enviar, você será redirecionado para o meu chat direto do WhatsApp.
              </p>

              {errorWarning && (
                <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-800 text-xs font-semibold">
                  {errorWarning}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5 font-sans">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como gostaria de ser chamado(a)?"
                    className="w-full px-4 py-3 text-xs bg-[#F9F7F2] border border-[#E5E1DA] rounded-none focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5 font-sans">
                    Assunto de Interesse *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-[#F9F7F2] border border-[#E5E1DA] rounded-none focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option value="Consulta Online">Consulta de Terapia Online</option>
                    <option value="Dúvidas Gerais">Dúvidas sobre Terapia / Abordagem</option>
                    <option value="Palestras ou Parcerias">Palestras e Projetos Corporativos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5 font-sans">
                    Sua Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva brevemente o que te traz por aqui ou quais sintomas gostaria de tratar..."
                    className="w-full px-4 py-3 text-xs bg-[#F9F7F2] border border-[#E5E1DA] rounded-none focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-all duration-300 cursor-pointer rounded-none border border-[#1A1A1A]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem pelo WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Quick trust assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-[#E5E1DA] text-[#2C3531] text-[10px] font-bold uppercase tracking-wider">
              <div className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-[#1A1A1A] mr-2 shrink-0" />
                <span>Atendimento 100% Ético e Sigiloso</span>
              </div>
              <div className="flex items-center">
                <Laptop className="w-4 h-4 text-[#1A1A1A] mr-2 shrink-0" />
                <span>Videoconferência Segura (LGPD)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info panel & copyrights */}
        <div className="mt-24 pt-12 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#8E8A83] gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-display font-bold text-[#1A1A1A] text-lg">
              psiwinner
            </span>
            <span className="font-sans font-bold uppercase tracking-widest text-[9px] text-[#2C3531]">CRP 04/62611 | Atendimento Online</span>
          </div>

          <div className="flex space-x-6">
            <a
              href={`https://instagram.com/${DOCTOR_INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-[#1A1A1A] transition-colors"
            >
              <Instagram className="w-4 h-4 mr-1.5" />
              {DOCTOR_INFO.instagram}
            </a>
          </div>

          <p className="font-sans text-center sm:text-right leading-relaxed font-semibold">
            &copy; {new Date().getFullYear()} Psiwinner Psicologia Clínica. Todos os direitos reservados.
            <br />
            <span className="text-[9px] text-[#8E8A83]">Criado profissionalmente para saúde mental.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
