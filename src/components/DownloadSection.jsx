import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Globe, Github, CloudDownload, MessageSquare, Heart } from 'lucide-react';
import SupportModal from './SupportModal';

const DownloadSection = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <section id="download" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <SupportModal isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Download the native Android app or use the browser version for instant access.
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            As a solo developer, I am building Striven from the ground up. Contributions of any size help keep the project alive, and your feedback is essential for squashing bugs and refining features. Thank you for being part of the journey.
          </p>

          <div className="flex flex-col items-center gap-6 mb-12">
            <a 
              href="https://tally.so/r/1AdEYL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="font-medium">Share Feedback & Bug Reports</span>
            </a>

            <button 
              onClick={() => setIsSupportModalOpen(true)}
              className="flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <Heart className="w-6 h-6 mr-3 text-pink-500 fill-pink-500" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Support Development</div>
                <div className="text-lg font-bold">Donate via GCash</div>
              </div>
            </button>
          </div>

          
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/StrivenFitness.apk" download className="flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <CloudDownload className="w-8 h-8 mr-3" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Fast & Secure</div>
                <div className="text-lg font-bold">Direct Download</div>
              </div>
            </a>

            <a href="https://striven.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-emerald-900 text-white rounded-2xl hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Globe className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Use Web App</div>
                <div className="text-lg font-bold">Launch Browser Version</div>
              </div>
            </a>

            <a href="https://github.com/RCOA24/Striven/releases/tag/v1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Github className="w-8 h-8 mr-3" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Download via</div>
                <div className="text-lg font-bold">GitHub Releases</div>
              </div>
            </a>
            
  
            <a href="https://gumroad.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <Download className="w-6 h-6 mr-3 text-pink-500" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Support me at</div>
                <div className="text-lg font-bold">Gumroad</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
