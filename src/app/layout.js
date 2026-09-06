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

// SEO METADATA - WEEK 1 LEARNING
export const metadata = {
  title: "Dev Emmanuel | React/Next.js Frontend Developer",
  description: "Frontend developer specializing in React, Next.js, and modern web development. Building high-performance, SEO-optimized applications.",
  openGraph: {
    title: "Dev Emmanuel | React/Next.js Developer",
    description: "Building beautiful, high-performance web applications with React and Next.js.",
    url: "https://devemmanuel.com",
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
    creator: "@nuelz1007",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://devemmanuel.com" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}