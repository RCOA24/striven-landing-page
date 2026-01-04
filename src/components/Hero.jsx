import React from 'react';
import { motion } from 'framer-motion';
import Mockup from './Mockup';
import { ArrowRight, Play, Zap } from 'lucide-react';

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
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] will-change-transform"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-primary/10 to-emerald-500/10 dark:from-primary/20 dark:to-emerald-500/20 border border-primary/20 dark:border-primary/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-all cursor-default group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Version 1.0 Now Available
            </span>
            <Zap className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
          </motion.div>
            
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gray-900 dark:text-white leading-[1.1]"
          >
            Transform Your
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Fitness Journey
            </span>
          </motion.h1>
            
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            AI-powered nutrition tracking meets competitive motivation. 
            <span className="font-semibold text-gray-900 dark:text-white"> Striven</span> delivers enterprise-grade fitness intelligence designed for your success.
          </motion.p>
            
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <a href="#download" className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 dark:text-black rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/50 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary to-emerald-600 transition-transform duration-500 ease-out"></div>
            </a>
            
            <a href="#mockup" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-gray-700 dark:text-gray-200 transition-all duration-300 bg-white dark:bg-gray-800 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-primary dark:hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5">
              <Play className="mr-2 w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Mockup Container */}
        <motion.div
          id="mockup"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center perspective-1000"
        >
          {/* Enhanced Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[700px] bg-gradient-to-b from-primary/40 via-emerald-500/30 to-primary/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-full blur-[80px] -z-10"></div>
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
