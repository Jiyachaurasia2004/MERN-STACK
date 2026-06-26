import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import VideoPreview from './components/sections/VideoPreview';
import AboutCourse from './components/sections/AboutCourse';
import Curriculum from './components/sections/Curriculum';
import Features from './components/sections/Features';
import Projects from './components/sections/Projects';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import RegistrationForm from './components/sections/RegistrationForm';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import BackToTop from './components/ui/BackToTop';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <ScrollProgressBar />
      <Toaster position="top-right" />
      <BackToTop />
      
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <VideoPreview />
        <AboutCourse />
        <Curriculum />
        <Features />
        <Projects />
        <Stats />
        <Testimonials />
        <Pricing />
        <RegistrationForm />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
