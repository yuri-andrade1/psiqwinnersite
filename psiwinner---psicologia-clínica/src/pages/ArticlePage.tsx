import {useEffect, useState} from 'react';
import {PortableText} from '@portabletext/react';
import {ArrowLeft, Calendar, UserRound} from 'lucide-react';
import {Link, useParams} from 'react-router-dom';
import {POST_BY_SLUG_QUERY, sanityClient, sanityImageUrl, type SanityPost} from '../lib/sanity';

const formatDate = (date: string) => new Intl.DateTimeFormat('pt-BR', {dateStyle: 'long'}).format(new Date(date));

export default function ArticlePage() {
  const {slug} = useParams();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { if (!sanityClient || !slug) { setLoading(false); return; } sanityClient.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, {slug}).then(setPost).finally(() => setLoading(false)); }, [slug]);
  if (loading) return <main className="min-h-screen pt-32 text-center font-sans text-sm text-[#2C3531]">Carregando artigo...</main>;
  if (!post) return <main className="min-h-screen pt-32 px-4 text-center"><h1 className="font-display font-bold text-3xl text-[#1A1A1A] mb-4">Artigo não encontrado</h1><Link to="/artigos" className="font-sans text-sm underline">Voltar para artigos</Link></main>;
  const imageUrl = sanityImageUrl(post.coverImage);
  return <main className="min-h-screen bg-[#FDFCFB] pt-28 pb-24"><article className="max-w-3xl mx-auto px-4 sm:px-6">
    <Link to="/artigos" className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8E8A83] mb-10"><ArrowLeft className="w-3.5 h-3.5 mr-1.5" />Todos os artigos</Link>
    <div className="flex flex-wrap gap-4 border-b border-[#E5E1DA] pb-5 mb-6 text-[10px] font-mono font-bold text-[#8E8A83]"><span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" />{formatDate(post.publishedAt)}</span>{post.author && <span className="flex items-center"><UserRound className="w-3.5 h-3.5 mr-1.5" />{post.author}</span>}</div>
    <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] leading-tight mb-6">{post.title}</h1>{post.excerpt && <p className="font-display text-lg italic leading-relaxed text-[#2C3531] border-l-2 border-[#1A1A1A] pl-4 mb-10">{post.excerpt}</p>}{imageUrl && <img src={imageUrl} alt="" className="w-full aspect-[16/9] object-cover mb-10 border border-[#E5E1DA]" />}{post.body && <div className="font-sans text-base leading-relaxed text-[#2C3531]"><PortableText value={post.body} /></div>}
  </article></main>;
}
