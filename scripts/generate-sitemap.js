import fs from 'fs';
import path from 'path';
import {createClient} from '@sanity/client';

const ENV_FILE_PATH = '.env.local';

// Simple parser for .env.local to avoid external dependencies
if (fs.existsSync(ENV_FILE_PATH)) {
  const envContent = fs.readFileSync(ENV_FILE_PATH, 'utf8');
  envContent.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) return;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    // Remove wrapping quotes if present
    process.env[key] = value.replace(/^["']|["']$/g, '');
  });
}

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const domain = 'https://psiqwinnersite.vercel.app'; // Subdomain on Vercel

if (!projectId) {
  console.warn('⚠️ VITE_SANITY_PROJECT_ID não definido. Gerando sitemap apenas com páginas estáticas...');
  writeStaticSitemap();
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-06-01',
  useCdn: false,
});

async function writeStaticSitemap() {
  try {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Add static pages
    xml += `  <url>\n    <loc>${domain}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
    xml += `  <url>\n    <loc>${domain}/artigos</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    
    xml += `</urlset>\n`;
    
    const outputPath = path.resolve('public/sitemap.xml');
    fs.mkdirSync(path.dirname(outputPath), {recursive: true});
    fs.writeFileSync(outputPath, xml, 'utf8');
    console.log(`✅ Sitemap estático gerado com sucesso em: ${outputPath}`);
  } catch (err) {
    console.error('❌ Erro ao gerar sitemap estático:', err);
  }
}

async function generateDynamicSitemap() {
  try {
    console.log(`🔍 Buscando artigos no Sanity (Projeto ID: ${projectId}, Dataset: ${dataset})...`);
    
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { "slug": slug.current, _updatedAt }`;
    const posts = await client.fetch(query);
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Add static pages
    xml += `  <url>\n    <loc>${domain}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
    xml += `  <url>\n    <loc>${domain}/artigos</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    
    // Add dynamic articles
    posts.forEach((post) => {
      const date = post._updatedAt ? post._updatedAt.split('T')[0] : new Date().toISOString().split('T')[0];
      xml += `  <url>\n    <loc>${domain}/artigos/${post.slug}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    });
    
    xml += `</urlset>\n`;
    
    const outputPath = path.resolve('public/sitemap.xml');
    fs.mkdirSync(path.dirname(outputPath), {recursive: true});
    fs.writeFileSync(outputPath, xml, 'utf8');
    console.log(`✅ Sitemap gerado com sucesso em: ${outputPath} com ${posts.length} artigos do Sanity.`);
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap dinâmico. Fazendo fallback para o sitemap estático...', error);
    await writeStaticSitemap();
  }
}

generateDynamicSitemap();
