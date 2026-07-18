import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Clock, Tag, MessageSquare, Share2 } from 'lucide-react';
import { Article } from '../types';
import { DOCTOR_INFO } from '../data';

interface ArticleReaderProps {
  article: Article;
  onClose: () => void;
}

export default function ArticleReader({ article, onClose }: ArticleReaderProps) {
  const [copied, setCopied] = useState(false);

  // Prevent body scrolling when reader is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleWhatsAppContact = () => {
    const customMessage = `Olá, Dr. Psiwinner! Li seu artigo "${article.title}" e me identifiquei muito com o conteúdo. Gostaria de entender mais sobre como funciona o acompanhamento terapêutico.`;
    const url = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Safe and super fast lightweight Markdown-to-JSX converter for our static articles
  const renderMarkdownToJSX = (text: string) => {
    const lines = text.split('\n');
    let inList = false;
    const elements: React.ReactNode[] = [];
    let listItems: React.ReactNode[] = [];

    const parseInlineStyles = (rawStr: string): React.ReactNode[] => {
      const parts = rawStr.split('**');
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return <strong key={index} className="font-bold text-[#1A1A1A]">{part}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine === '') {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc pl-6 space-y-2 mb-6 text-[#2C3531]">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc pl-6 space-y-2 mb-6 text-[#2C3531]">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h3 key={`h3-${index}`} className="font-display font-bold text-xl text-[#1A1A1A] mt-8 mb-4">
            {parseInlineStyles(trimmedLine.slice(4))}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        inList = true;
        listItems.push(
          <li key={`li-${index}`} className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed pl-1">
            {parseInlineStyles(trimmedLine.slice(2))}
          </li>
        );
      } else if (trimmedLine === '---') {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc pl-6 space-y-2 mb-6 text-[#2C3531]">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(<hr key={`hr-${index}`} className="my-8 border-[#E5E1DA]" />);
      } else {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc pl-6 space-y-2 mb-6 text-[#2C3531]">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={`p-${index}`} className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed mb-6">
            {parseInlineStyles(trimmedLine)}
          </p>
        );
      }
    });

    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="list-disc pl-6 space-y-2 mb-6 text-[#2C3531]">
          {listItems}
        </ul>
      );
    }

    return elements;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#1A1A1A]/60 backdrop-blur-sm flex justify-end"
    >
      {/* Click outside backdrop close helper */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Main Drawer Shell */}
      <motion.article
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
        className="relative w-full max-w-3xl bg-[#FDFCFB] border-l border-[#1A1A1A] h-full flex flex-col z-10 overflow-hidden"
      >
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1DA] sticky top-0 bg-[#FDFCFB]/95 backdrop-blur-md z-20">
          <button
            onClick={onClose}
            className="inline-flex items-center px-3 py-1.5 border border-[#1A1A1A] text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F9F7F2] transition-colors cursor-pointer rounded-none"
          >
            <X className="w-3.5 h-3.5 mr-1.5" />
            Fechar Artigo
          </button>

          <div className="flex items-center space-x-2">
            {copied && (
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#F9F7F2] px-2.5 py-1 border border-[#1A1A1A]">
                Link copiado!
              </span>
            )}
            <button
              onClick={handleShare}
              className="p-2 border border-[#E5E1DA] hover:border-[#1A1A1A] text-[#1A1A1A] bg-[#F9F7F2] transition-colors cursor-pointer rounded-none"
              title="Compartilhar Artigo"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto">
          {/* Cover Hero Image */}
          {article.image && (
            <div className="w-full h-64 sm:h-96 relative bg-[#F9F7F2] border-b border-[#E5E1DA]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block text-[9px] font-bold text-[#FDFCFB] bg-[#1A1A1A] px-2.5 py-1 rounded-none uppercase tracking-widest">
                  {article.category}
                </span>
              </div>
            </div>
          )}

          <div className="px-6 py-8 sm:px-12 sm:py-12">
            {/* Metadata bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[10px] font-mono font-bold text-[#8E8A83] mb-6 border-b border-[#E5E1DA] pb-6">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {article.readTime}
              </span>
              <span className="text-[#E5E1DA]">|</span>
              <span className="text-[#1A1A1A] uppercase tracking-wider">Por {DOCTOR_INFO.name}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt panel */}
            <p className="font-display text-base sm:text-lg font-light text-[#2C3531] leading-relaxed border-l-2 border-[#1A1A1A] pl-4 py-1 italic mb-8">
              {article.excerpt}
            </p>

            {/* Formatted Content */}
            <div className="prose prose-slate max-w-none">
              {renderMarkdownToJSX(article.content)}
            </div>

            {/* Article Tags */}
            <div className="flex flex-wrap gap-2 pt-8 mt-10 border-t border-[#E5E1DA]">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#2C3531] bg-[#F9F7F2] border border-[#E5E1DA] px-3 py-1 rounded-none"
                >
                  <Tag className="w-3 h-3 mr-1 text-[#8E8A83]" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Author box / CTA Block */}
            <div className="mt-12 bg-[#F9F7F2] rounded-none p-6 sm:p-8 border border-[#1A1A1A] flex flex-col md:flex-row gap-6 items-center">
              <img
                src="/src/assets/images/psicologo_profile_1784330612743.jpg"
                alt={DOCTOR_INFO.name}
                className="w-16 h-16 rounded-none object-cover border border-[#1A1A1A] shrink-0"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-display font-bold text-lg text-[#1A1A1A] mb-1">Ficou com alguma dúvida sobre o assunto?</h4>
                <p className="font-sans text-xs text-[#2C3531] leading-relaxed mb-4">
                  Se você se identificou com este texto ou gostaria de conversar sobre seus sintomas com o Dr. Psiwinner, agende uma sessão de forma rápida e segura.
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="inline-flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-colors duration-200 cursor-pointer rounded-none border border-[#1A1A1A]"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Conversar com Dr. Psiwinner pelo WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>

      </motion.article>
    </motion.div>
  );
}
