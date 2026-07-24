import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, ArrowRight, BookOpen, Clock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data';
import { Article } from '../types';
import ArticleReader from './ArticleReader';
import { isSanityConfigured, POST_LIST_QUERY, sanityClient, sanityImageUrl, type SanityPost } from '../lib/sanity';

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [sanityPosts, setSanityPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sanityClient) {
      setLoading(false);
      return;
    }
    sanityClient
      .fetch<SanityPost[]>(POST_LIST_QUERY)
      .then((posts) => {
        setSanityPosts(posts);
      })
      .catch((err) => {
        console.error('Erro ao buscar artigos do Sanity na home:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(dateStr));
    } catch {
      return dateStr;
    }
  };

  const mappedSanityPosts = useMemo(() => {
    if (!Array.isArray(sanityPosts)) return [];
    return sanityPosts.map((post) => {
      const title = post?.title || 'Sem título';
      const slug = typeof post?.slug === 'string' ? post.slug : (post?.slug?.current || '');
      const excerpt = post?.excerpt || '';
      const category = post?.category || 'Geral';
      const tags = Array.isArray(post?.tags) ? post.tags : [];
      
      const wordCount = excerpt ? excerpt.split(/\s+/).length : 0;
      const readTimeMinutes = Math.max(2, Math.ceil(wordCount / 150));
      
      return {
        id: post?._id || Math.random().toString(),
        title,
        slug,
        excerpt,
        content: '',
        category,
        readTime: `${readTimeMinutes} min de leitura`,
        date: formatDate(post?.publishedAt),
        image: sanityImageUrl(post?.coverImage),
        tags,
        isSanity: true
      };
    });
  }, [sanityPosts]);

  const activeArticles = useMemo(() => {
    if (isSanityConfigured) {
      return mappedSanityPosts;
    }
    return ARTICLES;
  }, [isSanityConfigured, mappedSanityPosts]);

  const categories = useMemo(() => {
    const list = new Set(activeArticles.map((art) => art?.category || 'Geral'));
    return ['Todos', ...Array.from(list)];
  }, [activeArticles]);

  const filteredArticles = useMemo(() => {
    const term = (searchTerm || '').toLowerCase();
    return activeArticles.filter((art) => {
      if (!art) return false;
      const titleStr = (art.title || '').toLowerCase();
      const excerptStr = (art.excerpt || '').toLowerCase();
      const tagsList = Array.isArray(art.tags) ? art.tags : [];
      
      const matchesSearch =
        titleStr.includes(term) ||
        excerptStr.includes(term) ||
        tagsList.some((t) => typeof t === 'string' && t.toLowerCase().includes(term));
      
      const matchesCategory =
        selectedCategory === 'Todos' || art.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeArticles, searchTerm, selectedCategory]);

  // Display top 3 filtered articles on home page if using Sanity
  const displayedArticles = useMemo(() => {
    if (isSanityConfigured && sanityPosts.length > 0) {
      return filteredArticles.slice(0, 3);
    }
    return filteredArticles;
  }, [filteredArticles, isSanityConfigured, sanityPosts]);

  return (
    <section id="artigos" className="py-24 bg-[#F9F7F2] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1A1A1A] pb-6">
          <div className="max-w-xl">
            <h2 className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">Artigos & Leituras</h2>
            <p className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              Artigos Informativos e Dicas de Saúde Mental
            </p>
          </div>
          <p className="font-sans text-xs text-[#2C3531] max-w-sm mt-4 md:mt-0 leading-relaxed">
            Escritos pelo Psicólogo Winner Furtado com o objetivo de descomplicar conceitos da psicologia e trazer dicas práticas para o seu bem-estar diário.
          </p>
        </div>

        {activeArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#FDFCFB] border border-dashed border-[#1A1A1A] rounded-none max-w-xl mx-auto p-8 shadow-sm">
            <BookOpen className="w-8 h-8 mx-auto text-[#8E8A83] mb-4" />
            <h3 className="font-display font-bold text-[#1A1A1A] text-lg mb-2">Os artigos estarão disponíveis em breve</h3>
            <p className="font-sans text-xs text-[#2C3531] leading-relaxed max-w-md mx-auto mb-6">
              O Psicólogo Winner Furtado está preparando conteúdos e reflexões especiais sobre saúde mental, psicologia baseada em evidências e relacionamentos. Acompanhe as redes sociais para as novidades!
            </p>
            <a
              href="https://instagram.com/psiwinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#333] transition-colors rounded-none cursor-pointer"
            >
              Seguir no Instagram
            </a>
          </div>
        ) : (
          <>
            {/* Filter and Search Bar Block */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-[#FDFCFB] border border-[#1A1A1A] p-4 mb-10">
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-bold font-sans text-[#1A1A1A] uppercase tracking-wider flex items-center mr-2">
                  <Filter className="w-3 h-3 mr-1" />
                  Filtrar por:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-none border transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#1A1A1A] text-[#FDFCFB] border-[#1A1A1A]'
                        : 'text-[#1A1A1A] bg-[#F9F7F2] border-[#E5E1DA] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input field */}
              <div className="relative w-full md:max-w-xs">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#1A1A1A]">
                  <Search className="w-3.5 h-3.5" />
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por temas ou palavras..."
                  className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-[#F9F7F2] border border-[#E5E1DA] rounded-none focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>

            </div>

            {/* Empty state visual */}
            {displayedArticles.length === 0 && (
              <div className="text-center py-16 bg-[#FDFCFB] border border-dashed border-[#1A1A1A] rounded-none max-w-lg mx-auto">
                <BookOpen className="w-8 h-8 mx-auto text-[#8E8A83] mb-3" />
                <p className="font-display font-bold text-[#1A1A1A] text-base mb-1">Nenhum artigo encontrado</p>
                <p className="font-sans text-xs text-[#2C3531]">
                  Tente redefinir o termo de pesquisa ou selecionar outra categoria.
                </p>
              </div>
            )}

            {/* Articles List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((art) => {
                const isSanity = 'isSanity' in art && art.isSanity;
                const CardComponent = (isSanity ? Link : 'div') as React.ElementType;
                const cardProps = isSanity
                  ? { to: `/artigos/${art.slug}` }
                  : { onClick: () => setSelectedArticle(art as Article) };

                return (
                  <CardComponent
                    key={art.id}
                    {...cardProps}
                    className="flex flex-col bg-[#FDFCFB] border border-[#E5E1DA] hover:border-[#1A1A1A] rounded-none overflow-hidden transition-all duration-300 cursor-pointer group editorial-shadow"
                    id={`article-card-${art.id}`}
                  >
                    {/* Cover Image */}
                    {art.image && (
                      <div className="aspect-[16/10] overflow-hidden bg-[#F9F7F2] relative border-b border-[#E5E1DA]">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block text-[9px] font-bold text-[#FDFCFB] bg-[#1A1A1A] px-2.5 py-1 rounded-none uppercase tracking-widest">
                            {art.category}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Text Summary Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Date and time read */}
                        <div className="flex items-center space-x-3 text-[10px] font-mono font-bold text-[#8E8A83] mb-3">
                          <span>{art.date}</span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {art.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#8E8A83] transition-colors duration-200 leading-snug line-clamp-2">
                          {art.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="font-sans text-xs text-[#2C3531] leading-relaxed mb-4 line-clamp-3">
                          {art.excerpt}
                        </p>
                      </div>

                      {/* Footer read link */}
                      <div className="pt-4 border-t border-[#E5E1DA] flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] inline-flex items-center">
                          Ler artigo completo
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </span>
                      </div>
                    </div>
                  </CardComponent>
                );
              })}
            </div>

            {/* View all articles CTA button when using Sanity */}
            {isSanityConfigured && sanityPosts.length > 0 && (
              <div className="text-center mt-12">
                <Link
                  to="/artigos"
                  className="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FDFCFB] transition-colors duration-200 rounded-none cursor-pointer"
                >
                  Ver todos os artigos
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            )}
          </>
        )}


      </div>

      {/* Slide-over article reader overlay animation */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleReader
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}

