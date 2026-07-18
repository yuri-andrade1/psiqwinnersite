import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const isSanityConfigured = Boolean(projectId && dataset);
export const sanityClient = isSanityConfigured
  ? createClient({projectId, dataset, apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2025-06-01', useCdn: import.meta.env.PROD, perspective: 'published'})
  : null;

const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null;
export const sanityImageUrl = (source: unknown) => imageBuilder && source ? imageBuilder.image(source).auto('format').fit('crop').url() : undefined;

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  coverImage?: unknown;
  excerpt?: string;
  body?: any[];
  publishedAt: string;
  author?: string;
}

export const POST_LIST_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {_id, title, "slug": slug.current, coverImage, excerpt, publishedAt, author}`;
export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {_id, title, "slug": slug.current, coverImage, excerpt, body, publishedAt, author}`;
