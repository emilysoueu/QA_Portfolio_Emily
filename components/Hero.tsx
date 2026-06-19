'use client';

import { motion } from 'framer-motion';
import { heroStats, heroTestSuite, profile } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-grid-fade pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Left: value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line2 bg-surface px-3 py-1 font-mono text-[12px] text-pass">
            <span className="h-1.5 w-1.5 rounded-full bg-pass" />
            disponível para novas oportunidades
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            QA Engineer especializada em{' '}
            <span className="text-accent-glow">Salesforce</span>, Automação e{' '}
            <span className="text-accent-glow">Testes de API</span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:text-base">
            Mais de 5 anos atuando em qualidade de software, automação de
            testes e validação de sistemas corporativos — combinando rigor
            técnico com entendimento real de regras de negócio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experiencia"
              className="focus-ring rounded-md bg-accent px-5 py-3 font-mono text-[13px] font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Ver experiência
            </a>
            <a
              href="/Emily_Costa_CV_QA.pdf"
              className="focus-ring rounded-md border border-line2 px-5 py-3 font-mono text-[13px] text-ink transition-colors hover:border-accent/50 hover:text-accent-glow"
            >
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-md px-5 py-3 font-mono text-[13px] text-muted transition-colors hover:text-ink"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="border-l border-line2 pl-3">
                <div className="font-display text-lg font-semibold text-ink">
                  {s.value}
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: signature element — test suite running against her own profile */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-line2 bg-surface shadow-card">
            <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-fail/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-pass/70" />
              <span className="ml-2 font-mono text-[12px] text-faint">
                emily_costa_profile.test.py
              </span>
            </div>

            <div className="relative p-5 font-mono text-[12.5px] leading-relaxed">
              <p className="text-muted">
                <span className="text-faint">$</span> pytest -v
                emily_costa_profile.test.py
              </p>
              <p className="mt-1 text-faint">
                collected {heroTestSuite.length} items
              </p>

              <div className="mt-4 space-y-2.5">
                {heroTestSuite.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + i * 0.18,
                      ease: 'easeOut',
                    }}
                    className="flex items-start justify-between gap-3 border-b border-line/60 pb-2.5"
                  >
                    <div>
                      <span className="text-ink">{t.id}</span>
                      <span className="block text-[11px] text-faint">
                        {t.desc}
                      </span>
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.18 + 0.25 }}
                      className="whitespace-nowrap rounded bg-pass-bg px-2 py-0.5 text-[11px] font-semibold text-pass"
                    >
                      PASS · {t.time}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + heroTestSuite.length * 0.18 + 0.4 }}
                className="mt-4 text-pass"
              >
                {heroTestSuite.length} passed in 1.80s{' '}
                <span className="text-faint">— ready for production</span>
                <span className="ml-1 inline-block w-1.5 animate-blink text-ink">
                  ▮
                </span>
              </motion.p>
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[11px] text-faint">
            suite real, executada todos os dias — não é só copy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
