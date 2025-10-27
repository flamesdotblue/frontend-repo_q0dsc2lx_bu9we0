import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Flames AI</span>
            <span className="ml-2 text-slate-300">Agents</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20">Book a demo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <section id="process">
          <Services />
          <Process />
        </section>
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Flames AI Studio — AI Agent Building Service Provider
      </footer>
    </div>
  );
}

export default App;
