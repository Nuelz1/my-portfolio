'use client';

import { ArrowUp } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './icons';



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-bold text-lg text-white">Dev Emmanuel</p>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Osho Emmanuel. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4 text-slate-400">
          <a
            href="https://github.com/Nuelz1"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/nuelofficial6"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Twitter Profile"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-300 rounded-full transition-colors shadow-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}