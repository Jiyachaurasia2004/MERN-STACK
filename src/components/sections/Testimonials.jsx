import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  { name: 'Rahul Sharma', company: 'TCS', text: 'This course completely transformed my career. The projects are top-notch!', rating: 5, img: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Priya Patel', company: 'Infosys', text: 'Best MERN stack course ever. The instructor explains complex concepts simply.', rating: 5, img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Amit Kumar', company: 'Wipro', text: 'Got placed within 2 months of completing this course. Highly recommended.', rating: 5, img: 'https://i.pravatar.cc/150?img=15' },
  { name: 'Sneha Gupta', company: 'Accenture', text: 'Amazing content. I love how detailed every module is.', rating: 5, img: 'https://i.pravatar.cc/150?img=9' },
];

const TESTIMONIAL_COUNT = testimonials.length;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_COUNT);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_COUNT);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          badge="Student Success Stories"
          title={<>Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">5,000+ Developers</span></>}
          subtitle="Our students don't just learn — they get hired. Here's what some of our top graduates say about their transformation."
        />
        <div className="relative">
          <div className="overflow-hidden relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex justify-center"
              >
                <div className="glass-card p-8 rounded-2xl w-full max-w-2xl text-center flex flex-col items-center">
                  <div className="flex text-yellow-400 mb-4 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic transition-colors duration-500 text-lg">"{testimonials[currentIndex].text}"</p>
                  <div className="flex flex-col items-center gap-2 mt-auto">
                    <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full border-2 border-primary/50" />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-bold transition-colors duration-500">{testimonials[currentIndex].name}</h4>
                      <p className="text-xs text-primary">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:left-[10%] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 dark:bg-black/20 hover:bg-primary text-gray-800 dark:text-white hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-[10%] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 dark:bg-black/20 hover:bg-primary text-gray-800 dark:text-white hover:text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
