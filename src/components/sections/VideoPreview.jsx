import { motion } from 'framer-motion';
import { Play, Clock, BarChart, Globe, Users, Star, Maximize } from 'lucide-react';
import coursePreviewVideo from '../../assets/course-preview.mp4';
import { useRef, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const VideoPreview = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };
  return (
    <section id="course" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          badge="See It In Action"
          title={<>Watch What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">Create</span></>}
          subtitle="Get a sneak peek into our production-ready projects. This is just a fraction of what you'll build — end to end, in full stack."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5 relative group"
        >
          {/* Video Container */}
          <div className="relative rounded-[24px] overflow-hidden aspect-video bg-gray-900 border border-white/10 group-hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <video 
              ref={videoRef}
              src={coursePreviewVideo}
              poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
              autoPlay
              muted
              loop
              onClick={togglePlay}
              className="w-full h-full object-cover"
            />
            
            {/* Custom Controls UI Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
              {!isPlaying && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110 shadow-[0_0_30px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] pointer-events-auto"
                >
                  <Play size={32} className="ml-2 fill-white" />
                </button>
              )}
            </div>

            <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:text-primary hover:bg-black/80 transition-all"
                aria-label="Fullscreen"
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-primary transition-colors duration-500">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Duration</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-500">45.5 Hours</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-secondary transition-colors duration-500">
                <BarChart size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Level</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-500">Beginner to Pro</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-primary transition-colors duration-500">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Language</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-500">English</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-secondary transition-colors duration-500">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Students</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-500">5,240+</div>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-yellow-500 dark:text-yellow-400 transition-colors duration-500">
                <Star size={20} className="fill-yellow-500 dark:fill-yellow-400 transition-colors duration-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Rating</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1 transition-colors duration-500">4.9 <span className="text-xs text-gray-500">(1.2k Reviews)</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPreview;
