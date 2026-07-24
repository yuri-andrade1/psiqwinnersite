import {useEffect, useState} from 'react';
import {PortableText, type PortableTextComponents} from '@portabletext/react';
import {ArrowLeft, Calendar, UserRound, Tag, Home} from 'lucide-react';
import {Link, useParams} from 'react-router-dom';
import {POST_BY_SLUG_QUERY, sanityClient, sanityImageUrl, type SanityPost} from '../lib/sanity';

const formatDate = (dateStr: string) => {
  try {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) return dateStr || '';
    return new Intl.DateTimeFormat('pt-BR', {dateStyle: 'long'}).format(dateObj);
  } catch {
    return dateStr || '';
  }
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({value}) => {
      const imageUrl = sanityImageUrl(value);
      return imageUrl ? (
        <figure className="my-8">
          <img src={imageUrl} alt={value.alt || ''} className="w-full rounded-none border border-[#E5E1DA]" />
          {value.alt && <figcaption className="text-center text-[11px] font-sans text-[#8E8A83] mt-2 leading-relaxed">{value.alt}</figcaption>}
        </figure>
      ) : null;
    }
  },
  marks: {
    link: ({value, children}) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http') || href.startsWith('https');
      return (
        <a 
          href={href} 
          target={isExternal ? '_blank' : undefined} 
          rel={isExternal ? 'noopener noreferrer' : undefined} 
          className="underline font-semibold hover:text-[#8E8A83] transition-colors"
        >
          {children}
        </a>
      );
    }
  },
  block: {
    h2: ({children}) => <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mt-10 mb-4 leading-tight">{children}</h2>,
    h3: ({children}) => <h3 className="font-display font-bold text-xl text-[#1A1A1A] mt-8 mb-3 leading-tight">{children}</h3>,
    normal: ({children}) => <p className="mb-6 font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed">{children}</p>,
    blockquote: ({children}) => <blockquote className="border-l-2 border-[#1A1A1A] pl-4 italic my-6 text-[#2C3531]">{children}</blockquote>
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 space-y-2 mb-6 text-[#2C3531]">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-[#2C3531]">{children}</ol>
  },
  listItem: {
    bullet: ({children}) => <li className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed">{children}</li>,
    number: ({children}) => <li className="font-sans text-xs sm:text-sm text-[#2C3531] leading-relaxed">{children}</li>
  }
};

export default function ArticlePage() {
  const {slug} = useParams();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sanityClient || !slug) {
      setLoading(false);
      return;
    }
    sanityClient
      .fetch<SanityPost | null>(POST_BY_SLUG_QUERY, {slug})
      .then(setPost)
      .finally(() => setLoading(false));
  }, [slug]);

  const imageUrl = post ? sanityImageUrl(post.coverImage) : undefined;

  useEffect(() => {
    if (!post) return;
    
    // Save original tags to restore on unmount
    const originalTitle = document.title;
    const originalDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    
    // Update basic tags
    document.title = `${post.title} | Artigo - Psicólogo Winner Furtado`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt || 'Artigo informativo sobre psicologia e saúde mental.');
    
    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', post.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', post.excerpt || '');
    if (imageUrl) {
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl);
    }
    
    // Inject JSON-LD Schema.org Structured Data
    const schemaId = 'sanity-post-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || '',
      "image": imageUrl || '',
      "datePublished": post.publishedAt,
      "dateModified": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author || "Winner Furtado",
        "jobTitle": "Psicólogo Clínico"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Psiwinner Psicologia Clínica",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/favicon.svg`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
    scriptTag.text = JSON.stringify(schemaData);
    
    return () => {
      // Restore original metadata and clean up schema
      document.title = originalTitle;
      document.querySelector('meta[name="description"]')?.setAttribute('content', originalDesc);
      scriptTag.remove();
    };
  }, [post, imageUrl]);

  if (loading) return <main className="min-h-screen pt-32 text-center font-sans text-sm text-[#2C3531]">Carregando artigo...</main>;
  if (!post) {
    return (
      <main className="min-h-screen pt-32 px-4 text-center">
        <h1 className="font-display font-bold text-3xl text-[#1A1A1A] mb-4">Artigo não encontrado</h1>
        <Link to="/artigos" className="font-sans text-sm underline">Voltar para artigos</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-28 pb-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center space-x-3 mb-10">
          <Link to="/" className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83] border border-[#1A1A1A] px-3 py-1.5 transition-colors">
            <Home className="w-3.5 h-3.5 mr-1.5" />
            Início
          </Link>
          <span className="text-[#8E8A83] text-xs">/</span>
          <Link to="/artigos" className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83]">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            Todos os artigos
          </Link>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap gap-4 border-b border-[#E5E1DA] pb-5 mb-6 text-[10px] font-mono font-bold text-[#8E8A83]">
          <span className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {formatDate(post.publishedAt)}
          </span>
          {post.author && (
            <span className="flex items-center">
              <UserRound className="w-3.5 h-3.5 mr-1.5" />
              {post.author}
            </span>
          )}
          {post.category && (
            <span className="flex items-center text-[#1A1A1A] uppercase tracking-wider bg-[#F9F7F2] px-2 py-0.5 border border-[#E5E1DA]">
              {post.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="font-display text-lg italic leading-relaxed text-[#2C3531] border-l-2 border-[#1A1A1A] pl-4 mb-10">
            {post.excerpt}
          </p>
        )}

        {/* Cover Image or Editorial Header if no image */}
        {imageUrl ? (
          <img src={imageUrl} alt={post.title} className="w-full aspect-[16/9] object-cover mb-10 border border-[#E5E1DA]" />
        ) : (
          <div className="w-full bg-[#1A1A1A] p-8 sm:p-10 mb-10 border border-[#E5E1DA] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10 mb-4">
              <span className="text-[10px] font-bold text-[#1A1A1A] bg-[#FDFCFB] px-3 py-1 uppercase tracking-widest">
                {post.category || 'Leitura'}
              </span>
              <BookOpen className="w-5 h-5 text-[#8E8A83]" />
            </div>
            <p className="font-display text-xl sm:text-2xl italic text-[#FDFCFB]/90 relative z-10 leading-relaxed">
              "{post.excerpt || post.title}"
            </p>
          </div>
        )}

        {/* Body content */}
        {post.body && Array.isArray(post.body) && (
          <div className="font-sans text-base leading-relaxed text-[#2C3531]">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        )}

        {/* Tags */}
        {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-8 mt-10 border-t border-[#E5E1DA]">
            {post.tags.map((tag, tIdx) => {
              const tagStr = typeof tag === 'string' ? tag : String(tag || '');
              if (!tagStr) return null;
              return (
                <span
                  key={tIdx}
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#2C3531] bg-[#F9F7F2] border border-[#E5E1DA] px-3 py-1"
                >
                  <Tag className="w-3 h-3 mr-1 text-[#8E8A83]" />
                  {tagStr}
                </span>
              );
            })}
          </div>
        )}
      </article>
    </main>
  );
}
