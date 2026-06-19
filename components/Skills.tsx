'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/content';

export default function Skills() {
  return (
    <section id="competencias" className="border-b border-line bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="font-mono text-[12px] text-pass"># competências</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Stack de qualidade, por categoria
            </h2>
          </div>
          <span className="hidden font-mono text-[12px] text-faint md:block">
            6/6 categorias · status: pass
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="bg-base p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-ink">
                  {cat.title}
                </h3>
                <span className="flex items-center gap-1.5 rounded-full bg-pass-bg px-2 py-0.5 font-mono text-[10px] text-pass">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  pass
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line2 bg-surface px-2.5 py-1 font-mono text-[12px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
