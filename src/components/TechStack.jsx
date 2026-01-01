import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Capacitor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitor/capacitor-original.svg' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Framer Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  { name: 'Gemini AI', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
  { name: 'Google Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-gray-50 dark:bg-dark transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Powering Striven</h2>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Built with Modern Technologies</h3>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 py-4">
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-8 group-hover:pause">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4 mb-4 transition-transform hover:scale-110 duration-300">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 py-4">
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-8 group-hover:pause">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4 mb-4 transition-transform hover:scale-110 duration-300">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
