import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-semibold mb-4 text-white">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Scalable solutions and applications built to solve complex real-world problems.</p>
                </motion.div>

                {/* Bento Grid Layout - Projects array order: NIRAL, NutriIQ, Textile, Smart Restaurant */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                    {projects.map((project, idx) => {
                        const isPrimary = idx === 0 || idx === 3; // Make alternating cards visually slightly different in weight

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`group bg-[#141414] rounded-3xl p-8 border border-white/5 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between items-start 
                                ${isPrimary ? 'bg-gradient-to-br from-[#141414] to-[#0a1a15]' : ''}`}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors pointer-events-none" />

                                <div className="w-full relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="w-full relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-semibold rounded-md border border-white/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                            >
                                                <Github size={18} />
                                                Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default Projects;
