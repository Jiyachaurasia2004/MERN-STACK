import { motion } from 'framer-motion';
import { Play, Clock, BarChart, Globe, Users, Star } from 'lucide-react';
import coursePreviewVideo from "../../assets/course-preview.mp4";

const VideoPreview = () => {
  return (
    <section id="course" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Course Preview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500"
          >
            Take a sneak peek into what you'll be building in this comprehensive bootcamp.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5 relative group"
        >
          {/* Video Container */}
          <div className="relative rounded-[24px] overflow-hidden aspect-video bg-gray-900 border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
            <video 
              src={coursePreviewVideo}
              poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
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
