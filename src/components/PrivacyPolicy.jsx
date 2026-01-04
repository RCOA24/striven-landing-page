import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const PrivacyPolicy = () => {
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

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Striven. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              or use our mobile application and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Data Collection & Architecture</h2>
            <p className="mb-4">
              Striven operates on a <strong>"Local-First"</strong> architecture. This means that by default, your fitness data 
              (workouts, food logs, steps) is stored locally on your device using <strong>Dexie.js (IndexedDB)</strong>.
            </p>
            <p>
              We collect and process data in the following ways:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Local Data:</strong> Your personal health metrics, workout history, and nutrition logs are stored directly on your device for maximum privacy and performance.</li>
              <li><strong>Cloud Sync (Optional):</strong> If you choose to sign in, your data is synchronized with <strong>Supabase</strong> (our secure cloud backend) to enable cross-device usage and leaderboard participation.</li>
              <li><strong>AI Processing:</strong> When you use the Food Scanner, image data is temporarily processed by <strong>Google's Gemini API</strong> to identify food items. These images are not permanently stored by us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Data</h2>
            <p>We use your data to provide the Striven experience:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Fitness Tracking:</strong> To calculate calories, macros, and workout progress.</li>
              <li><strong>Leaderboards:</strong> To display your rank among other users (only if you opt-in via account creation).</li>
              <li><strong>Improvement:</strong> To refine our AI models and application performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data 
              to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: 
              <a href="mailto:support@striven.com" className="text-primary hover:underline ml-1">support@striven.com</a>
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

export default PrivacyPolicy;
