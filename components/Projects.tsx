'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.article
      className="group border border-border-subtle rounded-lg p-6 bg-bg-secondary cursor-pointer
                 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUp}
      onClick={onClick}
    >
      {/* Index + date */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs text-text-muted tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-xs text-text-muted">{project.date}</span>
      </div>

      {/* Title */}
      <h3 className="font-head text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm mb-5">{project.subtitle}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] text-text-muted border border-border-subtle rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="font-mono text-[11px] text-text-muted border border-border-subtle rounded px-2 py-0.5">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      {/* CTA row */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
          View case study <ArrowRight size={13} />
        </span>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Drawer */}
        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bg-secondary border border-border-subtle rounded-xl"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-start justify-between p-6 pb-4 bg-bg-secondary border-b border-border-subtle">
            <div>
              <p className="font-mono text-xs text-accent mb-1 tracking-wider">{project.date}</p>
              <h2 className="font-head text-2xl font-bold text-text-primary">{project.title}</h2>
              <p className="text-text-muted text-sm mt-1">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors ml-4 mt-1 flex-shrink-0"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-7">
            {/* Demo Video */}
            {project.video && (
              <div>
                <h3 className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase mb-3">Demo</h3>
                <div className="rounded-lg overflow-hidden border border-border-subtle bg-black">
                  <video
                    src={project.video}
                    controls
                    muted
                    playsInline
                    className="w-full max-h-[360px] object-contain"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
            {/* Problem */}
            <div>
              <h3 className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase mb-2">Problem</h3>
              <p className="text-text-secondary leading-relaxed">{project.problem}</p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase mb-2">Approach</h3>
              <p className="text-text-secondary leading-relaxed">{project.approach}</p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-accent mt-1 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
              <h3 className="font-mono text-xs text-accent tracking-[0.15em] uppercase mb-2">Outcome</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{project.outcome}</p>
            </div>

            {/* Stack */}
            <div>
              <h3 className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-accent border border-accent/30 rounded px-2.5 py-1 bg-accent/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border-subtle text-text-secondary font-mono text-sm px-4 py-2 rounded hover:border-accent hover:text-accent transition-all"
              >
                <Github size={15} /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border-subtle text-text-secondary font-mono text-sm px-4 py-2 rounded hover:border-accent hover:text-accent transition-all"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-24 md:py-32">
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
            01 — Work
          </motion.p>

          <motion.h2
            className="font-head text-3xl md:text-4xl font-bold text-text-primary mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Selected Projects
          </motion.h2>

          <motion.p
            className="text-text-secondary mb-12 max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            End-to-end AI systems I've designed and shipped — click any card for the full case study.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
