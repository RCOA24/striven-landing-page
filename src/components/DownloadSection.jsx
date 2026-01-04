import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Globe, Github, CloudDownload, MessageSquare, Copy, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const DownloadSection = () => {
  const phoneNumber = "09217167659";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success('Phone number copied!', {
        description: 'The number has been copied to your clipboard.',
        duration: 3000,
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      });
    } catch (err) {
      toast.error('Failed to copy', {
        description: 'Please try copying manually.',
        duration: 3000,
      });
    }
  };

  return (
    <section id="download" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Download the native Android app or use the browser version for instant access.
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-4 max-w-xl mx-auto">
            As a solo developer, I am building Striven from the ground up. Contributions of any size help keep the project alive, and your feedback is essential for squashing bugs and refining features. Thank you for being part of the journey. 
          </p>
          <div className="mb-6">
            <a 
              href="https://tally.so/r/1AdEYL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="font-medium">Share Feedback & Bug Reports</span>
            </a>
          </div>

          {/* Maya Payment Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="max-w-5xl mx-auto">
              {/* Desktop Layout: Side by Side */}
              <div className="hidden md:grid md:grid-cols-2 gap-4 items-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
                {/* Left Side: QR Code */}
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-20"></div>
                    <img 
                      src="/maya.jpg" 
                      alt="Maya Payment QR Code" 
                      className="relative w-full max-w-xs rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Right Side: Copy Button & Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Support via Maya
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Scan the QR code with your Maya app or copy the number below to send your contribution
                    </p>
                  </div>
                  
                  <button
                    onClick={copyToClipboard}
                    className="w-full group relative px-8 py-5 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      <Copy className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span className="text-xl font-bold tracking-wider">Click to copy the number</span>
                    </div>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-green-500 to-emerald-600 transition-transform duration-500 ease-out"></div>
                  </button>
                  
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Secure payments via Maya InstaPay • Transfer fees may apply
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout: Stacked */}
              <div className="md:hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <img 
                    src="/maya.jpg" 
                    alt="Maya Payment QR Code" 
                    className="w-full max-w-sm mx-auto rounded-xl shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Scan with Maya app or</span>
                  </div>
                  
                  <button
                    onClick={copyToClipboard}
                    className="w-full group relative px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-bold tracking-wider">Click to copy the number</span>
                    </div>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-green-500 to-emerald-600 transition-transform duration-500 ease-out"></div>
                  </button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 text-center">
                    Secure payments via Maya InstaPay • Transfer fees may apply
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

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
            
  
            <a href="https://rodneyaustria.gumroad.com/l/lphoir" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
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
