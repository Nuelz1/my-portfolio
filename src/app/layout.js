import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dev Emmanuel | React & Next.js Frontend Developer',
    template: '%s | Dev Emmanuel',
  },
  description:
    'Frontend developer specializing in React, Next.js, and interactive web applications with modern UX and optimized performance.',
  keywords: ['React Developer', 'Next.js Developer', 'Frontend Engineer', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Dev Emmanuel' }],
  creator: 'Dev Emmanuel',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Dev Emmanuel | React & Next.js Frontend Developer',
    description: 'Building high-performance, interactive web applications with React and Next.js.',
    url: SITE_URL,
    siteName: 'Dev Emmanuel Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dev Emmanuel Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Emmanuel | React & Next.js Frontend Developer',
    description: 'Building high-performance, interactive web applications with React and Next.js.',
    images: ['/og-image.png'],
    creator: '@nuelofficial6',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dev Emmanuel',
    url: SITE_URL,
    jobTitle: 'Frontend Developer',
    sameAs: [
      'https://github.com/Nuelz1',
      'https://x.com/nuelofficial6',
    ],
    knowsAbout: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Web Performance'],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}