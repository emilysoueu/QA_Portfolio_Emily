'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';

export default function About() {
  return (
    <section id="sobre" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <span className="font-mono text-[12px] text-pass"># sobre</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Da análise de negócio à automação
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-[15px] leading-[1.85] text-muted md:text-base"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
