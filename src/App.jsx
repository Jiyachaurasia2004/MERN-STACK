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

function App() {
  return (
    <div className="min-h-screen">
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
