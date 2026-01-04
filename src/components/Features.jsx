import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Camera, Dumbbell, Calculator, Activity, BookOpen, Footprints, Database, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: "Unified Leaderboard",
    description: "Compete globally with real-time cross-platform synchronization. Track your progress and rise through the ranks.",
    color: "from-yellow-500 to-amber-600",
    badge: "Competitive"
  },
  {
    icon: <Camera className="w-6 h-6 text-white" />,
    title: "AI Food Scanner",
    description: "Powered by Google Gemini Vision AI. Snap a photo and instantly receive accurate nutritional analysis.",
    color: "from-blue-500 to-blue-600",
    badge: "AI-Powered"
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-white" />,
    title: "Workout Organizer",
    description: "Comprehensive training management with custom plans, PR tracking, and intelligent rest timers.",
    color: "from-red-500 to-rose-600",
    badge: "Training"
  },
  {
    icon: <Calculator className="w-6 h-6 text-white" />,
    title: "Smart Calculator",
    description: "AI-driven macro calculations and BMR analysis tailored to your unique physiology and fitness goals.",
    color: "from-green-500 to-emerald-600",
    badge: "Personalized"
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Health Monitoring",
    description: "Comprehensive wellness tracking with hydration monitoring, trend analysis, and actionable health insights.",
    color: "from-purple-500 to-violet-600",
    badge: "Wellness"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Exercise Library",
    description: "Access an extensive database of exercises with high-definition demonstrations and detailed form guidance.",
    color: "from-orange-500 to-orange-600",
    badge: "Educational"
  },
  {
    icon: <Footprints className="w-6 h-6 text-white" />,
    title: "Live Step Tracker with Mapping",
    description: "Real-time step counting with GPS mapping integration. Visualize your daily movement patterns instantly.",
    color: "from-teal-500 to-cyan-600",
    badge: "Location"
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Data Management",
    description: "Enterprise-grade data handling with local storage, secure cloud synchronization, and seamless backup solutions.",
    color: "from-indigo-500 to-indigo-600",
    badge: "Secure"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Core Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Powerful features.
            <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Zero bloat.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built with cutting-edge technology to deliver a seamless, enterprise-grade fitness experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 h-full border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {feature.badge}
                  </span>
                </div>

                {/* Icon with Gradient */}
                <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-emerald-500/0 group-hover:from-primary/5 group-hover:to-emerald-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
