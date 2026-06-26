import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../ui/SectionHeading';

const Projects = () => {
  const { openModal } = useModal();
  const projects = [
    { title: 'E-Commerce Platform', tech: 'MERN, Redux, Stripe', diff: 'Advanced', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Hospital Management', tech: 'React, Node, Socket.io', diff: 'Advanced', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Chat Application', tech: 'MERN, WebRTC, Socket', diff: 'Intermediate', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Food Delivery App', tech: 'React, Express, MongoDB', diff: 'Intermediate', img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Portfolio Website', tech: 'React, Tailwind, Framer', diff: 'Beginner', img: 'https://images.unsplash.com/photo-1507238692062-5a04ec528ae8?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Admin Dashboard', tech: 'MERN, Chart.js, JWT', diff: 'Advanced', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
  ];

  const handleProjectClick = (project) => {
    openModal(
      project.title,
      <div className="space-y-4">
        <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-xl shadow-lg mb-6" />
        <p className="text-gray-600 dark:text-gray-400">A comprehensive full-stack application built during the course.</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{project.diff}</span>
          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-semibold">{project.tech}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          <strong>Learning Outcome:</strong> Master data modeling, state management, and API integrations by building this project from scratch.
        </p>
      </div>
    );
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          badge="Hands-On Portfolio"
          title={<>Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">Projects</span> You'll Build</>}
          subtitle="Don't just learn theory — ship production-ready applications. Each project is designed to land in your portfolio and impress recruiters."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 transition-colors duration-500">
                  {project.diff}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">{project.title}</h3>
                <p className="text-sm text-secondary mb-6">{project.tech}</p>
                <button 
                  onClick={() => handleProjectClick(project)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-500 cursor-pointer"
                >
                  View Details <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
