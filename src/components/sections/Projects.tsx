import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';
import ProjectModal from '../ui/ProjectModal';
import SectionHeader from '../ui/SectionHeader';

const featuredIds = ['niral', 'nutriiq', 'textile', 'isl-connect', 'restaurant', 'inventory', 'recruiterpro', 'servicepro'];

const getProjectImageUrl = (image?: string) => {
    if (!image) return undefined;
    return new URL(`../../assets/projects/${image}`, import.meta.url).href;
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags || []))), []);

    const visibleProjects = useMemo(() => {
        if (selectedTag) {
            return projects.filter((p) => p.tags?.includes(selectedTag));
        }
        return featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean) as Project[];
    }, [selectedTag]);

    return (
        <section id="projects" className="relative py-20 md:py-24">
            <div className="absolute inset-0 dot-grid-bg pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader index="02" title="Work" subtitle="Shipped, full-stack case studies" />

                <div className="mb-8 flex items-center gap-2 flex-wrap">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${!selectedTag ? 'bg-brand-accent text-white border-brand-accent' : 'border-brand text-muted hover:text-brand hover:border-brand-accent/50'}`}
                    >
                        all
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag((t) => (t === tag ? null : tag))}
                            className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${selectedTag === tag ? 'bg-brand-accent text-white border-brand-accent' : 'border-brand text-muted hover:text-brand hover:border-brand-accent/50'}`}
                        >
                            {tag.toLowerCase()}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => (
                            <ProjectTile
                                key={project.id}
                                project={project}
                                index={index}
                                onOpen={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </section>
    );
};

interface ProjectTileProps {
    project: Project;
    index: number;
    onOpen: () => void;
}

const ProjectTile = ({ project, index, onOpen }: ProjectTileProps) => {
    const imageUrl = getProjectImageUrl(project.image);
    const impactLine = project.impact?.[0] ?? project.description;
    const topTech = project.tech.slice(0, 3);

    // Deliberate, controlled asymmetry rather than a uniform grid:
    // - tile 0: dominant lead tile
    // - tile 1: medium second tile
    // - tiles 2+: two per row at tablet (md), alternating wide/narrow pairs
    //   at large desktop (lg) so the section keeps varying instead of
    //   flattening into a repeated 3-up grid of identical rectangles.
    let spanClass: string;
    let aspectClass: string;
    if (index === 0) {
        spanClass = 'md:col-span-7';
        aspectClass = 'aspect-[16/10]';
    } else if (index === 1) {
        spanClass = 'md:col-span-5';
        aspectClass = 'aspect-video';
    } else {
        const isWideOfPair = (index - 2) % 2 === 0;
        spanClass = isWideOfPair ? 'md:col-span-6 lg:col-span-7' : 'md:col-span-6 lg:col-span-5';
        aspectClass = 'aspect-[4/3]';
    }

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.04 }}
            className={`bento-card overflow-hidden flex flex-col ${spanClass}`}
        >
            <div className={`relative w-full ${aspectClass} bg-brand-bg overflow-hidden`}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted text-sm">No preview</div>
                )}
                <span className={`absolute top-3 right-3 rounded-md border px-2 py-1 text-[10px] font-mono uppercase tracking-wide backdrop-blur-sm ${project.status === 'In Progress' ? 'border-amber-400/40 bg-brand-bg/80 text-amber-300' : 'border-brand-accent/40 bg-brand-bg/80 text-brand-accent'}`}>
                    {project.status || 'Featured'}
                </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-display font-semibold text-brand leading-snug">{project.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{impactLine}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                    {topTech.map((tech) => (
                        <span key={tech} className="tag-chip">{tech}</span>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-brand flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onOpen}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-brand-accent/40 text-brand-accent text-sm font-medium py-2 hover:bg-brand-accent/10 transition-colors"
                    >
                        Case Study
                        <ChevronRight size={14} />
                    </button>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} source code`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand text-brand hover:border-brand-accent/50 transition-colors"
                        >
                            <Github size={15} />
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand text-brand hover:border-brand-accent/50 transition-colors"
                        >
                            <ExternalLink size={15} />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

export default Projects;
