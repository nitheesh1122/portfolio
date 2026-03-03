import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#0d0d0d] relative z-10 border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-5"
                    >
                        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary rounded-full mb-8"></div>

                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
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
                        <div className="bg-[#141414] p-8 rounded-2xl border border-white/5 shadow-2xl">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="text-brand-accent">⚡</span> Areas of Interest
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {personalInfo.interests.map((interest, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-white/5 text-slate-300 rounded-lg border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-colors cursor-default text-sm font-medium"
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
