import React from 'react';
import { Star, CheckCircle, MessageCircle, User } from 'lucide-react';
import { GOOGLE_REVIEWS, DOCTOR_INFO } from '../data';
import { Review } from '../types';

export default function Reviews() {

  return (
    <section id="avaliacoes" className="py-24 bg-[#FDFCFB] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">Opinião de Pacientes</h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Avaliações e Relatos de Quem já Iniciou o Processo
          </p>
          <div className="w-16 h-0.5 bg-[#1A1A1A] mx-auto mb-6"></div>
          <p className="font-sans text-xs text-[#2C3531] leading-relaxed">
            A ética profissional e o bem-estar dos pacientes são nossa prioridade. Confira depoimentos reais deixados de forma espontânea na plataforma Google Business.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between bg-[#F9F7F2] border border-[#E5E1DA] hover:border-[#1A1A1A] rounded-none p-6 transition-all duration-300 editorial-shadow"
              id={`review-card-${review.id}`}
            >
              {/* Review Text Area */}
              <div>
                {/* Header info */}
                <div className="flex items-center space-x-3 mb-4 border-b border-[#E5E1DA] pb-3">
                  {review.authorAvatar ? (
                    <img
                      src={review.authorAvatar}
                      alt={review.authorName}
                      className="w-8 h-8 rounded-none object-cover border border-[#1A1A1A]"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-none bg-[#FDFCFB] flex items-center justify-center text-[#1A1A1A] border border-[#1A1A1A]">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#1A1A1A]">{review.authorName}</h4>
                    <div className="flex items-center space-x-1.5 mt-0.5">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-3 h-3 ${
                              idx < review.rating ? 'fill-[#1A1A1A] text-[#1A1A1A]' : 'text-[#E5E1DA]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono text-[#8E8A83] font-bold">{review.dateText}</span>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-[#2C3531] text-xs leading-relaxed italic mb-4">
                  "{review.text}"
                </p>
              </div>

              {/* Verified badge & response */}
              <div className="border-t border-[#E5E1DA] pt-4 mt-2">
                <div className="flex items-center justify-between text-[#8E8A83] text-[9px] mb-3">
                  <div className="flex items-center text-[#1A1A1A] font-bold bg-[#FDFCFB] border border-[#1A1A1A] px-2 py-0.5 rounded-none">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Avaliação Verificada
                  </div>
                  <a
                    href={DOCTOR_INFO.googleProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono uppercase tracking-wider font-bold hover:underline hover:text-[#1A1A1A] transition-colors"
                  >
                    Google Maps
                  </a>
                </div>

                {review.response && (
                  <div className="bg-[#FDFCFB] rounded-none p-3 border border-[#E5E1DA] mt-2">
                    <div className="flex items-center space-x-1 text-[#1A1A1A] font-sans font-bold text-[10px] uppercase tracking-wider mb-1">
                      <MessageCircle className="w-3 h-3 text-[#1A1A1A]" />
                      <span>Resposta do {DOCTOR_INFO.name}:</span>
                    </div>
                    <p className="font-sans text-[11px] text-[#2C3531] leading-relaxed italic">
                      "{review.response}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

