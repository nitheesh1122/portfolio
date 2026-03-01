import { useState } from 'react';
import { resume } from '../../data/resume';
import type { Project } from '../../types';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-32 px-6 bg-brand-bg relative">
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Selected Work</h2>
                    <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                        A curated showcase of recent projects, emphasizing performance, scalable architecture, and premium user experiences.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-10">
                    {resume.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="bg-brand-card/40 backdrop-blur-md border border-brand-border rounded-3xl p-8 md:p-12 transition-all duration-500 cursor-pointer group hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-brand-accent/30 relative overflow-hidden"
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex flex-col md:flex-row gap-8 justify-between relative z-10">
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${project.status === 'In Progress'
                                                ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                : 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    <p className="text-brand-muted text-lg leading-relaxed max-w-3xl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {project.tech.split(',').map((tag, i) => (
                                            <span key={i} className="text-sm font-medium px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-brand-muted group-hover:border-white/10 group-hover:text-white transition-colors duration-300">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex md:flex-col items-center justify-start md:justify-center gap-4 md:pl-8 md:border-l border-brand-border mt-6 md:mt-0">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110"
                                            aria-label="View Source Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent transition-all hover:scale-110"
                                            aria-label="View Live Project"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
