import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';

const TechnicalArsenal = () => {
    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-semibold mb-4 text-brand">Technical Arsenal</h2>
                    <p className="text-muted max-w-2xl mx-auto">Technologies and tools I use to build scalable web applications and intelligent systems.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-brand hover:border-brand-accent/30 transition-colors group"
                        >
                            <h3 className="text-xl font-bold text-brand mb-6 group-hover:text-brand-accent transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-brand text-muted text-sm font-medium rounded-lg border border-brand hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechnicalArsenal;
