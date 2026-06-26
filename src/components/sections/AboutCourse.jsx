import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../ui/SectionHeading';

const AboutCourse = () => {
  const { openModal } = useModal();
  const cards = [
    {
      title: 'MongoDB',
      description: 'Learn NoSQL database design, CRUD operations, aggregation framework, and Mongoose ODM for efficient data modeling.',
      icon: <SiMongodb className="text-4xl text-[#47A248]" />,
      gradient: 'from-[#47A248]/20 to-transparent border-[#47A248]/30',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(71,162,72,0.3)]'
    },
    {
      title: 'Express.js',
      description: 'Master backend routing, middleware, RESTful API design, authentication, and error handling with Express.',
      icon: <SiExpress className="text-4xl text-gray-900 dark:text-white transition-colors duration-500" />,
      gradient: 'from-gray-500/20 to-transparent border-gray-500/30',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(156,163,175,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
    },
    {
      title: 'React.js',
      description: 'Build dynamic user interfaces, manage state with Hooks, implement routing, and interact with backend APIs seamlessly.',
      icon: <SiReact className="text-4xl text-[#61DAFB]" />,
      gradient: 'from-[#61DAFB]/20 to-transparent border-[#61DAFB]/30',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]'
    },
    {
      title: 'Node.js',
      description: 'Understand server-side JavaScript, event loop, file system operations, streams, and building scalable network applications.',
      icon: <SiNodedotjs className="text-4xl text-[#339933]" />,
      gradient: 'from-[#339933]/20 to-transparent border-[#339933]/30',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(51,153,51,0.3)]'
    }
  ];

  const handleCardClick = (card) => {
    openModal(
      `${card.title} Details`,
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5">{card.icon}</div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{card.title}</h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
        <div className="mt-4">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Topics:</h5>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            <li>Core Architecture</li>
            <li>Best Practices & Patterns</li>
            <li>Real-world Application</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          badge="The Technology Stack"
          title={<>Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">Full Stack</span></>}
          subtitle="Go deep into every layer of the MERN stack. From NoSQL databases to pixel-perfect UIs — you'll build it all from scratch with expert guidance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCardClick(card)}
              className={`glass-card rounded-2xl p-8 border-t-2 bg-gradient-to-b ${card.gradient} transition-all duration-300 ${card.hoverGlow} cursor-pointer group`}
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 shadow-inner transition-colors duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
