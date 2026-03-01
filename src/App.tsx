import { useEffect } from 'react';
import FloatingActions from './components/ui/FloatingActions';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import CodingProfile from './components/sections/CodingProfile';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Cursor from './components/ui/Cursor';
import Preloader from './components/ui/Preloader';
import ParticlesBackground from './components/ui/3d/ParticlesBackground';
import CommandPalette from './components/ui/CommandPalette';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let originalTitle = document.title;
    let timeoutId: number;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Don't leave me hanging! 🚀";
      } else {
        document.title = "Welcome back! 👋";
        timeoutId = window.setTimeout(() => {
          document.title = originalTitle;
        }, 2000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Preloader />
      <Cursor />
      <ParticlesBackground />
      <CommandPalette />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent origin-left z-[100] shadow-[0_0_10px_rgba(56,189,248,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent/30 selection:text-white cursor-none relative z-10">
        <Navbar />
        <main>
          <Hero />
          <CodingProfile />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <FloatingActions />
        <Footer />
      </div>
    </>
  );
}

export default App;
