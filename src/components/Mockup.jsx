import React from 'react';

const Mockup = ({ videoSrc }) => {
  return (
    <div className="relative mx-auto">
      {/* Phone Frame */}
      <div className="relative border-gray-900 dark:border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl shadow-primary/10 ring-1 ring-gray-700/50">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28px] w-[100px] bg-black rounded-b-2xl z-20"></div>
        
        {/* Side Buttons */}
        <div className="h-[40px] w-[4px] bg-gray-800 absolute -left-[16px] top-[100px] rounded-l-lg"></div>
        <div className="h-[70px] w-[4px] bg-gray-800 absolute -left-[16px] top-[160px] rounded-l-lg"></div>
        <div className="h-[70px] w-[4px] bg-gray-800 absolute -left-[16px] top-[240px] rounded-l-lg"></div>
        <div className="h-[90px] w-[4px] bg-gray-800 absolute -right-[16px] top-[180px] rounded-r-lg"></div>

        {/* Screen Content */}
        <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-950 relative z-10">
          {videoSrc ? (
              <video src={videoSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
          ) : (
              <div className="w-full h-full flex flex-col relative">
                  {/* Status Bar Placeholder */}
                  <div className="h-12 w-full flex justify-between items-center px-6 pt-2">
                    <span className="text-xs font-medium text-gray-900 dark:text-white">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2.5 bg-gray-900 dark:bg-white rounded-[1px]"></div>
                      <div className="w-0.5 h-2.5 bg-gray-900 dark:bg-white/30 rounded-[1px]"></div>
                    </div>
                  </div>

                  {/* App UI Placeholder */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black p-6 text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary animate-pulse">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Striven</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your AI Fitness Companion</p>
                      
                      {/* Fake UI Elements */}
                      <div className="w-full mt-12 space-y-3">
                        <div className="h-16 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"></div>
                        <div className="h-16 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"></div>
                        <div className="h-16 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"></div>
                      </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-gray-900 dark:bg-white rounded-full opacity-50"></div>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mockup;
