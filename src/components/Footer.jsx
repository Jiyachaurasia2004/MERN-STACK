import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0F172A] border-t border-gray-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white">M</div>
              <span className="text-xl font-bold tracking-wider text-gray-900 dark:text-white transition-colors duration-500">MERN STACK</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6 transition-colors duration-500">Master the art of full-stack web development with our comprehensive, project-based curriculum.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><FaLinkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><FaGithub size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><FaYoutube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors duration-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Course</a></li>
              <li><a href="#curriculum" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Curriculum</a></li>
              <li><a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors duration-500">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 transition-colors duration-500">
          <p>&copy; {new Date().getFullYear()} MERN Stack Course. All rights reserved.</p>
          <p>Designed for future developers.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
