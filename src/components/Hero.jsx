import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-28 md:pb-20 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <Sparkles className="h-4 w-4 text-violet-300" />
              AI Agent Building — Voice, Chat, Automation
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Build production-grade AI agents for your business
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              We design, train, and deploy custom AI voice and chat agents that automate support, sales, and
              operations—securely integrated with your tools and data.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 overflow-hidden">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Soft radial aura overlay that doesn't block interaction */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient separator that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
