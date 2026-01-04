import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative"
      >
        <button 
          onClick={handleClose}
          className="absolute -top-2 right-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Striven application and website, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. Striven is an open-source project available on 
              <a href="https://github.com/RCOA24/Striven" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">GitHub</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Open Source License</h2>
            <p>
              Striven is distributed under the <strong>MIT License</strong>. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the following conditions:
            </p>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-mono">
              <p>
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
              </p>
              <p className="mt-2">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Medical Disclaimer</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="font-medium text-red-800 dark:text-red-200">
                Striven is not a medical device and does not provide medical advice.
              </p>
              <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                The contents of the Striven application, such as text, graphics, images, and other material are for 
                informational purposes only. Always seek the advice of your physician or other qualified health provider 
                with any questions you may have regarding a medical condition or before starting any new diet or exercise program.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on 
              Striven's website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title.
            </p>
            <p className="mt-2">
              For full usage rights regarding the source code, please refer to the <a href="https://github.com/RCOA24/Striven/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIT License</a> in our repository.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. User Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current 
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination 
              of your account on our Service.5
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Striven or its suppliers be liable for any damages (including, without limitation, damages 
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on Striven's website, even if Striven or a Striven authorized representative has been notified 
              orally or in writing of the possibility of such damage.
            </p>
          </section>

          <div className="pt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
