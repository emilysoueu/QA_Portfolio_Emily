'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/content';

export default function Process() {
  return (
    <section id="processo" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="font-mono text-[12px] text-pass"># processo</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
            Pipeline de qualidade
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-muted">
            Do requisito ao deploy — cada etapa existe para reduzir risco
            antes que ele chegue à produção.
          </p>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-line2 lg:block" />

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-9 lg:gap-3">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line2 bg-surface font-mono text-[12px] text-accent-glow">
                  {s.step}
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-faint">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
