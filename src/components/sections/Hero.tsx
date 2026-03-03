import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Subtle Gradient Mesh Background */}
            <div className="absolute inset-0 z-0">
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
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-brand-accent/50 shadow-[0_0_30px_rgba(16,185,129,0.2)] relative z-10">
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
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-heading"
                    >
                        {personalInfo.name}
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
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
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
                            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full font-semibold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 group hover:border-white/20"
                        >
                            <span>Get in Touch</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
