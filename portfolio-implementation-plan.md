# Portfolio Website — Implementation Plan for Gemini / Antigravity

**Owner:** Keyur Chaudhari
**Positioning:** AI Developer / AI Builder (Agentic AI, RAG, LLMs)
**Design direction:** Dark, techy, clean, minimalistic, unique — not a generic template

---

## 1. Project Goal

Build a single-page (or lightly multi-page) portfolio site that positions Keyur as an **AI Builder** — someone who ships real agentic AI / RAG / LLM systems end-to-end, not just a student with a resume. The site should feel like a product, not a CV.

**Primary audience:** recruiters/hiring managers at AI/ML companies, and technical peers.
**Primary goal:** get visitors to (a) understand what he builds in 5 seconds, (b) explore 2-3 flagship projects, (c) contact him / view resume / GitHub.

---

## 2. Tech Stack (recommend to Gemini)

- **Framework:** Next.js 14+ (App Router) + TypeScript — fast, SEO-friendly, easy to deploy on Vercel
- **Styling:** Tailwind CSS + custom design tokens (see Section 4)
- **Animation:** Framer Motion (scroll reveals, hover states, subtle micro-interactions)
- **Icons:** Lucide React
- **Fonts:** Load via `next/font` (see typography below)
- **Deployment target:** Vercel (free tier)
- **Content:** Store project/skill data in a local TypeScript config file (`/data/portfolio.ts`) so content is easy to edit later without touching components

> Note to Gemini: if Next.js is unavailable in this environment, fall back to Vite + React + TypeScript + Tailwind with the same structure.

---

## 3. Site Structure / Sections

Single scrolling page with anchored sections + sticky minimal nav.

1. **Nav bar** — logo/initials (KC), links: Work, Skills, About, Contact. Sticky, transparent → solid on scroll.
2. **Hero** — Name, one-line identity statement, animated/typing tagline, primary CTA buttons (View Work, Download Resume, GitHub).
3. **About / Bio** — 2-4 sentence narrative bio, education snippet (BE, Bharati Vidyapeeth College of Engineering).
4. **Selected Work** — 3 project case-study cards (ACIP, SpeakX-Pro, SANNIDHI). Each expandable/clickable to a detail view or modal with: problem, approach, tech stack, architecture diagram/screenshot, outcome.
5. **Skills / Stack** — grouped, not a flat list (see grouping below). Rendered as tag chips or an interactive grid, not a boring bullet list.
6. **Awards / Recognition** — E-Cell Pitch Competition, HackOverflow 2.0 finalist — small honors strip.
7. **Contact / Footer** — email, phone (optional to show), GitHub, LinkedIn, resume download, copyright.

---

## 4. Design System

### Color palette (dark, techy, minimal)
```
--bg-primary:    #0A0A0B   (near-black base)
--bg-secondary:  #111113   (card surfaces)
--bg-tertiary:   #17181B   (hover/elevated surfaces)
--border:        #232326   (hairline borders)
--text-primary:  #F2F2F0   (headings)
--text-secondary:#A1A1A6   (body copy)
--text-muted:    #6B6B70   (captions, meta)
--accent:        #7CFF6B   (signature accent — electric lime/green, "terminal" feel)
--accent-dim:    #4E9A45   (accent hover/secondary)
```
> Alternative accent options if lime feels too loud: electric cyan `#5EEBD8`, or warm amber `#FFB454`. Pick ONE accent color only — restraint is what makes it feel premium.

### Typography
- **Headings:** a geometric/monospace-adjacent font for the "AI builder" feel — e.g. `Space Grotesk` or `General Sans`
- **Body:** clean sans — e.g. `Inter` or `IBM Plex Sans`
- **Code/labels/tags:** monospace — e.g. `JetBrains Mono` or `IBM Plex Mono` (use for skill tags, section numbers like `01 / 04`, meta text — this is what gives "techy" feel)

### Layout principles
- Generous whitespace, max content width ~1100-1200px
- Section numbering in mono font (e.g. `01 — WORK`) as a recurring visual motif
- Subtle grid/dot background texture or animated gradient mesh behind hero only — kept very subtle, low opacity
- Hairline borders (1px, low-opacity) instead of heavy shadows/cards
- No stock illustrations, no generic gradient blobs, no rounded-bubble icons

### Motion (used sparingly — restraint = "unique")
- Fade-up on scroll for section entries (Framer Motion `whileInView`)
- Hover: project cards lift 2-4px + border brightens to accent color, no big scale jumps
- Optional: subtle cursor-follow glow effect behind hero heading
- Optional: hero tagline typewriter effect cycling through: "AI Builder", "Agentic Systems", "RAG Pipelines", "LLM Products"

---

## 5. Content Mapping (from resume — fill gaps marked [NEEDED])

