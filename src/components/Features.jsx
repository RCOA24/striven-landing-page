import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Camera, Dumbbell, Calculator, Activity, BookOpen, Footprints, Database } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: "Unified Leaderboard",
    description: "Compete globally. Cross-platform sync keeps your rank updated in real-time across all devices.",
    color: "bg-yellow-500"
  },
  {
    icon: <Camera className="w-6 h-6 text-white" />,
    title: "AI Food Scanner",
    description: "Snap, track, done. Google Gemini Vision AI identifies meals and estimates macros instantly.",
    color: "bg-blue-500"
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-white" />,
    title: "Workout Organizer",
    description: "Your pocket trainer. Create plans, track PRs, and log sets with built-in rest timers.",
    color: "bg-red-500"
  },
  {
    icon: <Calculator className="w-6 h-6 text-white" />,
    title: "Smart Calculator",
    description: "Data-driven goals. AI analysis determines your ideal macros and BMR based on your metrics.",
    color: "bg-green-500"
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Health Monitoring",
    description: "Holistic wellness. Track hydration, monitor trends, and get insights for long-term health.",
    color: "bg-purple-500"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Exercise Library",
    description: "Learn proper form. Access thousands of exercises with HD GIFs and step-by-step guides.",
    color: "bg-orange-500"
  },
  {
    icon: <Footprints className="w-6 h-6 text-white" />,
    title: "Live Step Map",
    description: "Walk your way. Real-time step counting with live map syncing to visualize your daily path.",
    color: "bg-teal-500"
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Data Management",
    description: "Local Storage via Dexie.js, JSON Backup/Restore, and optional Cloud Sync to Supabase.",
    color: "bg-indigo-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Features</h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Everything you need.
            <span className="block text-gray-400 dark:text-gray-600">Nothing you don't.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-none"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
