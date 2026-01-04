import React from 'react';
import { motion } from 'framer-motion';
import Mockup from './Mockup';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light dark:bg-dark transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3], 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-sm hover:shadow-md transition-all cursor-default"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Striven v1.0 is Live
            </span>
          </motion.div>
            
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gray-900 dark:text-white"
          >
            Fitness, <br className="hidden md:block" />
            <span className="text-primary">
              Reimagined.
            </span>
          </motion.h1>
            
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Your personal AI coach. Striven combines advanced food tracking with global leaderboards to keep you motivated, healthy, and connected.
          </motion.p>
            
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <a href="#download" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gray-900 dark:bg-white dark:text-black rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white overflow-hidden">
              <span className="relative z-10 flex items-center">
                Start Striving
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 ease-out opacity-20 dark:opacity-10"></div>
            </a>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg">
              <Play className="mr-2 w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-dark bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span>Loved by 1,000+ early adopters</span>
            </div>
          </motion.div>
        </div>

        {/* Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center perspective-1000"
        >
          {/* Glow effect behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full blur-[80px] -z-10"></div>
          
          {/* 
            To add a video to the mockup:
            1. Place your video file (e.g., demo.mp4) in the 'public/videos' folder.
            2. Pass the path to the videoSrc prop: <Mockup videoSrc="/videos/demo.mp4" />
          */}
          <Mockup videoSrc="/videos/FinalStriven.mp4" /> 
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
