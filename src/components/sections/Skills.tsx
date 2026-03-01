import { resume } from '../../data/resume';
import { motion, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

// Marquee Component Logic
const InfiniteMarquee = ({ items, speed = 1 }: { items: string[], speed?: number }) => {
    const baseX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useAnimationFrame((_, delta) => {
        if (!containerRef.current) return;

        // Decreased multiplier to make the marquee move as slow as possible
        let moveBy = speed * (delta / 1000) * 15;
        baseX.current -= moveBy;

        // Reset X position to create infinite loop based on child width ratio
        // We duplicate the items 3 times to ensure smooth looping
        if (baseX.current <= -33.33) {
            baseX.current = 0;
        }

        containerRef.current.style.transform = `translateX(${baseX.current}%)`;
    });

    return (
        <div className="overflow-hidden flex w-full relative mb-16 py-4">
            {/* Fade gradients on edges */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>

            <div ref={containerRef} className="flex gap-4 sm:gap-6 min-w-full w-max">
                {/* Triplicate the array for seamless infinite sliding */}
                {[...items, ...items, ...items].map((skill, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 rounded-full bg-brand-card/30 backdrop-blur-sm border border-brand-border text-white whitespace-nowrap"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    // Flattening all tech skills for the marquee
    const marqueeSkills = [
        ...resume.skills.languages,
        ...resume.skills.frameworks,
        ...resume.skills.databases,
        ...resume.skills.tools
    ];

    return (
        <section id="skills" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
            {/* Soft Ambient Radiance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Technical Arsenal</h2>
                    <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                        The tools, frameworks, and languages I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Infinite Marquee of Technologies */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <InfiniteMarquee items={marqueeSkills} speed={1} />
                </motion.div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-brand-card/40 backdrop-blur-md border border-brand-border rounded-3xl p-8 hover:border-brand-accent/30 transition-colors group"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white group-hover:text-brand-accent transition-colors">Soft Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {resume.skills.soft.map((skill, i) => (
                                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-medium text-brand-muted hover:text-white hover:bg-white/10 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-brand-card/40 backdrop-blur-md border border-brand-border rounded-3xl p-8 hover:border-brand-accent/30 transition-colors group"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white group-hover:text-brand-accent transition-colors">Certifications</h3>
                        <div className="space-y-4">
                            {resume.certifications.map((cert, i) => (
                                <a
                                    key={i}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/link flex flex-col p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-accent/40 hover:bg-brand-accent/5 transition-all duration-300"
                                >
                                    <span className="text-sm font-semibold text-gray-200 group-hover/link:text-brand-accent transition-colors">{cert.name}</span>
                                    <span className="text-xs text-brand-muted mt-2 inline-flex items-center gap-1 group-hover/link:text-white transition-colors">View Certificate <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span></span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
