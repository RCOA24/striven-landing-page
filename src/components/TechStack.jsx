import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const techs = [
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-400 to-blue-500' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: 'from-purple-400 to-indigo-500' },
  { name: 'Capacitor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitor/capacitor-original.svg', color: 'from-blue-400 to-indigo-600' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', color: 'from-emerald-400 to-green-600' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'from-cyan-300 to-blue-400' },
  { name: 'Framer Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg', color: 'from-pink-400 to-rose-500' },
  { name: 'Gemini AI', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', color: 'from-blue-500 to-purple-600' },
  { name: 'Google Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', color: 'from-red-400 to-yellow-500' },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-white dark:bg-dark transition-colors duration-300 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Built with Industry-Leading Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver exceptional performance, scalability, and user experience.
          </p>
        </motion.div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 py-8">
          {[...techs, ...techs].map((tech, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center mx-6 group cursor-pointer"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative w-28 h-28 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 group-hover:border-primary/50 dark:group-hover:border-primary/50 flex items-center justify-center p-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300" />
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-4 group-hover:text-primary dark:group-hover:text-primary transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-12 py-8">
          {[...techs, ...techs].map((tech, index) => (
            <motion.div 
              key={`second-${index}`} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center mx-6 group cursor-pointer"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative w-28 h-28 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 group-hover:border-primary/50 dark:group-hover:border-primary/50 flex items-center justify-center p-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300" />
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-4 group-hover:text-primary dark:group-hover:text-primary transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
