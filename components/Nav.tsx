'use client';

import { useEffect, useState } from 'react';
import { nav, profile } from '@/lib/content';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="focus-ring flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-pass-bg font-mono text-[11px] text-pass">
            ✓
          </span>
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring font-mono text-[13px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="focus-ring rounded-md border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[13px] text-accent-glow transition-colors hover:bg-accent/20"
          >
            Vamos conversar
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink md:hidden"
        >
          <span className="font-mono text-sm">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-line px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring font-mono text-sm text-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-center font-mono text-sm text-accent-glow"
            >
              Vamos conversar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
