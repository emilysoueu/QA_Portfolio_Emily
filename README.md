# Emily Costa — Portfólio QA (Next.js + GitHub Pages)

Site estático (Next.js 15 / TypeScript / Tailwind / Framer Motion) pronto para
publicar no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção (export estático)

```bash
npm run build
```

Gera a pasta `out/` com o site 100% estático — é isso que vai para o GitHub Pages.

## Publicar no GitHub Pages (automático, recomendado)

1. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "Portfólio QA — Emily Costa"
   git branch -M main
   git remote add origin https://github.com/<seu-usuario>/<nome-do-repo>.git
   git push -u origin main
   ```
2. **Importante:** abra `next.config.js` e troque `REPO_NAME` pelo nome exato
   do seu repositório (ex.: se a URL final for
   `https://seu-usuario.github.io/portfolio-qa/`, então
   `REPO_NAME = 'portfolio-qa'`).
   - Se você for publicar num repositório `<usuario>.github.io` (página de
     usuário, sem subpasta) ou usar um domínio próprio, troque a linha do
     `basePath` para `const basePath = '';`.
3. No GitHub, vá em **Settings → Pages → Build and deployment → Source** e
   selecione **GitHub Actions**.
4. O workflow em `.github/workflows/deploy.yml` já está configurado: a cada
   push na branch `main`, ele builda o site e publica automaticamente.
5. Em alguns minutos o site estará em
   `https://<seu-usuario>.github.io/<nome-do-repo>/`.

## Publicar manualmente (alternativa)

```bash
npm run build
# a pasta out/ contém o site. Publique seu conteúdo na branch gh-pages
# ou em qualquer hosting estático (Vercel, Netlify, Cloudflare Pages).
```

## Itens para personalizar antes de publicar

- `lib/content.ts` — todo o texto do site (experiência, cases, skills, etc.)
  vem deste arquivo único.
- `public/Emily_Costa_CV_QA.pdf` — substitua pelo PDF mais atual do currículo
  sempre que ele for atualizado (o botão "Download CV" aponta para este arquivo).
- `app/layout.tsx` — metadados de SEO (título, descrição, palavras-chave).
- Formulário de contato (`components/Contact.tsx`): como o site é estático,
  o formulário abre o cliente de e-mail do visitante (`mailto:`) com os dados
  preenchidos. Se quiser receber as submissões direto numa caixa de entrada
  sem isso, troque por um endpoint do **Formspree** ou **Getform** (gratuitos
  para uso básico) — basta apontar o `action` do formulário para o endpoint deles.
