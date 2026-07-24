export interface Specialty {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will map to Lucide icons dynamically
  symptoms: string[];
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;
  dateText: string;
  text: string;
  verified: boolean;
  response?: string;
}

export interface Credential {
  id: string;
  degree: string;
  institution: string;
  year: string;
  category: 'graduacao' | 'pos' | 'formacao' | 'experiencia' | 'associacao';
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or rich text
  category: string;
  readTime: string;
  date: string;
  image?: string;
  tags: string[];
}
