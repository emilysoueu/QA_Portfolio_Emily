// Em produção no GitHub Pages (página de projeto), o site vive em
// https://usuario.github.io/repo/ — então qualquer link "absoluto" pra um
// arquivo em /public (PDF, foto, etc.) precisa do prefixo do repositório,
// ou o link quebra. Esse prefixo vem de NEXT_PUBLIC_BASE_PATH, definido
// automaticamente em next.config.js. Use asset('/arquivo.pdf') em vez de
// href="/arquivo.pdf" sempre que apontar para algo em /public.
export const asset = (path: string) => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${path}`;
};
