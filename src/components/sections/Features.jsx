import { motion } from 'framer-motion';
import { Video, Code2, FileCode2, Award, Briefcase, Infinity, Users, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Video />, title: 'Live Classes', desc: 'Interactive sessions with real-time doubt clearing.' },
    { icon: <Code2 />, title: '10+ Projects', desc: 'Build real-world applications for your portfolio.' },
    { icon: <FileCode2 />, title: 'Assignments', desc: 'Regular coding challenges to test your skills.' },
    { icon: <Award />, title: 'Certificate', desc: 'Industry-recognized completion certificate.' },
    { icon: <Briefcase />, title: 'Placement Aid', desc: 'Resume building and dedicated placement support.' },
    { icon: <Infinity />, title: 'Lifetime Access', desc: 'Get updates and access to materials forever.' },
    { icon: <Users />, title: 'Mock Interviews', desc: 'Practice with industry experts to crack interviews.' },
    { icon: <BookOpen />, title: 'Study Material', desc: 'Comprehensive notes and source code provided.' },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500"
          >
            Everything you need to succeed as a modern web developer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
