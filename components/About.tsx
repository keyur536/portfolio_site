'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { about } from '@/data/portfolio';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
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
          03 — About
        </motion.p>

        <motion.h2
          className="font-head text-3xl md:text-4xl font-bold text-text-primary mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          Who I am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Bio */}
          <div>
            {about.bio.map((para, i) => (
              <motion.p
                key={i}
                className="text-text-secondary leading-relaxed mb-4 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Education card */}
          <motion.div
            className="self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
          >
            <div className="border border-border-subtle rounded-lg p-6 bg-bg-secondary hover:border-accent/30 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-accent" />
                <span className="font-mono text-xs text-text-muted tracking-wider uppercase">Education</span>
              </div>

              <div className="space-y-6">
                {about.education.map((edu, index) => (
                  <div key={index} className={index > 0 ? 'pt-6 border-t border-border-subtle/50' : ''}>
                    <p className="font-head text-text-primary font-semibold mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-text-secondary text-sm mb-3">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
                      <span>{edu.years}</span>
                      <span className="text-border-subtle">|</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
