'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, User, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  'Skilled in HTML, CSS, JavaScript, Tailwind CSS, and Next.js.',
  'Focused on performance, responsiveness, and component simplicity.',
  'Experienced in building custom web apps, dashboards, and full-stack solutions.',
];

const contactDetails = [
  { label: 'Name', value: 'Osho Emmanuel', icon: User },
  { label: 'Phone', value: '+234 8154358070', icon: Phone },
  { label: 'Location', value: 'Lagos, Nigeria', icon: MapPin },
  { label: 'Email', value: 'oshoemmanuel3@gmail.com', icon: Mail },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28 bg-white text-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Web Developer
          </h2>
          {/* Decorative Wavy Accent */}
          <div className="flex justify-center pt-1">
            <svg className="w-24 h-3 text-orange-400" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6C15 12 25 0 38 6C51 12 61 0 74 6C87 12 97 2 98 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card / Profile Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl aspect-4/5 flex items-center justify-center group">
              {/* Image Placeholder or Actual Headshot */}
              <Image
                src="/hero-bg.jpg" // Path to your photo in public folder
                alt="Dev Emmanuel"
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-lg">Osho Emmanuel</p>
                <p className="text-xs text-slate-200">Frontend & Next.js Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              I am a dedicated web developer with strong expertise in frontend technologies and interactive web architecture. I enjoy creating practical digital solutions that solve real-world problems—from responsive landing pages to complex full-stack web applications.
            </p>

            {/* Checklist Highlights */}
            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Info Grid Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-sm">
              {contactDetails.map((detail) => {
                const IconComponent = detail.icon;
                return (
                  <div key={detail.label} className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-orange-100/60 text-orange-600">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{detail.label}</p>
                      <p className="text-sm font-semibold text-slate-800 truncate">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}