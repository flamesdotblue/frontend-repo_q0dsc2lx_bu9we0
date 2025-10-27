import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(139,92,246,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to launch your AI agent?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Tell us about your use-case and we’ll propose the right architecture, timeline, and pricing.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@your-aistudio.com?subject=AI%20Agent%20Demo%20Request"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            View services
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400">Response within 1 business day</p>
      </div>
    </section>
  );
}
