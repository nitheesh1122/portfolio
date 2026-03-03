import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';

const Education = () => {
    return (
        <section id="education" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-2 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-brand-accent"></span>
                        Education
                    </h2>
                    <p className="text-slate-400 pl-16">Academic background and qualifications</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors" />

                            <span className="text-brand-accent text-sm font-semibold tracking-wider font-mono mb-4 block">
                                {edu.period}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                {edu.degree}
                            </h3>

                            <p className="text-slate-400">
                                {edu.institution}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
