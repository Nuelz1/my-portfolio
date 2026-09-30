'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Next JS', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git & GitHub', level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase">
            My Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Skills & Tech Stack
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-lg">{skill.name}</h3>
                <span className="text-xs font-semibold text-slate-500">{skill.level}%</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-orange-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}