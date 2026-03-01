import { resume } from '../../data/resume';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

// Reusable Magnetic Button Component
const MagneticButton = ({ children, className, href, onClick }: any) => {
    const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

    // Physics-based springs for smooth return
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Apply magnetic pull (capped so it doesn't fly off screen)
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Element = href ? motion.a : motion.button;

    return (
        <Element
            ref={ref as any}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={className}
        >
            {children}
        </Element>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden bg-brand-bg">
            {/* Soft Ambient Radial Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full mt-10">

                {/* Profile Photo with Glow Ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-8 group"
                >
                    <div className="absolute inset-0 rounded-full bg-brand-accent opacity-20 blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-brand-accent via-blue-600/50 to-brand-bg relative z-10 transition-transform duration-500 group-hover:scale-105">
                        <div className="w-full h-full rounded-full overflow-hidden bg-brand-bg border-4 border-[#0B0F19]">
                            {/* Assuming the photo exists in public/img/ or somewhere similar based on typical Vite setup. 
                                Using a placeholder if it doesn't exist, but referencing standard profile paths */}
                            <img
                                src="/img/profile.jpeg"
                                alt={resume.personal.name}
                                onError={(e) => {
                                    // Fallback if image path is wrong, to keep design intact
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(resume.personal.name)}&background=111827&color=38BDF8&size=200`;
                                }}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Minimal Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm mb-6 text-sm font-medium text-brand-muted hover:border-brand-accent/30 transition-colors cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight"
                >
                    Engineering elegant <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600 drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        software solutions.
                    </span>
                </motion.h1>

                {/* Tagline / Summary */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed"
                >
                    I'm <strong className="text-white font-semibold">{resume.personal.name}</strong>, a Full Stack Developer creating premium, high-performance web applications with a focus on seamless user experiences.
                </motion.p>

                {/* Call to Actions - Using Magnetic Interaction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-6 justify-center"
                >
                    <MagneticButton
                        href="#projects"
                        className="px-8 py-3.5 bg-brand-accent text-[#050550] font-semibold rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center gap-2 transition-shadow"
                    >
                        View Projects <ArrowRight size={18} />
                    </MagneticButton>
                    <MagneticButton
                        href="#contact"
                        className="px-8 py-3.5 bg-white/5 text-white border border-white/10 font-semibold rounded-lg hover:border-brand-accent/50 hover:bg-white/10 flex items-center gap-2 backdrop-blur-sm transition-colors"
                    >
                        <Terminal size={18} /> Get in Touch
                    </MagneticButton>
                </motion.div>

                {/* Fast Facts */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-10"
                >
                    <Stat label="Location" value={resume.personal.location} />
                    <Stat label="Focus" value="Full Stack" />
                    <Stat label="Experience" value="Fresh Grad" />
                    <Stat label="Projects" value={`${resume.projects.length}+ Shipped`} />
                </motion.div>
            </div>
        </section>
    );
};

const Stat = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col items-center group">
        <p className="text-sm text-brand-muted mb-1 font-medium group-hover:text-brand-accent transition-colors">{label}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
    </div>
);

export default Hero;
