/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DOCTOR_INFO } from './data';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Credentials from './components/Credentials';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import InstagramVideos from './components/InstagramVideos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PrivacyModal from './components/PrivacyModal';
import CookieConsent from './components/CookieConsent';

const ArticlesPage = React.lazy(() => import('./pages/ArticlesPage'));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage'));

function HomePage() {
  return <main><Hero /><Specialties /><Credentials /><Reviews /><Articles /><InstagramVideos /><FAQ /><Contact /></main>;
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFloatBadge, setShowFloatBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after 500px scroll
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Show floating WhatsApp help badge after 4 seconds
    const badgeTimer = setTimeout(() => {
      setShowFloatBadge(true);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(badgeTimer);
    };
  }, []);

  useEffect(() => {
    const schemaId = 'institutional-clinic-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Winner Furtado Psicologia Clínica",
      "alternateName": "Winner Furtado",
      "image": "https://psiqwinnersite.vercel.app/src/assets/images/psicologo_profile_1784330612743.jpg",
      "@id": "https://psiqwinnersite.vercel.app/#medicalbusiness",
      "url": "https://psiqwinnersite.vercel.app",
      "telephone": "+5535984434572",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Minas Gerais",
        "addressRegion": "MG",
        "addressCountry": "BR"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      },
      "medicalSpecialty": [
        "Psychiatric",
        "MentalHealth"
      ],
      "knowsAbout": [
        "Terapia Cognitivo-Comportamental",
        "Tratamento de Ansiedade",
        "Dependência Emocional",
        "Autoestima e Autocuidado",
        "Regulação Emocional",
        "Desenvolvimento Pessoal",
        "Emagrecimento e Hábitos",
        "Transtornos Mentais"
      ]
    };

    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      scriptTag.remove();
    };
  }, []);

  const handleWhatsAppFloatClick = () => {
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(DOCTOR_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Dynamic Header / Navigation */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artigos" element={<React.Suspense fallback={<RouteLoading />}><ArticlesPage /></React.Suspense>} />
        <Route path="/artigos/:slug" element={<React.Suspense fallback={<RouteLoading />}><ArticlePage /></React.Suspense>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <PrivacyModal />
      <CookieConsent />

      {/* Persistent Conversion Utilities (Floating Controls) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        
        {/* Delayed Floating WhatsApp Help Badge */}
        <AnimatePresence>
          {showFloatBadge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="hidden sm:flex items-center space-x-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl border border-slate-800"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Olá! Dúvidas? Fale comigo agora.</span>
              <button 
                onClick={() => setShowFloatBadge(false)}
                className="ml-2 font-bold hover:text-red-400 focus:outline-none"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex space-x-3 items-center">
          {/* Scroll back to top circular key */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={scrollToTop}
                className="p-3 bg-white hover:bg-slate-50 text-slate-600 rounded-full shadow-lg border border-slate-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-secondary/30"
                aria-label="Voltar ao Topo"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Floating Therapeutic Pulsing WhatsApp Trigger */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppFloatClick}
            className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all cursor-pointer relative group focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            aria-label="Contato direto WhatsApp"
          >
            {/* Pulsing ring indicator */}
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:hidden" />
            <MessageSquare className="w-6 h-6 relative z-10" />
          </motion.button>
        </div>

      </div>
    </div>
  );
}

function RouteLoading() {
  return <main className="min-h-screen pt-32 text-center font-sans text-sm text-[#2C3531]">Carregando...</main>;
}
