import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Mockup = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative mx-auto group">
      {/* Premium Phone Frame */}
      <div className="relative border-gray-900 dark:border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 border-[14px] rounded-[3.5rem] h-[650px] w-[320px] shadow-2xl shadow-black/50 ring-2 ring-gray-700/30 hover:ring-primary/30 transition-all duration-500">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[110px] bg-black rounded-b-3xl z-20 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        </div>
        
        {/* Premium Side Buttons with Metallic Effect */}
        <div className="h-[46px] w-[3px] bg-gradient-to-b from-gray-700 to-gray-800 absolute -left-[17px] top-[100px] rounded-l-lg shadow-inner"></div>
        <div className="h-[76px] w-[3px] bg-gradient-to-b from-gray-700 to-gray-800 absolute -left-[17px] top-[160px] rounded-l-lg shadow-inner"></div>
        <div className="h-[76px] w-[3px] bg-gradient-to-b from-gray-700 to-gray-800 absolute -left-[17px] top-[246px] rounded-l-lg shadow-inner"></div>
        <div className="h-[96px] w-[3px] bg-gradient-to-b from-gray-700 to-gray-800 absolute -right-[17px] top-[180px] rounded-r-lg shadow-inner"></div>

        {/* Screen Content with Premium Bezel */}
        <div className="rounded-[2.8rem] overflow-hidden w-full h-full bg-white dark:bg-gray-950 relative z-10 ring-1 ring-inset ring-gray-800/50">
          {videoSrc ? (
            <>
              <video 
                ref={videoRef}
                src={videoSrc} 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted={isMuted} 
                playsInline 
              />
              {/* Premium Control Panel - Always visible on mobile, hover on desktop */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-black/70 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={togglePlay}
                  className="p-2.5 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl text-white transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 fill-white" />
                  )}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl text-white transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </>
          ) : (
              <div className="w-full h-full flex flex-col relative">
                  {/* Premium Status Bar */}
                  <div className="h-14 w-full flex justify-between items-center px-7 pt-3 bg-gradient-to-b from-gray-100/50 to-transparent dark:from-gray-900/50">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight">9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="w-5 h-3 bg-gray-900 dark:bg-white rounded-[2px] relative">
                        <div className="absolute inset-0.5 bg-primary/20 rounded-[1px]"></div>
                      </div>
                      <div className="w-0.5 h-3 bg-gray-900 dark:bg-white/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* Premium App UI Placeholder */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-black p-8 text-center">
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-[2rem] blur-2xl"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-emerald-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-primary/30 animate-pulse">
                          <Play className="w-12 h-12 fill-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">Striven</h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Enterprise Fitness Intelligence</p>
                      
                      {/* Premium Feature Cards */}
                      <div className="w-full mt-10 space-y-3">
                        <div className="h-16 w-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"></div>
                        <div className="h-16 w-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"></div>
                        <div className="h-16 w-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"></div>
                      </div>
                  </div>
                  
                  {/* Premium Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[130px] h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent dark:from-transparent dark:via-white dark:to-transparent rounded-full opacity-40"></div>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mockup;
