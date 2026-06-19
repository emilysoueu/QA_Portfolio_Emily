'use client';

import { motion } from 'framer-motion';
import { cases } from '@/lib/content';

export default function Cases() {
  return (
    <section id="cases" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="font-mono text-[12px] text-pass"># cases</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
            Projetos em detalhe
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="flex flex-col rounded-xl border border-line2 bg-surface p-6 shadow-card"
            >
              <div className="mb-4">
                <span className="font-mono text-[11px] text-faint">{c.org}</span>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                  {c.title}
                </h3>
              </div>

              <div className="space-y-4 text-[13.5px] leading-relaxed">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-fail/80">
                    Desafio
                  </p>
                  <p className="mt-1 text-muted">{c.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-warn">
                    Solução
                  </p>
                  <p className="mt-1 text-muted">{c.solution}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-pass">
                    Resultado
                  </p>
                  <p className="mt-1 text-muted">{c.result}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-base px-2 py-0.5 font-mono text-[11px] text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
