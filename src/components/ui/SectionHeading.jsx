import { motion } from 'framer-motion';

/**
 * Premium section heading component used across all sections.
 * Props:
 *   badge      – small label above heading (string)
 *   title      – main heading text, can include <span> for gradient word
 *   subtitle   – paragraph below heading
 *   align      – 'center' | 'left'  (default 'center')
 */
const SectionHeading = ({ badge, title, subtitle, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border
            bg-gradient-to-r from-primary/10 to-secondary/10
            border-primary/20 text-primary
            dark:from-primary/20 dark:to-secondary/20 dark:border-primary/30 dark:text-cyan-400
            ${isCenter ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400 animate-pulse" />
          {badge}
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6 transition-colors duration-500"
      >
        {title}
      </motion.h2>

      {/* Decorative glow line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className={`h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-secondary mb-6 shadow-[0_0_12px_rgba(59,130,246,0.6)]
          ${isCenter ? 'mx-auto' : ''}`}
        style={{ transformOrigin: isCenter ? 'center' : 'left' }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500
            ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
