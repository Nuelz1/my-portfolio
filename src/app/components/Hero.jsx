'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 min-h-screen bg-slate-50 text-slate-900 pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Your Content & Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide border border-blue-100">
            Frontend & Next.js Developer
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Building Fast, Scalable & Interactive Web Apps
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            Specializing in React, Next.js, Tailwind CSS, and state management to build crisp user interfaces and modern web applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#portfolio" 
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 transition"
            >
              Explore Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-medium transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Your Authentic Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 max-w-md">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900">3+</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Full-Stack & Frontend Apps</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900">100%</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Responsive Design</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900">Next.js</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Primary Framework</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Workstation Image or Code Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Subtle Accent Backdrop */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-2xl blur-3xl -z-10" />

          {/* Main Hero Card containing your workstation photo */}
          <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
            <Image
              src="/hero-bg.jpg" // Your workstation image from /public
              alt="Workstation Setup"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/80 backdrop-blur-md text-white rounded-xl text-xs flex justify-between items-center border border-white/10">
              <span className="font-medium">Currently building with Next.js & Tailwind</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}