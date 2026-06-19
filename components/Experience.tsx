'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-line bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="font-mono text-[12px] text-pass"># experiência</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
            Trajetória profissional
          </h2>
        </div>

        <div className="relative space-y-10 border-l border-line2 pl-8">
          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-base bg-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>

              <div className="rounded-xl border border-line2 bg-base p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-[12px] text-faint">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-[13px] text-accent-glow">
                  {exp.company}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {exp.summary}
                </p>

                <details className="group mt-4">
                  <summary className="focus-ring cursor-pointer list-none font-mono text-[12px] text-faint transition-colors hover:text-ink">
                    + ver responsabilidades detalhadas
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-2 text-[13.5px] leading-relaxed text-muted"
                      >
                        <span className="mt-1 text-pass">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line2 px-2 py-0.5 font-mono text-[11px] text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
