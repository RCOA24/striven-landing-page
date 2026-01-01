import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img src="/StrivenLogo.png" alt="Striven Logo" className="w-6 h-6" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Striven.</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Designed by Rodney Charles O. Austria.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/RCOA24" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rodney-austria-/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
