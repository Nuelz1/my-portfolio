'use client';

import { motion } from 'framer-motion';
import { Layout, Code2, Smartphone, Gauge } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building clean, interactive user interfaces with React, Next.js, and modern CSS frameworks.',
  },
  {
    icon: Code2,
    title: 'Full Stack Web Apps',
    description: 'Developing complete end-to-end web applications with API integration and database management.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Ensuring seamless layout behavior across desktop, tablet, and mobile screens.',
  },
  {
    icon: Gauge,
    title: 'Performance & SEO Optimization',
    description: 'Structuring Next.js applications for fast load times, high Lighthouse scores, and search engine visibility.',
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 bg-slate-50 text-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Services & Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-orange-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}