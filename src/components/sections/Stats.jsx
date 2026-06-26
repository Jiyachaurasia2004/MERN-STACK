import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: '5000+', label: 'Students' },
    { number: '100+', label: 'Projects' },
    { number: '25+', label: 'Mentors' },
    { number: '95%', label: 'Placement Support' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 border-y border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-2 transition-colors duration-500">{stat.number}</div>
              <div className="text-sm md:text-base text-primary font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
