import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: 'Do I need prior coding experience?', a: 'No, this course is designed for beginners. We start from the absolute basics of HTML and CSS before moving to advanced concepts.' },
    { q: 'Will I get a certificate?', a: 'Yes, upon successful completion of the course and projects, you will receive an industry-recognized certificate.' },
    { q: 'How long is the course access?', a: 'You get lifetime access to the course content, including all future updates and additions.' },
    { q: 'Is there a refund policy?', a: 'Yes, we offer a 7-day no-questions-asked money-back guarantee.' },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2 className="heading-lg mb-4">Frequently Asked Questions</motion.h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 flex items-center justify-between text-left text-gray-900 dark:text-white font-semibold focus:outline-none transition-colors duration-500" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
