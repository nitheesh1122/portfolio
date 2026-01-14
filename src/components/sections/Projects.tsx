import { useState } from 'react';
import { resume } from '../../data/resume';
import type { Project } from '../../types';
import { Github, ExternalLink } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal width="100%">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Featured Projects</h2>
                        <p className="text-gray-400 max-w-xl text-center md:text-left mx-auto md:mx-0">A collection of applications and experiments I've built using modern web technologies.</p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resume.projects.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedProject(project)}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors cursor-pointer group flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                                        {project.status}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-500 mb-4 font-mono">{project.period}</p>

                                <p className="text-gray-400 mb-6 line-clamp-3 flex-1">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.split(',').slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 rounded text-gray-300">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                                            >
                                                <Github size={18} /> Code
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                                            >
                                                <ExternalLink size={18} /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
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
