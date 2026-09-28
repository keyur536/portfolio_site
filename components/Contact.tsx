'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowDownToLine } from 'lucide-react';
import { contact, meta } from '@/data/portfolio';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const links = [
  { icon: Mail,     label: 'Email',    href: `mailto:${contact.email}`,   text: contact.email },
  { icon: Github,   label: 'GitHub',   href: contact.github,              text: 'github.com/keyur536' },
  { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin,            text: 'linkedin.com/in/keyur536' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — heading + cta */}
          <div>
            <motion.p
              className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              05 — Contact
            </motion.p>

            <motion.h2
              className="font-head text-3xl md:text-4xl font-bold text-text-primary mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              Let's build something.
            </motion.h2>

            <motion.p
              className="text-text-secondary mb-8 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              I'm open to full-time roles, consulting, and interesting AI projects.
              Feel free to reach out — I typically reply within 24 hours.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-text-muted font-mono text-xs mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              <MapPin size={13} className="text-accent" />
              {contact.location}
            </motion.div>

            <motion.a
              href={contact.resume}
              className="inline-flex items-center gap-2 border border-accent text-accent font-mono text-sm px-6 py-3 rounded hover:bg-accent hover:text-bg-primary transition-all duration-200"
              download
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </motion.a>
          </div>

          {/* Right — links */}
          <div className="space-y-4">
            {links.map(({ icon: Icon, label, href, text }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border-subtle rounded-lg bg-bg-primary
                           hover:border-accent/40 hover:bg-bg-tertiary transition-all duration-200 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                variants={fadeUp}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={17} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-text-primary text-sm group-hover:text-accent transition-colors">{text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-20 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {meta.name} — Built with Next.js &amp; Tailwind CSS
          </p>
          <p className="font-mono text-xs text-text-muted">
            Designed &amp; shipped by Keyur
          </p>
        </div>
      </div>
    </section>
  );
}
