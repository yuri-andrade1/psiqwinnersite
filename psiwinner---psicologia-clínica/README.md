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
