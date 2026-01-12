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

function App() {
  return (
    <>
      <Preloader />
      <Cursor />
      <ParticlesBackground />
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 selection:text-white cursor-none relative z-10">
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
