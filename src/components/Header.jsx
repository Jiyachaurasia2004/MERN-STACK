import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logo from "../assets/logo-beangate.png";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = ['home', 'about', 'course', 'features', 'curriculum', 'testimonials', 'pricing', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Course', href: '#course' },
    { name: 'Features', href: '#features' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
   {/* Logo */}
<div
  className="flex items-center gap-2 sm:gap-3 lg:gap-4 cursor-pointer select-none"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  {/* Logo Image */}
  <img
    src={logo}
    alt="MERN Stack Logo"
    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
  />

  {/* Logo Text */}
  <div className="flex flex-col leading-tight">
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
      MERN STACK
    </h1>

    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 dark:text-gray-400">
      Developer Academy
    </span>
  </div>
</div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-sm font-medium transition-colors relative pb-1 ${isActive ? 'text-primary dark:text-primary' : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white'}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </a>
                </li>
              )})}
            </ul>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="text-sm font-medium text-gray-700 hover:text-primary dark:text-white dark:hover:text-secondary transition-colors">
                Login
              </button>
              <button className="btn-primary text-sm px-5 py-2">
                Register
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-white/10"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block text-base font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                </li>
              )})}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <button className="btn-outline w-full text-center">Login</button>
              <button className="btn-primary w-full text-center">Register</button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
