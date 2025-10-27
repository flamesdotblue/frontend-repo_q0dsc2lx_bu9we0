import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Discover',
    desc: 'We audit use-cases, data sources, and success metrics to define the right agent scope.'
  },
  {
    title: 'Design',
    desc: 'Conversation flows, tool access, guardrails, and evaluation plans come together.'
  },
  {
    title: 'Build',
    desc: 'We implement LLM prompts, retrieval, function calling, and integrations—tested end-to-end.'
  },
  {
    title: 'Launch & Scale',
    desc: 'Deploy with monitoring, analytics, and continuous improvement against KPIs.'
  }
];

export default function Process() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
          <p className="mt-3 text-slate-400">A proven path from idea to impact, built around measurable outcomes.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 ring-1 ring-inset ring-violet-500/40">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle className="h-4 w-4" />
                Milestone included
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
