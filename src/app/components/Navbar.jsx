'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './icons';


const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Nuelz1', icon: GithubIcon },
  { name: 'X', href: 'https://x.com/nuelofficial6', icon: TwitterIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-slate-900/5">
        
        {/* Brand Name */}
        <a 
          href="#home" 
          className="font-bold text-lg text-slate-900 tracking-tight hover:text-orange-600 transition"
        >
          Dev_Emmanuel
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative py-1 transition-colors ${
                  activeLink === link.name ? 'text-orange-500 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3 text-slate-600">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                className="p-1.5 hover:text-orange-500 transition-colors"
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-orange-500 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl p-6 shadow-xl md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`text-base font-medium transition-colors ${
                  activeLink === link.name ? 'text-orange-500 font-semibold' : 'text-slate-700'
                }`}
              >
                {link.name}
              </a>
            ))}

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}