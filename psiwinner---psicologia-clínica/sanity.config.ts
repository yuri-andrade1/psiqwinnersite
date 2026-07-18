import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './studio/schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production';

if (!projectId) throw new Error('Defina SANITY_STUDIO_PROJECT_ID antes de iniciar o Studio.');

export default defineConfig({
  name: 'psiwinner-studio',
  title: 'Psiwinner — Artigos',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {types: schemaTypes},
});
