import { motion } from 'framer-motion';
import { Video, Code2, FileCode2, Award, Briefcase, Infinity, Users, BookOpen } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../ui/SectionHeading';

const Features = () => {
  const { openModal } = useModal();
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

  const handleFeatureClick = (feature) => {
    openModal(
      feature.title,
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
          {feature.icon}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.desc}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 italic">This is an essential part of the MERN stack journey. You'll get hands-on experience and all necessary resources.</p>
      </div>
    );
  };

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          badge="What's Included"
          title={<>Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">Succeed</span></>}
          subtitle="We've packed every resource, tool, and support system you need to go from curious learner to confident full-stack developer — and land your first job."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => handleFeatureClick(feature)}
              className="glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center group cursor-pointer"
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
