import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/StrivenLogo.png" alt="Striven Logo" className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Striven</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
              Enterprise-grade fitness intelligence powered by AI. Transform your health journey with professional-grade tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Features
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#tech" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Technology
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#download" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Download
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a 
                href="https://github.com/RCOA24" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rodney-austria-/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Developed with excellence by<br />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Rodney Charles O. Austria</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Striven. All rights reserved. Built with passion and precision.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-500">
              <Link to="/privacy" className="hover:text-primary dark:hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary dark:hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
