'use client';

import { motion } from 'framer-motion';
import { highlights } from '@/lib/content';

export default function Highlights() {
  return (
    <section className="border-b border-line bg-surface/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group bg-base px-5 py-6 transition-colors hover:bg-surface"
            >
              <div className="font-display text-base font-semibold text-ink">
                {h.label}
              </div>
              <div className="mt-1 font-mono text-[11px] text-faint">
                {h.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
