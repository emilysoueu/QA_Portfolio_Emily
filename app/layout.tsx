import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Emily Costa — QA Automation Engineer | Salesforce QA Specialist',
  description:
    'Emily Costa é QA Engineer especializada em Salesforce, automação de testes (Selenium, Pytest, Robot Framework) e testes de API (Postman/Newman). Mais de 5 anos validando sistemas corporativos com rigor analítico.',
  keywords: [
    'QA Engineer',
    'Quality Assurance',
    'QA Automation Engineer',
    'Salesforce QA',
    'Selenium',
    'Pytest',
    'Robot Framework',
    'API Testing',
    'Postman',
    'Software Testing',
  ],
  authors: [{ name: 'Emily Costa' }],
  openGraph: {
    title: 'Emily Costa — QA Automation Engineer',
    description:
      'QA Engineer especializada em Salesforce, Automação e Testes de API. +5 anos validando sistemas corporativos.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230A0E14'/%3E%3Ctext x='50' y='66' font-size='52' font-family='monospace' font-weight='700' fill='%2336D399' text-anchor='middle'%3E%3C/%3E%3C/svg%3E" />
      </head>
      <body>{children}</body>
    </html>
  );
}
