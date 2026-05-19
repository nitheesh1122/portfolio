import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolio';
import { BadgeCheck } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-card relative z-10 border-y border-brand">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-2 flex items-center gap-4 text-brand">
                        <span className="text-brand-accent">
                            <BadgeCheck size={36} />
                        </span>
                        Certifications
                    </h2>
                    <p className="text-muted pl-16">Professional credentials and verified knowledge</p>
                </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-brand hover:border-brand-accent/30 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-card border border-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                {/* Fallback Oracle "O" icon style if no explicit image */}
                                <span className="text-2xl font-black text-red-500 font-serif">O</span>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand mb-1 leading-tight group-hover:text-brand-accent transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="text-sm">
                                    <span className="text-brand font-medium mr-2">{cert.issuer}</span>
                                    <span className="text-muted">&bull; {cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
