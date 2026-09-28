'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { awards } from '@/data/portfolio';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Awards() {
  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          04 — Recognition
        </motion.p>

        <motion.h2
          className="font-head text-3xl md:text-4xl font-bold text-text-primary mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          Awards &amp; Highlights
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={award.event}
              className="flex-1 border border-border-subtle rounded-lg p-6 bg-bg-secondary
                         hover:border-accent/30 transition-colors duration-300 flex gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 2}
              variants={fadeUp}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Trophy size={18} className="text-accent" />
                </div>
              </div>
              <div>
                <p className="font-head font-semibold text-text-primary mb-1">{award.title}</p>
                <p className="text-text-secondary text-sm mb-1">{award.event}</p>
                <p className="font-mono text-xs text-text-muted">{award.org} · {award.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
