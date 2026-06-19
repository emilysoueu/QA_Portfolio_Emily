'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/content';

const channels = [
  {
    icon: Mail,
    label: 'E-mail',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: profile.phone,
    href: `https://wa.me/${profile.phoneDigits}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/emilysoueu',
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[12px] text-pass"># contato</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Vamos conversar sobre qualidade, automação e produtos digitais.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Aberta a oportunidades de QA Engineer e QA Automation Engineer.
              Pode escolher o canal que for mais rápido pra você — respondo
              sempre o mais breve possível.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {channels.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-wide text-faint">
                      {c.label}
                    </span>
                    <span className="block truncate text-[14px] text-ink">
                      {c.value}
                    </span>
                  </span>
                  {c.href && (
                    <ArrowUpRight
                      size={15}
                      className="ml-auto shrink-0 text-faint transition-colors group-hover:text-accent-glow"
                    />
                  )}
                </>
              );

              const baseClasses =
                'group flex items-center gap-3 rounded-xl border border-line2 bg-surface p-4 shadow-card transition-colors';

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    c.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={`focus-ring ${baseClasses} hover:border-accent/40`}
                >
                  {content}
                </a>
              ) : (
                <div key={c.label} className={baseClasses}>
                  {content}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
