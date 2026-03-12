# GA de Almeida Landing Page

Landing page institucional da **GA de Almeida Demolição e Terraplenagem**, construída com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e componentes no padrão **shadcn/ui**.

## Requisitos

- Node.js `>= 20`
- npm `>= 10`

## Instalação

```bash
npm install
```

## Ambiente de desenvolvimento

```bash
npm run dev
```

Abra: [http://localhost:3000](http://localhost:3000)

## Qualidade de código

```bash
npm run lint
```

## Build de produção (export estático)

```bash
npm run build
```

Este projeto está configurado com `output: "export"` em [`next.config.ts`](./next.config.ts), então o build gera arquivos estáticos na pasta:

- `out/`

## Preview local do build estático

Como o projeto usa export estático, `next start` não é utilizado aqui.  
Para testar o conteúdo de `out/` localmente:

```bash
npx serve@latest out
```

## Variáveis de ambiente

Crie um `.env.local` (opcional) para definir a URL pública do site:

```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

Essa variável é usada em:

- [`app/layout.tsx`](./app/layout.tsx) (`metadataBase`)
- [`app/robots.ts`](./app/robots.ts)
- [`app/sitemap.ts`](./app/sitemap.ts)

## Estrutura principal

```text
app/
  layout.tsx        # metadata global, fontes e estrutura base
  page.tsx          # conteúdo da landing page
  globals.css       # estilos globais e utilitários visuais
  robots.ts         # robots.txt
  sitemap.ts        # sitemap.xml
components/
  site-header.tsx   # header desktop/mobile (menu lateral mobile)
  ui/               # componentes base no estilo shadcn/ui
public/images/      # imagens servidas em produção
```

## Edição de conteúdo e identidade visual

- Conteúdo da página: [`app/page.tsx`](./app/page.tsx)
- Cabeçalho/menu mobile: [`components/site-header.tsx`](./components/site-header.tsx)
- Paleta e estilos globais: [`app/globals.css`](./app/globals.css)

## Deploy

Faça deploy da pasta `out/` em qualquer hosting estático:

- Netlify
- Vercel (modo estático)
- Cloudflare Pages
- Amazon S3 + CloudFront
- Nginx/Apache

Fluxo recomendado:

1. `npm install`
2. `npm run lint`
3. `npm run build`
4. Publicar o conteúdo de `out/`
