'use client';

import { motion } from 'framer-motion';
import { certifications, education } from '@/lib/content';

export default function Certifications() {
  return (
    <section
      id="certificacoes"
      className="border-b border-line bg-surface/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <span className="font-mono text-[12px] text-pass">
              # certificações
            </span>
            <h2 className="mt-2 mb-8 font-display text-3xl font-semibold tracking-tight text-ink">
              Credenciais Salesforce
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-line2 bg-base p-5 shadow-card"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 font-mono text-[13px] text-accent-glow">
                    SF
                  </div>
                  <h3 className="mt-3 font-display text-[14px] font-semibold leading-snug text-ink">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-faint">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[12px] text-pass"># formação</span>
            <h2 className="mt-2 mb-8 font-display text-3xl font-semibold tracking-tight text-ink">
              Base acadêmica
            </h2>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-line2 bg-base p-5 shadow-card"
                >
                  <h3 className="font-display text-[15px] font-semibold leading-snug text-ink">
                    {edu.degree}
                  </h3>
                  <p className="mt-1.5 font-mono text-[12px] text-muted">
                    {edu.institution}{' '}
                    <span className="text-faint">— {edu.period}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
