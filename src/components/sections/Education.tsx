import { motion } from 'framer-motion';
import { education, personalInfo } from '../../data/portfolio';
import { useState } from 'react';

const EducationAbout = () => {
    return (
        <section id="education" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-6">

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-2 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-brand-accent"></span>
                        Education & Background
                    </h2>
                    <p className="text-muted pl-16">Academic journey and professional foundation</p>
                </motion.div>

                {/* Education Cards */}
                <InteractiveEducation />

                {/* About Me Section */}
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-5"
                    >
                        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
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
                        <div className="bg-card p-8 rounded-2xl border border-brand shadow-2xl">
                            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="text-brand-accent">⚡</span> Areas of Interest
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {personalInfo.interests.map((interest, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 surface-soft text-muted rounded-lg hover:border-brand-accent/50 transition-colors cursor-default text-sm font-medium"
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

export default EducationAbout;

const InteractiveEducation = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-16 mb-16">
            {education.map((edu, index) => (
                <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group p-8 rounded-2xl bg-card border border-brand transition-all duration-300 relative overflow-hidden ${expanded === edu.id ? 'ring-2 ring-brand-accent/30' : 'hover:border-brand-accent/30'}`}
                    onClick={() => setExpanded((e) => (e === edu.id ? null : edu.id))}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors" />

                    <span className="text-brand-accent text-sm font-semibold tracking-wider font-mono mb-4 block">
                        {edu.period}
                    </span>

                    <h3 className="text-xl font-bold text-brand mb-2 leading-tight">
                        {edu.degree}
                    </h3>

                    <p className="text-muted">
                        {edu.institution}
                    </p>

                    {expanded === edu.id && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 pt-4 border-t border-brand">
                            <p className="text-sm text-muted">Additional details about the program, coursework highlights, and notable projects can go here.</p>
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};
