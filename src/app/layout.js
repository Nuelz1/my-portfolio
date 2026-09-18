import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devemmanuel.com";

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dev Emmanuel",
  "url": SITE_URL,
  "description": "Frontend developer specializing in React, Next.js, and modern web development",
  "image": "https://devemmanuel.com/og-image.jpg",
  "sameAs": [
    "https://github.com/Nuelz1",
    "https://linkedin.com/in/osho-emmanuel",
    "https://twitter.com/yourhandle"
  ],
  "contact": {
    "@type": "ContactPoint",
    "email": "oshoemmanuel3@gmail.com",
    "contactType": "Customer Service"
  }
};

export const metadata = {
  title: "Dev Emmanuel | React/Next.js Frontend Developer",
  description: "Frontend developer specializing in React, Next.js, and modern web development. Building high-performance, SEO-optimized applications.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dev Emmanuel | React/Next.js Developer",
    description: "Building beautiful, high-performance web applications with React and Next.js.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "https://devemmanuel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Emmanuel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Emmanuel | React/Next.js Developer",
    description: "Building beautiful, high-performance web applications.",
    creator: "@yourhandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}