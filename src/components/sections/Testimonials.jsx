import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Rahul Sharma', company: 'TCS', text: 'This course completely transformed my career. The projects are top-notch!', rating: 5, img: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Priya Patel', company: 'Infosys', text: 'Best MERN stack course ever. The instructor explains complex concepts simply.', rating: 5, img: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Amit Kumar', company: 'Wipro', text: 'Got placed within 2 months of completing this course. Highly recommended.', rating: 5, img: 'https://i.pravatar.cc/150?img=15' },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 className="heading-lg mb-4">Student Success</motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="glass-card p-8 rounded-2xl relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic transition-colors duration-500">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/50" />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold transition-colors duration-500">{t.name}</h4>
                  <p className="text-xs text-primary">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
