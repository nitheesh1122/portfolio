import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from '../ui/ProjectModal';
import type { Project } from '../../types';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    // Extract all unique tags from projects
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach((project) => {
            project.tags?.forEach((tag) => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    // Filter projects based on selected tags
    const filteredProjects = useMemo(() => {
        if (selectedFilters.length === 0) return projects;
        return projects.filter((project) =>
            selectedFilters.some((filter) => project.tags?.includes(filter))
        );
    }, [selectedFilters]);

    const toggleFilter = (tag: string) => {
        setSelectedFilters((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

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

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-wrap gap-3 justify-center"
                >
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => toggleFilter(tag)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                                selectedFilters.includes(tag)
                                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/50'
                                    : 'bg-white/5 text-slate-300 border border-white/10 hover:border-brand-accent/50 hover:text-white'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Results counter */}
                {selectedFilters.length > 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-slate-400 text-sm mb-8"
                    >
                        Showing {filteredProjects.length} of {projects.length} projects
                    </motion.p>
                )}

                {/* Bento Grid Layout - Projects array order: NIRAL, NutriIQ, Textile, Smart Restaurant */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                        {filteredProjects.map((project, idx) => {
                            const isPrimary = idx === 0 || idx === 3; // Make alternating cards visually slightly different in weight

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    onClick={() => setSelectedProject(project)}
                                    className={`group bg-[#141414] rounded-3xl p-8 border border-white/5 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between items-start 
                                    ${isPrimary ? 'bg-gradient-to-br from-[#141414] to-[#0a1a15]' : ''} cursor-pointer`}
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors pointer-events-none" />

                                    <div className="w-full relative z-10">
                                        {project.image && (
                                            <div className="mb-4 w-full">
                                                <img
                                                    src={new URL(`../../assets/projects/${project.image}`, import.meta.url).href}
                                                    alt={project.title}
                                                    className="w-full h-40 object-cover rounded-xl border border-white/5 bg-black/10"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}

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

                                        <div className="flex items-center gap-4" onClick={(event) => event.stopPropagation()}>
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

                                            <button
                                                type="button"
                                                onClick={() => setSelectedProject(project)}
                                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                            >
                                                Case Study
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-slate-400 text-lg">No projects match the selected filters.</p>
                        <button
                            onClick={() => setSelectedFilters([])}
                            className="mt-4 px-4 py-2 text-brand-accent hover:text-white transition-colors text-sm font-medium"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
