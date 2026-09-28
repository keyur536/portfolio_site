'use client';

import { useEffect, useState, useRef } from 'react';
import { Github, ArrowDownToLine, ArrowRight } from 'lucide-react';
import { hero, contact } from '@/data/portfolio';

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex]   = useState(0);
  const [deleting, setDeleting]     = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];

    const tick = () => {
      if (!deleting) {
        // Typing
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          // Pause then start deleting
          timeoutRef.current = setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // Deleting
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
          timeoutRef.current = setTimeout(tick, speed / 2);
        } else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, speed);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, deleting, wordIndex]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(hero.subtexts);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so the animation feels intentional
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Radial glow behind name */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #7CFF6B08 0%, transparent 70%)',
        }}
      />

      <div
        className={`relative max-w-content mx-auto px-6 md:px-12 pt-24 pb-16 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Section label */}
        <p className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-6">
          <span className="text-accent">▶</span> Available for opportunities
        </p>

        {/* Greeting */}
        <p className="font-mono text-text-secondary text-sm md:text-base mb-2">
          {hero.greeting}
        </p>

        {/* Name */}
        <h1 className="font-head text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.05] mb-4">
          {hero.name}
        </h1>

        {/* Typewriter line */}
        <div className="flex items-center gap-2 mb-6 h-10 md:h-12">
          <span className="font-mono text-xl md:text-2xl text-accent">
            {typed}
          </span>
          <span className="font-mono text-accent text-xl md:text-2xl animate-blink">|</span>
        </div>

        {/* Subline */}
        <p className="font-sans text-text-secondary text-base md:text-lg max-w-xl leading-relaxed mb-10">
          {hero.subline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={hero.cta.primary.href}
            className="inline-flex items-center gap-2 bg-accent text-bg-primary font-mono font-semibold text-sm px-6 py-3 rounded hover:bg-accent-dim transition-all duration-200 group"
          >
            {hero.cta.primary.label}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={contact.resume}
            className="inline-flex items-center gap-2 border border-border-subtle text-text-primary font-mono text-sm px-6 py-3 rounded hover:border-accent hover:text-accent transition-all duration-200"
            download
          >
            <ArrowDownToLine size={16} />
            {hero.cta.secondary.label}
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border-subtle text-text-secondary font-mono text-sm px-6 py-3 rounded hover:border-border-subtle hover:text-text-primary transition-all duration-200"
          >
            <Github size={16} />
            {hero.cta.github.label}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent" />
          <span className="font-mono text-[10px] text-text-muted tracking-widest rotate-90 origin-center translate-y-4">
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}
