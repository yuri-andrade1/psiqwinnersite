/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
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

const ArticlesPage = React.lazy(() => import('./pages/ArticlesPage'));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage'));

function HomePage() {
  return <main><Hero /><Specialties /><Credentials /><Reviews /><Articles /><InstagramVideos /><FAQ /><Contact /></main>;
}

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB] p-6 text-center">
          <div className="max-w-md">
            <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-3">Carregando conteúdos...</h2>
            <p className="font-sans text-xs text-[#2C3531] mb-6">
              Recarregue a página para atualizar as publicações.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after 500px scroll
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
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

        {/* Persistent Conversion Utilities (Floating Controls) */}
        <div className="fixed bottom-6 right-6 z-40">
          
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

        </div>
      </div>
    </ErrorBoundary>
  );
}

function RouteLoading() {
  return <main className="min-h-screen pt-32 text-center font-sans text-sm text-[#2C3531]">Carregando...</main>;
}
