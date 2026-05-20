import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { awards, education, personalInfo, projects, skills } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [cursor, setCursor] = useState({ x: 50, y: 40, active: false });

    const heroStats = useMemo(
        () => [
            { label: 'Projects shipped', value: projects.length, suffix: '+' },
            { label: 'Skill stacks', value: skills.length, suffix: '+' },
            { label: 'Milestones', value: education.length + awards.length, suffix: '+' },
        ],
        []
    );

    useEffect(() => {
        const timer = window.setTimeout(() => setShowIntro(false), 2400);
        return () => window.clearTimeout(timer);
    }, []);

    const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setCursor({ x, y, active: true });
    };

    const handlePointerLeave = () => setCursor((state) => ({ ...state, active: false }));

    return (
        <section
            id="home"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {showIntro && (
                <motion.div
                    aria-hidden="true"
                    className="fixed inset-0 z-50 overflow-hidden bg-brand"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 2.05 }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_45%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.10),transparent_30%)]" />
                    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

                    <motion.div
                        className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(135deg,rgba(8,47,73,0.96),rgba(15,23,42,0.98),rgba(6,78,59,0.9))]"
                        initial={{ x: 0 }}
                        animate={{ x: '-104%' }}
                        transition={{ duration: 0.95, ease: [0.77, 0, 0.18, 1], delay: 0.55 }}
                    />
                    <motion.div
                        className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(225deg,rgba(15,23,42,0.98),rgba(8,47,73,0.96),rgba(6,95,70,0.9))]"
                        initial={{ x: 0 }}
                        animate={{ x: '104%' }}
                        transition={{ duration: 0.95, ease: [0.77, 0, 0.18, 1], delay: 0.55 }}
                    />

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center px-6"
                        initial={{ opacity: 0, scale: 0.82, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                    >
                        <div className="relative w-full max-w-3xl text-center">
                            <motion.div
                                className="mx-auto mb-6 w-fit rounded-full border border-brand-accent/20 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.36em] text-brand"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: 0.15 }}
                            >
                                Opening portfolio
                            </motion.div>

                            <motion.div
                                className="space-y-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.25 }}
                            >
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent" />
                                <p className="text-3xl font-semibold tracking-tight text-brand md:text-4xl">
                                    Hi, I'm NITHEESH SELVARAJ
                                </p>
                                <p className="mx-auto max-w-2xl text-sm leading-6 text-brand-muted md:text-base">
                                    I'm a software engineer specializing in building exceptional digital experiences
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Subtle Gradient Mesh Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                        opacity: cursor.active ? 1 : 0.65,
                        background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, color-mix(in srgb, var(--color-brand-accent) 18%, transparent) 0%, transparent 26%), radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.08), transparent 34%), radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.08), transparent 30%)`,
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-secondary/10 rounded-full blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* Profile Image Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                        className="mb-8 relative"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-brand-accent/50 shadow-[0_0_30px_var(--color-brand-accent-glow)] relative z-10">
                            <img
                                src="/profile.png"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&background=0D8BFF&color=fff&size=200`;
                                }}
                            />
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border border-brand-accent-secondary/30 scale-110 animate-[spin_10s_linear_infinite]"></div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full theme-pill backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_var(--color-brand-accent-glow)]"></span>
                        <span className="text-sm font-medium text-brand">Available for new opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-heading"
                    >
                        {personalInfo.fullName}
                    </motion.h1>

                    {/* Role (Gradient) */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-secondary"
                    >
                        {personalInfo.role}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                    >
                        <a
                            href="#projects"
                            className="hero-primary-cta group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span className="relative z-10">See What I Build</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a
                            href="#contact"
                            className="hero-primary-cta group px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span>Let's Connect</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="mt-10 grid w-full gap-4 sm:grid-cols-3 max-w-3xl"
                    >
                        {heroStats.map((stat, index) => (
                            <CountUpStat
                                key={stat.label}
                                index={index}
                                label={stat.label}
                                value={stat.value}
                                suffix={stat.suffix}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

interface CountUpStatProps {
    label: string;
    value: number;
    suffix?: string;
    index: number;
}

const CountUpStat = ({ label, value, suffix = '', index }: CountUpStatProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frame = 0;
        const duration = 900;
        const start = performance.now();

        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));

            if (progress < 1) {
                frame = window.requestAnimationFrame(step);
            }
        };

        frame = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(frame);
    }, [value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 * index }}
            className="rounded-2xl border border-brand bg-card/90 px-5 py-4 text-center backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
        >
            <div className="text-2xl font-black tracking-tight text-brand md:text-3xl">
                {count}{suffix}
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                {label}
            </div>
        </motion.div>
    );
};

export default Hero;
