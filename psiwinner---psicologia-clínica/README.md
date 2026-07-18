# Psiwinner Psicologia Clínica

Landing page estática em React, Vite e Tailwind CSS. Não possui backend nem usa variáveis de ambiente.

## Rodar localmente

Requer Node.js 20.19 ou superior.

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Publicar na Vercel

Ao importar o repositório na Vercel, defina **Root Directory** como `psiwinner---psicologia-clínica`. Mantenha o framework **Vite**, build `npm run build` e diretório de saída `dist`.

Antes da publicação, atualize em `src/data.ts` o nome, CRP, telefone/WhatsApp, e-mail, endereço, links, credenciais e avaliações. Também substitua `SEU-DOMINIO.com` em `public/robots.txt` pelo domínio final.

## Artigos com Sanity CMS

O site tem duas rotas públicas: `/artigos` e `/artigos/:slug`. Elas exibem somente documentos **publicados** no Sanity; rascunhos não aparecem para visitantes.

1. Crie um projeto e um dataset `production` no [Sanity](https://www.sanity.io/).
2. Copie `.env.example` para `.env.local` e preencha o ID do projeto e o dataset.
3. Na Vercel, cadastre `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET` e `VITE_SANITY_API_VERSION` nas variáveis de ambiente de Production e faça um novo deploy.
4. No Sanity, adicione o domínio da Vercel em **API → CORS origins** com credenciais desmarcadas.
5. Para abrir o painel editorial localmente, defina também `SANITY_STUDIO_PROJECT_ID` e `SANITY_STUDIO_DATASET` e execute `npm run studio:dev`.
6. Faça login no painel, crie um **Artigo**, preencha os campos e clique em **Publish**. Para hospedar o painel do Sanity, execute `npm run studio:deploy` e escolha o subdomínio solicitado.
