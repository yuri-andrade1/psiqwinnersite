import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle, MessageCircle, PenTool, User } from 'lucide-react';
import { GOOGLE_REVIEWS, DOCTOR_INFO } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(GOOGLE_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  
  // New Review Form State
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [formError, setFormError] = useState('');

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) {
      setFormError('Por favor, preencha o seu nome e o seu relato.');
      return;
    }

    const newReviewItem: Review = {
      id: `r-custom-${Date.now()}`,
      authorName: newName,
      rating: newRating,
      dateText: 'Agora mesmo',
      text: newText,
      verified: true
    };

    setReviewsList([newReviewItem, ...reviewsList]);
    setNewName('');
    setNewRating(5);
    setNewText('');
    setFormError('');
    setShowForm(false);
  };

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

        {/* Google business summary metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F9F7F2] border border-[#1A1A1A] rounded-none p-8 mb-12 editorial-shadow-dark">
          
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start lg:border-r border-[#E5E1DA] lg:pr-8">
            <div className="flex items-center space-x-1 mb-2">
              <span className="text-5xl font-display font-extrabold text-[#1A1A1A]">4.9</span>
              <span className="text-xl font-display font-medium text-[#8E8A83] mt-2">/5</span>
            </div>
            
            <div className="flex items-center mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#1A1A1A] text-[#1A1A1A]" />
              ))}
            </div>

            <a
              href={DOCTOR_INFO.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#2C3531] font-bold uppercase tracking-wider underline hover:text-[#8E8A83] transition-colors"
            >
              Ver no Google Maps
            </a>
            <p className="font-mono text-[9px] text-[#1A1A1A] font-bold bg-[#FDFCFB] border border-[#1A1A1A] px-2.5 py-1 mt-3 uppercase tracking-wider">
              Pontuação Excelente
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center py-4 lg:py-0">
            {/* Visual breakdown bars */}
            {[
              { label: '5 estrelas', pct: '92%', count: 118 },
              { label: '4 estrelas', pct: '6%', count: 8 },
              { label: '3 estrelas', pct: '1%', count: 1 },
              { label: '2 estrelas', pct: '0%', count: 0 },
              { label: '1 estrela', pct: '1%', count: 1 }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-[10px] uppercase font-sans tracking-wider text-[#2C3531] mb-2.5 last:mb-0">
                <span className="w-16 text-right font-bold">{row.label}</span>
                <div className="flex-1 h-1.5 rounded-none bg-[#E5E1DA] overflow-hidden">
                  <div className="h-full bg-[#1A1A1A]" style={{ width: row.pct }} />
                </div>
                <span className="w-6 font-mono text-[#8E8A83] text-right">{row.count}</span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 text-center lg:text-right flex flex-col items-center lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-[#E5E1DA] pt-6 lg:pt-0 lg:pl-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#FDFCFB] bg-[#1A1A1A] hover:bg-[#333] transition-colors duration-200 cursor-pointer rounded-none border border-[#1A1A1A] shadow-sm"
            >
              <PenTool className="w-3.5 h-3.5 mr-2" />
              Deixar Depoimento
            </button>
          </div>

        </div>

        {/* Interactive Add Review Form Expansion */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -15, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -15, height: 0 }}
              className="overflow-hidden bg-[#F9F7F2] border border-[#1A1A1A] rounded-none p-6 md:p-8 mb-12 editorial-shadow-dark max-w-2xl mx-auto"
            >
              <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-2">Escreva sua Avaliação</h3>
              <p className="font-sans text-xs text-[#2C3531] mb-6">
                Sua avaliação será inserida de forma interativa para simulação no site. Agradecemos o carinho!
              </p>

              <form onSubmit={handleAddReviewSubmit} className="space-y-4">
                {formError && (
                  <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-none font-sans font-semibold border border-red-200">
                    {formError}
                  </p>
                )}

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1 font-sans">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#FDFCFB] border border-[#E5E1DA] rounded-none focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1 font-sans">
                    Sua Nota (Estrelas)
                  </label>
                  <div className="flex space-x-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-5 h-5 transition-transform duration-200 ${
                            star <= newRating ? 'fill-[#1A1A1A] text-[#1A1A1A] scale-110' : 'text-[#E5E1DA]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1 font-sans">
                    Depoimento / Relato da Experiência
                  </label>
                  <textarea
                    rows={4}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Compartilhe como foi seu processo terapêutico..."
                    className="w-full px-4 py-2.5 text-xs font-sans bg-[#FDFCFB] border border-[#E5E1DA] rounded-none focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#8E8A83]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FDFCFB] bg-[#1A1A1A] hover:bg-[#333] transition-colors duration-200 rounded-none cursor-pointer"
                  >
                    Publicar Avaliação
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((review) => (
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

