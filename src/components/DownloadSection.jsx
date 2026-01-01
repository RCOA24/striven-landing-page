import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Globe } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Start your journey today.
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Available on all your devices. Download the native Android app or install the PWA for instant access.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Smartphone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
            
            <a href="https://striven.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Globe className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Use Web App</div>
                <div className="text-lg font-bold">Launch PWA</div>
              </div>
            </a>
            
            <a href="https://gumroad.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <Download className="w-6 h-6 mr-3 text-pink-500" />
              <div className="text-left">
                <div className="text-xs font-medium opacity-80">Support Us</div>
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
