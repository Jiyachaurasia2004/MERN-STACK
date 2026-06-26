import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/**
 * Lightweight counter hook — avoids react-countup's broken ESM default export.
 * Animates from 0 → end over `duration` ms using requestAnimationFrame.
 */
const useCountUp = (end, duration = 2000, enabled = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, enabled]);

  return count;
};

/* ── Individual animated stat cell ───────────────────────────── */
const StatItem = ({ stat, index, isInView }) => {
  const num = parseInt(stat.number.replace(/\D/g, ''), 10);
  const suffix = stat.number.replace(/[0-9]/g, '');
  const count = useCountUp(num, 2500, isInView);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-2 transition-colors duration-500">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-primary font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};

/* ── Stats section ────────────────────────────────────────────── */
const stats = [
  { number: '5000+', label: 'Students' },
  { number: '100+',  label: 'Projects' },
  { number: '25+',   label: 'Mentors' },
  { number: '95%',   label: 'Placement Support' },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 border-y border-gray-200 dark:border-white/5 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
