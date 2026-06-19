'use client';

import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { githubRepos } from '@/lib/content';

const chipColors = ['bg-pink-bg text-[#B5577E]', 'bg-accent/10 text-accent-glow', 'bg-sky-bg text-[#3E6FA0]', 'bg-sun-bg text-[#9A7414]'];

export default function GithubProjects() {
  return (
    <section id="github" className="border-b border-line bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[12px] text-pass"># github</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Repositórios
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-muted">
              Código real, não só descrição de currículo. Esta seção é
              atualizada conforme novos projetos são publicados.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {githubRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="focus-ring group flex flex-col rounded-xl border border-line2 bg-base p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink2/5 text-ink">
                  <Github size={17} strokeWidth={1.8} />
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-faint transition-colors group-hover:text-accent-glow"
                />
              </div>

              <h3 className="font-mono text-[14px] font-semibold text-ink">
                {repo.name}
              </h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
                {repo.description}
              </p>

              <span
                className={`mt-4 inline-flex w-fit items-center rounded-full px-2.5 py-1 font-mono text-[11px] ${
                  chipColors[i % chipColors.length]
                }`}
              >
                {repo.language}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