### Hero
- Name: Keyur Chaudhari
- Tagline: [NEEDED — short identity line, e.g. "I build agentic AI systems that ship."]
- Subtext: [NEEDED — 1 sentence on focus area]

### About
- [NEEDED — 2-4 sentence bio]
- Education: B.E., Bharati Vidyapeeth College of Engineering (2021–2025)

### Skills (grouped, not flat)
- **AI/ML Core:** Agentic AI, LLMs, RAG, Prompt Engineering, LangGraph
- **AI Tooling used in projects:** OpenAI GPT-5.5, Ollama, Whisper, MediaPipe, InsightFace (RetinaFace, ArcFace), Sentence-Transformers, ChromaDB, Docling, pgvector
- **Backend:** Python, FastAPI, PostgreSQL, SQLite
- **Frontend:** React.js, Streamlit
- [NEEDED: confirm/adjust groupings — auto-extracted from resume, may be incomplete]

### Projects (case study cards)
**1. Autonomous Customs Intelligence Platform (ACIP)** — 07/2026
- Multi-agent customs compliance platform automating document processing
- OCR extraction → validation → RAG compliance checking → duty calculation → Bill of Entry generation, with human-in-the-loop review
- LangGraph-based agentic architecture, specialized agents per task
- RAG over CBIC/DGFT regulatory knowledge base for citation-backed compliance
- Stack: Python, FastAPI, React.js, LangGraph, OpenAI GPT-5.5/Ollama, Docling, PostgreSQL, pgvector
- [NEEDED: GitHub link, live demo, screenshots, 1-2 quantified outcomes]

**2. SpeakX-Pro — AI Public Speaking Coach** — 06/2026
- 100% local, no cloud APIs — analyzes audio/video/NLP for 18+ communication metrics
- Whisper (transcription), MediaPipe (eye contact/posture), Qwen2.5-7B via Ollama (feedback/grammar)
- RAG chatbot (ChromaDB + Sentence-Transformers + SQLite) for session history/progress
- [NEEDED: GitHub link, demo video, screenshots]

**3. SANNIDHI — Intelligent Classroom Attendance System** — 05/2026
- Face recognition attendance from a single classroom image
- InsightFace (RetinaFace + ArcFace), 512-dim embeddings, no retraining needed for new students
- Streamlit dashboard + SQLite, cosine similarity matching, works in crowded classrooms
- [NEEDED: GitHub link, screenshots/demo]

### Awards
- 2nd Prize — E-Cell Pitch Competition, Bharati Vidyapeeth College of Engineering (pitched "InCampus")
- National-Level Hackathon Finalist — Top 10, HackOverflow 2.0, Pillai College of Engineering (project "Nyayak")

### Contact
- Email: keyur.chaudhari.cmfeb26@gmail.com
- Phone: +91 7875237815 [confirm whether to display publicly]
- Location: Navi Mumbai
- GitHub: [NEEDED — confirm handle, resume shows "keyur536" listed twice, likely GitHub username]
- LinkedIn: [NEEDED]
- Resume: link to downloadable PDF

---

## 6. Build Instructions for Gemini (step-by-step)

1. Scaffold Next.js + TypeScript + Tailwind project.
2. Set up design tokens in `tailwind.config.ts` (colors, fonts) per Section 4.
3. Load fonts via `next/font/google` (Space Grotesk, Inter, JetBrains Mono).
4. Create `/data/portfolio.ts` holding all content from Section 5 as typed objects (so it's editable without touching UI code).
5. Build layout shell: sticky nav, footer.
6. Build Hero section with typewriter tagline + subtle background effect.
7. Build About section.
8. Build Projects section as a grid of cards → click opens detail modal/drawer with full case study.
9. Build Skills section as grouped tag chips (categorized, monospace labels).
10. Build Awards strip.
11. Build Contact/footer with links + resume download.
12. Add Framer Motion scroll-reveal to each section.
13. Ensure full responsive behavior (mobile-first: stack cards, collapse nav to menu icon).
14. Add SEO metadata (title, description, OG image) — name + "AI Developer / AI Builder" in title.
15. Add favicon (simple "KC" mark in accent color, monospace).
16. Test dark mode is default and only mode (no light mode needed).
17. Deploy-ready build (`next build` passes, no console errors).

---

## 7. Open Items Before Handing to Gemini (fill these in first for best results)

- [ ] One-line hero tagline + subtext
- [ ] 2-4 sentence bio
- [ ] GitHub username (confirm) + LinkedIn URL
- [ ] For each of the 3 projects: GitHub repo link, live demo (if any), 1-3 screenshots, 1 quantified outcome
- [ ] Whether phone number should be public
- [ ] Confirm/adjust accent color (lime / cyan / amber)
- [ ] Resume PDF file to link for download

Once these are filled in, paste this entire plan (plus the resume) into Gemini/Antigravity as the build brief.
