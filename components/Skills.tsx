'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/data/portfolio';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-secondary">
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
          02 — Skills
        </motion.p>

        <motion.h2
          className="font-head text-3xl md:text-4xl font-bold text-text-primary mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          Stack &amp; Tooling
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="border border-border-subtle rounded-lg p-6 bg-bg-primary hover:border-accent/20 transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={gi + 2}
              variants={fadeUp}
            >
              {/* Group label */}
              <p className="font-mono text-xs text-accent tracking-[0.15em] uppercase mb-4">
                {group.label}
              </p>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-text-secondary border border-border-subtle rounded px-3 py-1.5
                               hover:border-accent/40 hover:text-text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
