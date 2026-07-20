import {useEffect, useState} from 'react';
import {ArrowRight, BookOpen, Calendar, Home} from 'lucide-react';
import {Link} from 'react-router-dom';
import {isSanityConfigured, POST_LIST_QUERY, sanityClient, sanityImageUrl, type SanityPost} from '../lib/sanity';

const formatDate = (date: string) => new Intl.DateTimeFormat('pt-BR', {dateStyle: 'long'}).format(new Date(date));

export default function ArticlesPage() {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sanityClient) { setLoading(false); return; }
    sanityClient.fetch<SanityPost[]>(POST_LIST_QUERY).then(setPosts).catch(() => setError(true)).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    const originalDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

    document.title = 'Artigos e Leituras de Saúde Mental | Psicólogo Winner Furtado';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Explore artigos, reflexões e dicas de saúde mental escritos pelo Psicólogo Winner Furtado, especialista em Terapia Cognitivo-Comportamental.');

    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Artigos e Leituras de Saúde Mental | Psicólogo Winner Furtado');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Explore artigos, reflexões e dicas de saúde mental escritos pelo Psicólogo Winner Furtado.');

    return () => {
      document.title = originalTitle;
      document.querySelector('meta[name="description"]')?.setAttribute('content', originalDesc);
    };
  }, []);

  return <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83] mb-6 transition-colors border border-[#1A1A1A] bg-[#FDFCFB] px-3.5 py-2">
      <Home className="w-3.5 h-3.5 mr-2 text-[#1A1A1A]" />
      Voltar ao Início
    </Link>
    <div className="border-b border-[#1A1A1A] pb-8 mb-12"><p className="font-sans text-xs uppercase tracking-widest text-[#8E8A83] mb-3">Artigos &amp; Leituras</p><h1 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] tracking-tight">Saúde mental, com informação e acolhimento</h1></div>
    {loading && <p className="font-sans text-sm text-[#2C3531]">Carregando artigos...</p>}
    {!loading && !isSanityConfigured && <EmptyState title="Os artigos estarão disponíveis em breve." text="O espaço de publicações está sendo preparado." />}
    {!loading && error && <EmptyState title="Não foi possível carregar os artigos agora." text="Tente novamente em alguns instantes." />}
    {!loading && isSanityConfigured && !error && posts.length === 0 && <EmptyState title="Ainda não há artigos publicados." text="Volte em breve para conferir novos conteúdos." />}
    {!loading && posts.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{posts.map((post) => {
      const imageUrl = sanityImageUrl(post.coverImage);
      return <article key={post._id} className="flex flex-col overflow-hidden bg-[#FDFCFB] border border-[#E5E1DA] hover:border-[#1A1A1A] editorial-shadow transition-colors">
        {imageUrl && <img src={imageUrl} alt="" className="aspect-[16/10] w-full object-cover" />}
        <div className="p-6 flex flex-col flex-1"><p className="flex items-center text-[10px] font-mono font-bold text-[#8E8A83] mb-3"><Calendar className="w-3 h-3 mr-1" />{formatDate(post.publishedAt)}</p><h2 className="font-display font-bold text-xl text-[#1A1A1A] leading-snug mb-3">{post.title}</h2>{post.excerpt && <p className="font-sans text-xs text-[#2C3531] leading-relaxed mb-6">{post.excerpt}</p>}<Link to={`/artigos/${post.slug}`} className="mt-auto inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83]">Ler artigo <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link></div>
      </article>;
    })}</div>}
  </div></main>;
}

function EmptyState({title, text}: {title: string; text: string}) {
  return <div className="max-w-xl mx-auto text-center p-12 bg-[#FDFCFB] border border-dashed border-[#1A1A1A]"><BookOpen className="w-8 h-8 mx-auto text-[#8E8A83] mb-4" /><h2 className="font-display font-bold text-xl text-[#1A1A1A] mb-2">{title}</h2><p className="font-sans text-sm text-[#2C3531]">{text}</p></div>;
}
