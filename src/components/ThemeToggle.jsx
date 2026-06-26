import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none flex items-center justify-center relative overflow-hidden w-10 h-10"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: isDarkMode ? 30 : 0,
          opacity: isDarkMode ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={20} className="text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: isDarkMode ? 0 : -30,
          opacity: isDarkMode ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={20} className="text-blue-400" />
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
