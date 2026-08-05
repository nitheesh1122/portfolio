import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { awards, certifications } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const Recognition = () => {
    return (
        <section id="recognition" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader index="04" title="Recognition" subtitle="Awards, hackathons & certifications" />

                {/* Awards — large cells */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="bento-card p-8 flex flex-col h-full"
                        >
                            <div className="text-3xl mb-6">{award.icon}</div>
                            <h3 className="text-xl font-display font-semibold text-brand mb-2 leading-tight">
                                {award.title}
                            </h3>
                            <div className="mb-4">
                                <span className="font-mono text-xs text-brand-accent block mb-1">{award.date}</span>
                                <span className="text-muted text-sm">{award.organization}</span>
                            </div>
                            <p className="text-muted text-sm mt-auto pt-4 border-t border-brand">
                                {award.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications — secondary, compact cells */}
                <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bento-card p-4 flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 border border-brand text-brand-accent">
                                <BadgeCheck size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-brand leading-tight">{cert.title}</h4>
                                <div className="text-xs text-muted mt-0.5">
                                    <span className="font-medium text-brand">{cert.issuer}</span> &bull; {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recognition;
