import React from 'react';
import { Rocket, Bot, Headphones, Shield } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Custom AI Agents',
    desc: 'Domain-trained voice and chat agents tailored to your workflows and brand tone.'
  },
  {
    icon: Bot,
    title: 'Automation Pipelines',
    desc: 'Integrations with CRMs, ticketing, and internal tools to handle end-to-end tasks.'
  },
  {
    icon: Headphones,
    title: 'Voice AI & Telephony',
    desc: 'Natural conversations over phone and web with low latency and human-like prosody.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Enterprise-grade auth, redaction, audit trails, and role-based access controls.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we deliver</h2>
          <p className="mt-3 text-slate-400">From strategy to deployment, we help you launch reliable AI agents that move KPIs.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 ring-1 ring-inset ring-violet-500/40">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
