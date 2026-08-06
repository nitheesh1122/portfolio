import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { awards, education, personalInfo, projects, skills } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

const BOOT_SESSION_KEY = 'hero-boot-shown';
const BOOT_MAX_MS = 2400;

const bootLines = [
    { prompt: true, text: 'whoami' },
    { prompt: false, text: personalInfo.fullName },
    { prompt: true, text: 'status --available' },
    { prompt: false, text: 'Open to full-time roles & freelance work' },
];

const Hero = () => {
    const [showIntro, setShowIntro] = useState(() => {
        if (typeof window === 'undefined') return false;
        try {
            if (sessionStorage.getItem(BOOT_SESSION_KEY)) return false;
        } catch {
            /* sessionStorage unavailable, fall through */
        }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
        return true;
    });

    const heroStats = useMemo(
        () => [
            { label: 'Projects', value: projects.length, suffix: '+' },
            { label: 'Skill Stacks', value: skills.length, suffix: '+' },
            { label: 'Milestones', value: education.length + awards.length, suffix: '+' },
        ],
        []
    );

    useEffect(() => {
        if (!showIntro) return;

        try {
            sessionStorage.setItem(BOOT_SESSION_KEY, '1');
        } catch {
            /* ignore */
        }

        const timer = window.setTimeout(() => setShowIntro(false), BOOT_MAX_MS);
        const dismiss = () => setShowIntro(false);

        window.addEventListener('keydown', dismiss);
        window.addEventListener('pointerdown', dismiss);

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('keydown', dismiss);
            window.removeEventListener('pointerdown', dismiss);
        };
    }, [showIntro]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
        >
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        aria-hidden="true"
                        className="fixed inset-0 z-50 flex items-center justify-center px-6 terminal-panel !rounded-none !border-0"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-full max-w-lg font-mono text-sm md:text-base">
                            {bootLines.map((line, index) => (
                                <motion.div
                                    key={line.text}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.35 }}
                                    className="mb-2 flex items-center gap-2"
                                >
                                    {line.prompt ? (
                                        <>
                                            <span className="text-terminal-accent">$</span>
                                            <span>{line.text}</span>
                                        </>
                                    ) : (
                                        <span className="pl-4 opacity-80">{line.text}</span>
                                    )}
                                </motion.div>
                            ))}
                            <span className="terminal-cursor" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle dot-grid backdrop */}
            <div className="absolute inset-0 z-0 dot-grid-bg" aria-hidden="true" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-brand-accent/40">
                            <img
                                src="/profile.png"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover scale-[1.35]"
                                style={{ objectPosition: '50% 32%' }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&background=0D8BFF&color=fff&size=200`;
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-5 flex items-center gap-2 text-sm text-muted"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-display font-semibold tracking-tight mb-3 text-brand"
                    >
                        {personalInfo.fullName}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.22 }}
                        className="text-2xl md:text-4xl font-display font-medium mb-3 text-brand-accent"
                    >
                        {personalInfo.role}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-muted mb-6"
                    >
                        {personalInfo.specialization}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.28 }}
                        className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.34 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12"
                    >
                        <a href="#projects" className="btn-solid group">
                            See What I Build
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Let's Connect
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-8 sm:gap-12"
                    >
                        {heroStats.map((stat, index) => (
                            <div key={stat.label} className={`flex flex-col items-center px-6 sm:px-8 ${index > 0 ? 'border-l border-brand' : ''}`}>
                                <span className="font-mono text-2xl md:text-3xl font-semibold text-brand">
                                    {stat.value}{stat.suffix}
                                </span>
                                <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
