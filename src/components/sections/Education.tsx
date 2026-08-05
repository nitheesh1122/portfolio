import { motion } from 'framer-motion';
import { education, personalInfo } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const EducationAbout = () => {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader index="01" title="About" subtitle="Background & academic foundation" />

                <div className="grid md:grid-cols-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-7 editorial-panel p-8 md:p-10 flex items-center"
                    >
                        <p className="text-xl md:text-2xl font-display leading-relaxed text-brand">
                            {personalInfo.about}
                        </p>
                    </motion.div>

                    <div className="md:col-span-5 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bento-card p-6"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">
                                Areas of Interest
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {personalInfo.interests.map((interest) => (
                                    <span key={interest} className="tag-chip">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bento-card p-6 flex-1"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">
                                Education
                            </h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={edu.id} className={index > 0 ? 'pt-4 border-t border-brand' : ''}>
                                        <span className="font-mono text-xs text-muted block mb-1">{edu.period}</span>
                                        <h4 className="font-semibold text-brand leading-snug">{edu.degree}</h4>
                                        <p className="text-sm text-muted">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationAbout;
