import { resume } from '../../data/resume';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CodingProfile = () => {
    return (
        <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">Code Activity</h2>
                    <p className="text-brand-muted text-lg">Continuous learning and open-source contributions.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LeetCode Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-brand-card/40 backdrop-blur-md border border-brand-border rounded-3xl p-8 hover:border-brand-accent/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">LeetCode Stats</h3>
                            <a
                                href={resume.personal.leetcode}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-accent/10 text-brand-muted hover:text-brand-accent transition-all hover:scale-110"
                                aria-label="View LeetCode Profile"
                            >
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                        <div className="flex justify-center overflow-hidden">
                            <img
                                src="https://leetcard.jacoblin.cool/nitheeshs06?theme=dark&font=inter&ext=heatmap"
                                alt="LeetCode Stats"
                                className="w-full max-w-sm lg:max-w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </motion.div>

                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-brand-card/40 backdrop-blur-md border border-brand-border rounded-3xl p-8 hover:border-brand-accent/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">GitHub Contributions</h3>
                            <a
                                href={resume.personal.github}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-accent/10 text-brand-muted hover:text-brand-accent transition-all hover:scale-110"
                                aria-label="View GitHub Profile"
                            >
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                        <div className="flex justify-center overflow-hidden pt-4">
                            <img
                                src="http://ghchart.rshah.org/38BDF8/nitheesh1122"
                                alt="GitHub Contributions"
                                className="w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 invert hue-rotate-180"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfile;
