# 🩺 Winner Furtado | Psicologia Clínica

Website institucional e portal editorial do **Psicólogo Winner Furtado (CRP 04/62611)**, especializado em **Psicologia Baseada em Evidências** e **Terapia Cognitivo-Comportamental (TCC)** para adultos e acolhimento especializado à comunidade LGBTQIA+.

Desenvolvido com foco em estética editorial premium, altíssima velocidade de carregamento, responsividade mobile-first, SEO avançado e integração com sistema de gestão de artigos (Headless CMS).

---

## 🚀 Tecnologias Utilizadas

### Frontend & UI
- **[React 18](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — Arquitetura modular e fortemente tipada.
- **[Vite 6](https://vitejs.dev/)** — Bundler ultrarrápido para desenvolvimento e compilação de produção.
- **[Tailwind CSS](https://tailwindcss.com/)** — Design System customizado com estética editorial.
- **[Lucide React](https://lucide.dev/)** — Ícones vetoriais modernos.
- **[Motion (Framer Motion)](https://motion.dev/)** — Animações e transições fluidas.

### CMS & Infraestrutura
- **[Sanity.io](https://www.sanity.io/)** — Headless CMS para gestão dinâmica de artigos e blog sem necessidade de alterar o código do site.
- **[Vercel](https://vercel.com/)** — Hospedagem serverless na rede global Edge CDN com certificado SSL e proteção Anti-DDoS nativos.
- **Automated Sitemap Engine** — Gerador automático de `sitemap.xml` executado via Node.js no processo de build.

---

## 🎨 Seções da Aplicação

1. **Hero Header**: Apresentação inicial acolhedora em primeira pessoa, frase de impacto oficial ("*Saia do modo alerta e construa relações mais seguras*") e CTAs de conversão direta para o WhatsApp.
2. **Especialidades Clínicas**: As 8 áreas de atuação profissional (Ansiedade, Relacionamentos, Dependência Emocional, Autoestima, Regulação Emocional, Desenvolvimento Pessoal, Emagrecimento/Hábitos e Transtornos Mentais) com cards expansíveis de sintomas.
3. **Formação & Trajetória**: Apresentação limpa das 8 titulações e especializações organizadas em 3 cards categorizados (Graduação & Pós-Graduações, Cursos de Formação e Registro Profissional).
4. **Avaliações de Pacientes**: Depoimentos reais importados do perfil oficial do **Doctoralia**, acompanhados de link direto para verificação.
5. **Reels & Vídeos**: Mocks visuais integrados dos vídeos do Instagram (`@psiwinner`).
6. **Blog / Artigos Informativos**: Lista de leitura integrada ao Sanity CMS com consulta em tempo real e leitor de artigos completo.
7. **FAQ (Dúvidas Frequentes)**: Esclarecimentos clínicos sobre sessões online (LGPD/CFP), duração (50 min), público atendido e recibos para reembolso em planos de saúde.
8. **Formulário de Contato**: Formulário de mensagem direta para o WhatsApp com limitação vertical de caixas de texto e link discreto para o Modal de Privacidade.

---

## 🛠️ Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** v20.19.0 ou superior.
- **npm** v10 ou superior.

### 1. Clonar e Instalar Dependências

```bash
# Clone o repositório
git clone https://github.com/yuri-andrade1/psiqwinnersite.git

# Acesse a pasta do projeto
cd psiqwinnersite

# Instale as dependências
npm install
```

### 2. Configurar Variáveis de Ambiente Local (Opcional)

Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:

```env
VITE_SANITY_PROJECT_ID="seu_project_id_aqui"
VITE_SANITY_DATASET="production"
VITE_SANITY_API_VERSION="2025-06-01"
```

> ⚠️ **Nota de Segurança**: As variáveis de ambiente do Sanity armazenam apenas o `PROJECT_ID` e o `DATASET`. Estes são identificadores **públicos** de leitura. Nenhuma chave secreta ou senha de banco de dados é armazenada ou exposta no código.

### 3. Executar o Servidor de Desenvolvimento

```bash
npm run dev
```
O site estará disponível em `http://localhost:5173`.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local com Hot Reload. |
| `npm run build` | Roda a geração do `sitemap.xml` e compila os arquivos de produção em `/dist`. |
| `npm run preview` | Roda um servidor local para testar a compilação final de produção. |
| `npm run lint` | Executa a verificação estática de tipos e código via ESLint/TypeScript. |
| `npm run studio:dev` | Inicia o painel do **Sanity Studio** localmente na porta 3333. |

---

## 📝 Gestão de Artigos no Sanity CMS

O gerenciamento de conteúdos é feito de forma simples pelo painel administrativo do Sanity:

1. O editor acessa o painel do Sanity Studio (`http://localhost:3333` ou pelo link hospedado).
2. Faz login com sua conta do Google cadastrada no projeto.
3. Preenche os campos do artigo: **Título**, **Slug (URL)**, **Imagem de Capa**, **Categoria**, **Resumo** e **Conteúdo (Rich Text)**.
4. Clica no botão azul **Publish** no canto inferior direito.
5. O artigo fica publicado imediatamente no site e o sitemap é atualizado na próxima compilação.

---

## 🌐 Publicação (Deploy) e Domínio Próprio

O site está configurado para deploy automático na **Vercel**:

- **Ramo Principal**: `main`
- **Diretório Raiz**: `./`
- **Framework Preset**: Vite
- **Comando de Build**: `npm run build`
- **Diretório de Saída**: `dist`

### Conectando um Domínio Próprio (`.com.br`)
1. Adquira o domínio no [Registro.br](https://registro.br).
2. No painel da Vercel, acesse **Settings → Domains** e insira o domínio (ex: `psiwinner.com.br`).
3. Atualize os servidores DNS no Registro.br apontando para os endereços indicados pela Vercel.
4. O certificado de segurança HTTPS/SSL será ativado automaticamente.

---

## 🛡️ Segurança & Privacidade

- **Conformidade LGPD & CFP**: O site não armazena dados de pacientes em servidores próprios. Todas as mensagens são encaminhadas diretamente para o WhatsApp do profissional.
- **Proteção Anti-DDoS**: Proteção nativa ativa na camada Edge da rede Vercel.
- **Zero Secrets in Code**: Zero chaves de escrita, tokens secretos ou senhas expostas no código ou no histórico do Git.

---

## 📄 Licença & Propriedade

Desenvolvido para **Winner Furtado — Psicologia Clínica (CRP 04/62611)**.  
Todos os direitos reservados © 2026.
