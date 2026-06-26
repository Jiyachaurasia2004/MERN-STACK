import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import { useModal } from '../../context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();

  const handleEnrollClick = () => {
    openModal(
      'Enroll Now',
      <div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Ready to become a MERN stack master? Complete your registration to secure your spot.
        </p>
        <button 
          onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            document.querySelector('[aria-label="Close"]')?.click();
          }}
          className="btn-primary w-full"
        >
          Proceed to Registration Form
        </button>
      </div>
    );
  };

  const handleWatchDemo = () => {
    const videoSection = document.getElementById('course');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
      // Find the video element and focus/play it
      setTimeout(() => {
        const video = videoSection.querySelector('video');
        if (video) {
          video.focus();
          video.play().catch(e => console.log('Autoplay prevented', e));
        }
      }, 800);
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-card border-secondary/30 text-secondary text-sm font-medium tracking-wide">
              🚀 The Ultimate MERN Stack Course
            </div>
            
            <h1 className="heading-xl mb-6 leading-tight">
              Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MERN Stack</span> Developer
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg transition-colors duration-500">
              Learn React, Node.js, Express.js and MongoDB from scratch. Build production-ready full-stack applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={handleEnrollClick} className="btn-primary text-lg">
                Enroll Now
              </button>
              <button onClick={handleWatchDemo} className="btn-outline text-lg flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/20 transition-colors relative overflow-hidden">
                  <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out" />
                  <Play size={16} className="text-gray-700 dark:text-white group-hover:text-primary fill-transparent group-hover:fill-primary relative z-10" />
                </div>
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">
                <span className="text-gray-900 dark:text-white font-bold">5,000+</span> students already enrolled
              </div>
            </div>
          </motion.div>
          
          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center hidden lg:flex"
          >
            {/* Central Glow */}
            <div className="absolute w-64 h-64 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
            
            {/* Central Core */}
            <div className="absolute z-10 w-24 h-24 rounded-full glass-card flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary animate-spin-slow flex items-center justify-center opacity-80" />
            </div>

            {/* Orbiting Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 rounded-full border border-white/5 border-dashed"
            >
              {/* React */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 glass-card rounded-xl flex items-center justify-center" style={{ animation: 'spin-reverse 20s linear infinite' }}>
                <SiReact className="text-[#61DAFB] text-3xl" />
              </div>
              
              {/* Node.js */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-16 h-16 glass-card rounded-xl flex items-center justify-center" style={{ animation: 'spin-reverse 20s linear infinite' }}>
                <SiNodedotjs className="text-[#339933] text-3xl" />
              </div>
              
              {/* MongoDB */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 glass-card rounded-xl flex items-center justify-center" style={{ animation: 'spin-reverse 20s linear infinite' }}>
                <SiMongodb className="text-[#47A248] text-3xl" />
              </div>
              
              {/* Express */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-16 h-16 glass-card rounded-xl flex items-center justify-center" style={{ animation: 'spin-reverse 20s linear infinite' }}>
                <SiExpress className="text-white text-3xl" />
              </div>
            </motion.div>
            

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
