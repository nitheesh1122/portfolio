import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import EducationAbout from './components/sections/Education';
import Projects from './components/sections/Projects';
import TechnicalArsenal from './components/sections/TechnicalArsenal';
import HallOfFame from './components/sections/HallOfFame';
import Certifications from './components/sections/Certifications';
import CodeActivity from './components/sections/CodeActivity';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { Reveal } from './components/ui/Reveal';
import SocialDock from './components/layout/SocialDock';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

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

      <div className="min-h-screen bg-brand text-brand font-sans selection:bg-brand-accent/30 selection:text-brand relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <SocialDock />
        <main className="w-full">
          <Reveal width="100%"><Hero /></Reveal>
          <Reveal width="100%"><EducationAbout /></Reveal>
          <Reveal width="100%"><Projects /></Reveal>
          <Reveal width="100%"><TechnicalArsenal /></Reveal>
          <Reveal width="100%"><HallOfFame /></Reveal>
          <Reveal width="100%"><CodeActivity /></Reveal>
          <Reveal width="100%"><Certifications /></Reveal>
          <Reveal width="100%"><Contact /></Reveal>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
