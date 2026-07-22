import React from 'react';
import { motion } from 'motion/react';
import { Play, Instagram, ArrowRight, Eye } from 'lucide-react';
import profileImage from '../assets/images/psicologo_profile.jpg';

export interface InstagramVideo {
  id: string;
  title: string;
  url: string;
  coverImage: string;
}

export const INSTAGRAM_VIDEOS: InstagramVideo[] = [
  {
    id: 'v1',
    title: 'O amor é construído nos pequenos detalhes diários',
    url: 'https://www.instagram.com/reel/DYvEGVMB7yP/?igsh=MWxmNXR1YnJsaXRkcw==',
    coverImage: profileImage
  },
  {
    id: 'v2',
    title: 'Apego Ansioso vs. Apego Evitativo nas relações',
    url: 'https://www.instagram.com/reel/DY7V_l_FyoE/?igsh=czgwc3A0NXIyZHNo',
    coverImage: profileImage
  },
  {
    id: 'v3',
    title: 'Os 4 Cavaleiros do Apocalipse das relações (John Gottman)',
    url: 'https://www.instagram.com/reel/DXEXTEODtxL/?igsh=bjFqcWRwOXNoNThs',
    coverImage: profileImage
  },
  {
    id: 'v4',
    title: 'Você já ouviu falar deste transtorno de personalidade?',
    url: 'https://www.instagram.com/reel/Daliw1aPrOL/?igsh=N25ya2dyMmJ6NWFq',
    coverImage: profileImage
  },
  {
    id: 'v5',
    title: 'O Efeito Michelangelo: Relações que nos esculpem',
    url: 'https://www.instagram.com/reel/DZIQPl0ulYg/?igsh=MWlhczllZDFtMHh6dg==',
    coverImage: profileImage
  },
  {
    id: 'v6',
    title: 'Relações em aberto: O perigo de viver em modo espera',
    url: 'https://www.instagram.com/reel/DYQMyyHNBeV/?igsh=MW1pNTkwbWNlNGpu',
    coverImage: profileImage
  },
  {
    id: 'v7',
    title: 'Como construir e manter amizades na vida adulta',
    url: 'https://www.instagram.com/reel/DX-Jw8MMUPR/?igsh=bmhxYnE1cGR4MXZn',
    coverImage: profileImage
  }
];

export default function InstagramVideos() {
  return (
    <section className="py-24 bg-[#FDFCFB] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 border-b border-[#E5E1DA] pb-8">
          <h2 className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">Dicas & Vídeos Rápidos</h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Pílulas de Conhecimento no Instagram
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed">
            Acompanhe insights práticos e reflexões diárias sobre saúde mental, bem-estar e psicologia baseada em evidências em formato de Reels.
          </p>
        </div>

        {/* Horizontal Reels Container (Scrollable on Mobile, Grid on Desktop) */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-thin md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-x-visible md:pb-0">
          {INSTAGRAM_VIDEOS.map((video) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="snap-start shrink-0 w-[240px] md:w-auto aspect-[9/16] relative bg-slate-900 border border-[#1A1A1A] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Cover Image */}
              <img
                src={video.coverImage}
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FDFCFB]/90 text-[#1A1A1A] border border-[#1A1A1A] group-hover:scale-110 group-hover:bg-[#1A1A1A] group-hover:text-[#FDFCFB] transition-all duration-300 shadow-md">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </span>
              </div>

              {/* Reel Info (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
                <span className="inline-flex items-center text-[8px] font-bold uppercase tracking-widest text-[#F9F7F2] bg-[#1A1A1A]/60 px-2 py-0.5 rounded-none self-start mb-2">
                  <Instagram className="w-3.5 h-3.5 mr-1" />
                  Reels
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug mb-3 text-shadow-sm">
                  {video.title}
                </h4>
                <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-wider text-[#FDFCFB] group-hover:underline">
                  Assistir Vídeo <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://instagram.com/psiwinner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-all duration-300 rounded-none border border-[#1A1A1A]"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Seguir @psiwinner no Instagram
          </motion.a>
        </div>

      </div>
    </section>
  );
}
