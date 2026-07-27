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
import InteractiveExercises from './components/InteractiveExercises';

const ArticlesPage = React.lazy(() => import('./pages/ArticlesPage'));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage'));
const ExercisesPage = React.lazy(() => import('./pages/ExercisesPage'));

function HomePage() {
  return <main><Hero /><Specialties /><InteractiveExercises /><Credentials /><Reviews /><Articles /><InstagramVideos /><FAQ /><Contact /></main>;
}

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean; errorText: string}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, errorText: '' };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, errorText: error instanceof Error ? error.message : String(error) };
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center bg-[#FDFCFB]">
          <div className="max-w-md bg-white border border-[#E5E1DA] p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-2">Ops! Ocorreu um problema ao carregar esta seção.</h2>
            <p className="font-sans text-xs text-[#8E8A83] mb-4 break-words">{this.state.errorText}</p>
            <button
              onClick={() => { this.setState({ hasError: false, errorText: '' }); window.location.reload(); }}
              className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#333] transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function RouteLoading() {
  return <div className="min-h-[60vh] flex items-center justify-center font-sans text-sm text-[#8E8A83]">Carregando conteúdo...</div>;
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after 500px scroll
      setShowScrollTop(window.scrollY > 500);

      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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
      "alternateName": "Dr. Winner Furtado",
      "image": "https://www.psiwinner.com.br/assets/psicologo_profile-CDsojBIy.jpg",
      "@id": "https://www.psiwinner.com.br/#medicalbusiness",
      "url": "https://www.psiwinner.com.br",
      "telephone": "+5535984434572",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Antônio Scodeler, 3475 - Bella Italia",
        "addressLocality": "Pouso Alegre",
        "addressRegion": "MG",
        "postalCode": "37550-000",
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
    <div className="min-h-screen bg-brand-bg text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Dynamic Header / Navigation */}
      <Navbar />

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercicios" element={<React.Suspense fallback={<RouteLoading />}><ExercisesPage /></React.Suspense>} />
          <Route path="/artigos" element={<React.Suspense fallback={<RouteLoading />}><ArticlesPage /></React.Suspense>} />
          <Route path="/artigos/:slug" element={<React.Suspense fallback={<RouteLoading />}><ArticlePage /></React.Suspense>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>

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
  );
}
