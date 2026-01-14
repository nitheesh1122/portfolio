import { resume } from '../../data/resume';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import AtomicOrbit from '../ui/AtomicOrbit';

const Hero = () => {
    const text = "Full Stack Developer";

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 left-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">

                {/* Photo Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group w-full md:w-1/2 flex justify-center order-2 md:order-last mt-16 md:mt-0"
                >
                    <AtomicOrbit>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-20">
                                <img
                                    src="/profile.png"
                                    alt={resume.personal.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </AtomicOrbit>
                </motion.div>

                {/* Text Section */}
                <div className="text-center md:text-left flex-1 order-1 md:order-first">
                    <Reveal>
                        <div className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-blue-400">
                            👋 Hello, I'm {resume.personal.name}
                        </div>
                    </Reveal>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <Reveal>
                            <span>Building </span>
                        </Reveal>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block h-[1.1em]">
                            {text.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.1, delay: index * 0.05 + 0.5 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <Reveal delay={1.5}>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            {resume.summary}
                        </p>
                    </Reveal>

                    <Reveal delay={1.7}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                View My Work <ArrowRight size={18} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-white/10 text-white border border-white/10 font-semibold rounded-full hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm"
                            >
                                Contact Me
                            </a>
                        </div>
                    </Reveal>

                    {/* Stats / Highlights */}
                    {/* Stats / Highlights - Desktop View */}
                    <div className="hidden md:block">
                        <Reveal delay={2}>
                            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10">
                                <Stat label="Location" value={resume.personal.location} />
                                <Stat label="Experience" value="Fresh Grad" />
                                <Stat label="Projects" value={`${resume.projects.length}+ Completed`} />
                                <Stat label="Focus" value="Full Stack" />
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Stats / Highlights - Mobile View */}
                <div className="w-full md:hidden order-3">
                    <Reveal delay={0.5}>
                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                            <Stat label="Location" value={resume.personal.location} />
                            <Stat label="Experience" value="Fresh Grad" />
                            <Stat label="Projects" value={`${resume.projects.length}+ Completed`} />
                            <Stat label="Focus" value="Full Stack" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

const Stat = ({ label, value }: { label: string, value: string }) => (
    <div className="text-center">
        <p className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-lg font-semibold text-gray-200">{value}</p>
    </div>
);

export default Hero;
