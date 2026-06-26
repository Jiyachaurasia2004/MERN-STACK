import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Curriculum = () => {
  const modules = [
    {
      id: '01',
      title: 'Frontend Fundamentals',
      topics: ['HTML5 Semantic Elements', 'Advanced CSS3 & Flexbox/Grid', 'JavaScript ES6+ Essentials', 'DOM Manipulation & Events']
    },
    {
      id: '02',
      title: 'React.js Mastery',
      topics: ['React Components & Props', 'State Management & Hooks', 'React Router Navigation', 'API Integration & Context']
    },
    {
      id: '03',
      title: 'Node.js & Express API',
      topics: ['Node.js Core Modules', 'Express.js Server Setup', 'RESTful API Architecture', 'Middleware & Error Handling']
    },
    {
      id: '04',
      title: 'MongoDB & Deployment',
      topics: ['MongoDB Atlas & Mongoose', 'JWT Authentication & Security', 'Payment Gateway Integration', 'Vercel & Render Deployment']
    }
  ];

  return (
    <section id="curriculum" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Course Curriculum
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500"
          >
            A step-by-step roadmap to take you from a beginner to a job-ready full-stack developer.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {modules.map((module, index) => (
              <motion.div 
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-background border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-x-1/2 z-10 transition-colors duration-500" />

                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className={`glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors duration-500 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 tracking-widest uppercase">
                      Module {module.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">{module.title}</h3>
                    <ul className="space-y-3">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
                          <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
