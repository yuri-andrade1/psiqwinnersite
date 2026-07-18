import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Formação', href: '#formacao' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Artigos', href: '#artigos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(DOCTOR_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCFB] border-b border-[#1A1A1A] py-3'
          : 'bg-[#FDFCFB]/80 backdrop-blur-md border-b border-[#E5E1DA] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <span className="font-display italic font-black text-2xl tracking-tight text-[#1A1A1A] group-hover:opacity-80 transition-opacity duration-300">
              psiwinner
            </span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-none bg-[#1A1A1A] text-[#FDFCFB] hidden sm:inline-block">
              Psicologia Clínica
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-[11px] uppercase tracking-[1.5px] font-bold text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-colors duration-200 cursor-pointer rounded-none border border-[#1A1A1A]"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A1A1A] hover:text-[#7A7A7A] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#FDFCFB] border-b border-[#1A1A1A] transition-all duration-300 shadow-lg ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs uppercase tracking-wider font-bold text-[#1A1A1A] hover:text-[#7A7A7A] py-1 border-b border-dashed border-[#E5E1DA]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              handleWhatsAppClick();
            }}
            className="w-full inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-colors duration-200 rounded-none"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Agendar por WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
}

