'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/lib/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Site estático (GitHub Pages) não tem backend para receber o form.
    // Esta abordagem abre o cliente de e-mail do visitante com os dados preenchidos.
    // Para receber submissões direto numa caixa de entrada sem isso, troque por
    // um endpoint do Formspree/Getform (basta um POST no action do <form>).
    const subject = encodeURIComponent(
      `Contato via portfólio — ${form.company || form.name || 'Recrutador'}`
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmpresa: ${form.company}\nE-mail: ${form.email}\n\nMensagem:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="font-mono text-[12px] text-pass"># contato</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Vamos conversar sobre qualidade, automação e produtos digitais.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Aberta a oportunidades de QA Engineer e QA Automation Engineer.
              Respondo rápido — pode mandar a vaga, o desafio ou só uma
              pergunta direta sobre o meu trabalho.
            </p>

            <div className="mt-8 space-y-3 font-mono text-[13px]">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring flex items-center gap-2 text-muted transition-colors hover:text-ink"
              >
                <span className="text-pass">→</span> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 text-muted transition-colors hover:text-ink"
              >
                <span className="text-pass">→</span> linkedin.com/in/emilysoueu
              </a>
              <span className="flex items-center gap-2 text-muted">
                <span className="text-pass">→</span> {profile.location}
              </span>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-line2 bg-surface p-6 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nome"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Empresa"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <Field
              label="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div>
              <label className="mb-1.5 block font-mono text-[11px] text-faint">
                Mensagem
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="focus-ring w-full rounded-md border border-line2 bg-base px-3 py-2 text-[14px] text-ink placeholder:text-faint"
                placeholder="Conte um pouco sobre a vaga ou o desafio."
              />
            </div>
            <button
              type="submit"
              className="focus-ring w-full rounded-md bg-accent px-5 py-3 font-mono text-[13px] font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Enviar mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] text-faint">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="focus-ring w-full rounded-md border border-line2 bg-base px-3 py-2 text-[14px] text-ink placeholder:text-faint"
      />
    </div>
  );
}
