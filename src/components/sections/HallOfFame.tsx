import { motion } from 'framer-motion';
import { awards } from '../../data/portfolio';

const HallOfFame = () => {
    return (
        <section id="awards" className="py-24 bg-card relative z-10 border-y border-brand">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-2 flex items-center gap-4 text-brand">
                        <span className="text-brand-accent-secondary">🏆</span>
                        Hall of Fame
                    </h2>
                        <p className="text-muted pl-16">Awards, Hackathons, and Recognitions</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-card border border-brand hover:border-brand-accent-secondary/30 transition-all duration-300 relative flex flex-col h-full"
                        >
                            <div className="text-4xl mb-6 surface-soft w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {award.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand mb-2 leading-tight">
                                {award.title}
                            </h3>

                            <div className="mb-4">
                                <span className="text-brand-accent-secondary text-sm font-semibold mb-1 block">
                                    {award.date}
                                </span>
                                <span className="text-muted text-sm font-medium">
                                    {award.organization}
                                </span>
                            </div>

                            <p className="text-muted text-sm mt-auto border-t border-brand pt-4">
                                "{award.description}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HallOfFame;
