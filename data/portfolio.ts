// /data/portfolio.ts
// ─────────────────────────────────────────────────────────────────────────────
// Central content config. Edit this file to update any copy without touching
// UI components.
// ─────────────────────────────────────────────────────────────────────────────

export const meta = {
  name: 'Keyur Chaudhari',
  title: 'Keyur Chaudhari — AI Developer & Builder',
  description:
    'AI Developer specialising in Agentic AI, RAG pipelines, and end-to-end LLM products. Based in Navi Mumbai.',
  url: 'https://keyur536.github.io', // update when deployed
  twitterHandle: '',
};

export const hero = {
  greeting: 'Hi, I\'m',
  name: 'Keyur Chaudhari',
  tagline: 'Builder Who Builds AI‑Enabled Solutions For Your Problem',
  subtexts: [
    'AI Builder',
    'Agentic Systems',
    'RAG Pipelines',
    'LLM Products',
  ],
  subline:
    'I design and ship end-to-end AI systems — from agentic architectures to RAG pipelines — that solve real problems.',
  cta: {
    primary: { label: 'View Work', href: '#work' },
    secondary: { label: 'Download Resume', href: '/resume.pdf' },
    github: { label: 'GitHub', href: 'https://github.com/keyur536' },
  },
};

export const about = {
  bio: [
    'I\'m an AI developer who builds end-to-end intelligent systems — from agentic multi-agent pipelines to local-first LLM products.',
    'My focus is on shipping AI that actually works in the real world: grounded in RAG, powered by LangGraph, and designed for practical impact.',
    'I graduated with a B.E. from Bharati Vidyapeeth College of Engineering (2021–2025), where I also won a pitch competition and reached the national hackathon finals.',
  ],
  education: [
    {
      degree: 'PGCP-AI',
      institution: 'Centre for Development of Advanced Computing (CDAC)',
      years: '2026',
      location: 'Navi Mumbai',
    },
    {
      degree: 'Bachelor of Engineering (B.E.)',
      institution: 'Bharati Vidyapeeth College of Engineering',
      years: '2021 – 2025',
      location: 'Navi Mumbai, India',
    },
  ],
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / ML Core',
    skills: ['Agentic AI', 'LLMs', 'RAG', 'Prompt Engineering', 'LangGraph', 'Multi-Agent Systems'],
  },
  {
    label: 'AI Tooling',
    skills: [
      'OpenAI GPT-4o / GPT-5.5',
      'Ollama',
      'Whisper',
      'MediaPipe',
      'InsightFace (RetinaFace + ArcFace)',
      'Sentence-Transformers',
      'ChromaDB',
      'pgvector',
      'Docling',
      'Qwen2.5',
    ],
  },
  {
    label: 'Backend',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'SQLite'],
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit'],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  github: string;
  demo: string;
  video: string;   // path relative to /public, e.g. '/videos/acip-demo.mp4'
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'acip',
    title: 'Autonomous Customs Intelligence Platform',
    subtitle: 'Multi-agent customs compliance automation',
    date: 'July 2026',
    problem:
      'Customs compliance is manually intensive — importers wade through hundreds of regulatory documents, multi-step OCR pipelines, duty calculations, and Bill of Entry generation, all prone to human error.',
    approach:
      'Built a LangGraph-based multi-agent system where specialised agents handle each step: OCR extraction → validation → RAG compliance checking against CBIC/DGFT knowledge base → duty calculation → Bill of Entry generation, with human-in-the-loop review at key decision points.',
    outcome:
      'End-to-end automated compliance pipeline with citation-backed regulatory checks, dramatically reducing manual review time.',
    highlights: [
      'LangGraph agentic architecture with specialised agents per task',
      'RAG over CBIC/DGFT regulatory knowledge base (pgvector)',
      'OCR → validation → compliance → duty → BoE pipeline',
      'Human-in-the-loop review gates',
      'Docling for document ingestion',
    ],
    stack: ['Python', 'FastAPI', 'React.js', 'LangGraph', 'OpenAI GPT-5.5', 'Ollama', 'Docling', 'PostgreSQL', 'pgvector'],
    github: 'https://github.com/CDAC-Final-project-KAPSS/ACIP',
    demo: '',
    video: '/videos/acip-demo.mp4',
  },
  {
    id: 'speakx-pro',
    title: 'SpeakX-Pro',
    subtitle: 'AI public speaking coach — 100% local, no cloud APIs',
    date: 'June 2026',
    problem:
      'Public speaking coaches are expensive and inaccessible. Existing AI tools send your data to the cloud and analyse only one or two metrics.',
    approach:
      'Built a fully local AI coach that analyses 18+ communication metrics across audio, video, and NLP dimensions — all running on your machine. Whisper handles transcription, MediaPipe tracks eye contact and posture, Qwen2.5-7B via Ollama gives feedback and grammar analysis, and a RAG chatbot over ChromaDB stores session history for progress tracking.',
    outcome:
      'A privacy-first, offline-capable AI coach that gives richer feedback than cloud tools — analysing delivery, posture, grammar, fluency, and more.',
    highlights: [
      '18+ communication metrics (audio, video, NLP)',
      '100% local — no cloud APIs, full privacy',
      'Whisper for transcription, MediaPipe for body language',
      'Qwen2.5-7B via Ollama for feedback & grammar',
      'RAG chatbot (ChromaDB + Sentence-Transformers + SQLite) for session history',
    ],
    stack: ['Python', 'Whisper', 'MediaPipe', 'Qwen2.5-7B', 'Ollama', 'ChromaDB', 'Sentence-Transformers', 'SQLite'],
    github: 'https://github.com/keyur536/SpeakX-Pro',
    demo: '',
    video: '/videos/speakx-demo.mp4',
  },
  {
    id: 'sannidhi',
    title: 'SANNIDHI',
    subtitle: 'Intelligent face-recognition attendance system',
    date: 'May 2026',
    problem:
      'Manual classroom attendance is time-consuming and error-prone. Existing systems require expensive hardware or cloud uploads of student photos.',
    approach:
      'Built a face-recognition system that marks attendance from a single classroom image. InsightFace (RetinaFace for detection + ArcFace for 512-dim embeddings) handles recognition with cosine similarity matching — no retraining needed when new students join. A Streamlit dashboard connects to SQLite for instant reporting.',
    outcome:
      'One-click attendance from a class photo — works in crowded classrooms, no cloud upload, no retraining for new students.',
    highlights: [
      'Single-image attendance from full classroom photos',
      'InsightFace: RetinaFace (detection) + ArcFace (512-dim embeddings)',
      'Cosine similarity matching — no retraining for new students',
      'Streamlit dashboard + SQLite reporting',
      'Fully local, privacy-preserving',
    ],
    stack: ['Python', 'InsightFace', 'RetinaFace', 'ArcFace', 'Streamlit', 'SQLite'],
    github: 'https://github.com/keyur536/Sannidhi',
    demo: '',
    video: '/videos/sannidhi-demo.mp4',
  },
];

export type Award = {
  title: string;
  event: string;
  org: string;
  year: string;
};

export const awards: Award[] = [
  {
    title: '2nd Prize',
    event: 'E-Cell Pitch Competition',
    org: 'Bharati Vidyapeeth College of Engineering',
    year: '2024',
  },
  {
    title: 'National Finalist — Top 10',
    event: 'HackOverflow 2.0',
    org: 'Pillai College of Engineering',
    year: '2024',
  },
];

export const contact = {
  email: 'keyur.chaudhari.cmfeb26@gmail.com',
  github: 'https://github.com/keyur536',
  linkedin: 'https://www.linkedin.com/in/keyur536/',
  location: 'Navi Mumbai, India',
  resume: '/resume.pdf',
};
