import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { meta } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: ['AI Developer', 'AI Builder', 'Agentic AI', 'RAG', 'LLM', 'LangGraph', 'Keyur Chaudhari'],
  authors: [{ name: meta.name }],
  creator: meta.name,
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:          meta.url,
    title:        meta.title,
    description:  meta.description,
    siteName:     meta.name,
  },
  twitter: {
    card:        'summary_large_image',
    title:        meta.title,
    description:  meta.description,
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
