'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Next.js', 'React', 'Full Stack'];

const projects = [
  {
    id: 1,
    title: 'DevScope Analytics',
    category: 'Next.js',
    description: 'A developer performance dashboard built with Next.js App Router, Tailwind CSS, and Recharts.',
    tags: ['Next.js', 'Tailwind CSS', 'Recharts'],
    image: '/ALX-Capstone-Project-DevScope.jpeg',
    liveUrl: 'https://alx-capstone-project-dev-scope.vercel.app/',
    githubUrl: 'https://github.com/Nuelz1/ALX-Capstone-Project-DevScope',
  },
  {
    id: 2,
    title: 'FotoBook Studio',
    category: 'React',
    description: 'An interactive portfolio app for photographers with instant client previews and image gallery filtering.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    image: '',
    liveUrl: '',
    githubUrl: 'https://github.com/Nuelz1/fotobook',
  },
  {
    id: 3,
    title: 'FOKiiS E-Commerce',
    category: 'Full Stack',
    description: 'Full-stack platform with dynamic checkout, product inventory management, and database integration.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    image: '',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Nuelz1',
  },
];

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="scroll-mt-24 py-20 md:py-28 bg-white text-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase">
              Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Featured Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto border border-slate-200/60">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors ${
                  activeCategory === category ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image / Thumbnail Section */}
                <div className="relative aspect-16/10 bg-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white rounded-full text-slate-900 hover:bg-orange-500 hover:text-white transition-colors shadow-md"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
            )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white rounded-full text-slate-900 hover:bg-orange-500 hover:text-white transition-colors shadow-md"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-sm font-semibold text-slate-300">
                      {project.title} Preview
                    </span>
                  </div>

                  )}

                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}