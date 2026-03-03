import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import HallOfFame from './components/sections/HallOfFame';
import TechnicalArsenal from './components/sections/TechnicalArsenal';
import Certifications from './components/sections/Certifications';
import CodeActivity from './components/sections/CodeActivity';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Nitheesh S | Full Stack Developer";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-accent to-brand-accent-secondary origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent/30 selection:text-white relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Education />
          <About />
          <Projects />
          <HallOfFame />
          <TechnicalArsenal />
          <Certifications />
          <CodeActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
