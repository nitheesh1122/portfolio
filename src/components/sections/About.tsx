import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-24 bg-card relative z-10 border-y border-brand">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-5"
                    >
                        <h2 className="text-4xl font-semibold mb-6 text-brand">About Me</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary rounded-full mb-8"></div>

                        <p className="text-lg text-muted leading-relaxed mb-8">
                            {personalInfo.about}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-6 md:col-start-7"
                    >
                        <div className="bg-card p-8 rounded-2xl border border-brand shadow-[0_24px_80px_var(--color-brand-chip-glow)]">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-brand">
                                <span className="text-brand-accent">⚡</span> Areas of Interest
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {personalInfo.interests.map((interest, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 theme-pill rounded-lg cursor-default text-sm font-medium"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
