import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';
import ProjectModal from '../ui/ProjectModal';

const featuredIds = ['niral', 'nutriiq', 'textile', 'isl-connect', 'restaurant', 'inventory', 'recruiterpro', 'servicepro'];

const getProjectImageUrl = (image?: string) => {
    if (!image) return undefined;
    return new URL(`../../assets/projects/${image}`, import.meta.url).href;
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags || []))), []);

    const featuredProjects = useMemo(() => {
        if (selectedTag) {
            return projects.filter((p) => p.tags?.includes(selectedTag));
        }
        return featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean) as Project[];
    }, [selectedTag]);
    const maxIndex = Math.max(0, featuredProjects.length - 2);
    const visibleProjects = featuredProjects.slice(currentIndex, currentIndex + 2);

    const goPrev = () => setCurrentIndex((value) => Math.max(0, value - 2));
    const goNext = () => setCurrentIndex((value) => Math.min(maxIndex, value + 2));

    return (
        <section id="projects" className="relative isolate overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute top-1/3 left-0 h-[20rem] w-[20rem] rounded-full bg-purple-500/10 blur-[150px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_45%)]" />
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
                        backgroundSize: '88px 88px',
                        maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
                    }}
                />
                <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:24px_24px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                    <div className="text-sm font-semibold text-muted mr-2">Filter:</div>
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1 rounded-md text-sm ${selectedTag ? 'text-muted' : 'bg-card border border-brand text-brand'}`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag((t) => (t === tag ? null : tag))}
                                className={`px-3 py-1 rounded-md text-sm ${selectedTag === tag ? 'bg-brand-accent text-white' : 'bg-card border border-brand text-muted'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-10 max-w-4xl text-center md:mb-14"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full theme-pill px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-md">
                        <Sparkles size={14} />
                        Featured Projects
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-brand md:text-6xl">
                        Engineering Showcase
                    </h2>
                </motion.div>

                <div className="relative">
                    <div className="mb-4 flex items-center justify-end gap-3 text-xs uppercase tracking-[0.26em] text-muted">
                        <span>
                            {currentIndex + 1}-{Math.min(currentIndex + 2, featuredProjects.length)} of {featuredProjects.length}
                        </span>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                        <button
                            type="button"
                            onClick={goPrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous projects"
                            className="order-2 mx-auto rounded-full border border-brand bg-card p-3 text-brand shadow-lg backdrop-blur-md transition-all hover:border-brand-accent/40 hover:bg-card disabled:pointer-events-none disabled:opacity-30 lg:order-1 lg:mx-0"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="order-1 grid gap-4 md:grid-cols-2 lg:order-2">
                            <AnimatePresence mode="wait">
                                {visibleProjects.map((project, index) => (
                                    <ProjectDeckCard
                                        key={`${project.id}-${currentIndex}`}
                                        project={project}
                                        position={currentIndex + index}
                                        highlighted={index === 0}
                                        onOpen={() => setSelectedProject(project)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        <button
                            type="button"
                            onClick={goNext}
                            disabled={currentIndex >= maxIndex}
                            aria-label="Next projects"
                            className="order-3 mx-auto rounded-full border border-brand bg-card p-3 text-brand shadow-lg backdrop-blur-md transition-all hover:border-brand-accent/40 hover:bg-card disabled:pointer-events-none disabled:opacity-30 lg:mx-0"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </section>
    );
};

interface ProjectDeckCardProps {
    project: Project;
    position: number;
    highlighted: boolean;
    onOpen: () => void;
}

const ProjectDeckCard = ({ project, position, highlighted, onOpen }: ProjectDeckCardProps) => {
    const imageUrl = getProjectImageUrl(project.image);
    const topTech = project.tech.slice(0, 4);
    const impactLine = project.impact?.[0] ?? project.description;
    const [hovered, setHovered] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: position * 0.03 }}
            className={`group relative overflow-hidden rounded-[1.5rem] border bg-card backdrop-blur-xl w-full transition-all duration-300 ${
                highlighted
                    ? 'border-brand-accent/35 ring-1 ring-brand-accent/25 shadow-[0_24px_60px_rgba(0,0,0,0.35)]'
                    : 'border-brand/15 ring-1 ring-brand/10 shadow-[0_16px_40px_rgba(0,0,0,0.28)]'
            }`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--color-brand-accent)_12%,transparent),transparent_35%),radial-gradient(circle_at_bottom_right,color-mix(in_srgb,var(--color-brand-accent-secondary)_16%,transparent),transparent_32%)] opacity-90" />
            <div className="absolute inset-0 border border-brand/10" />

            <div
                className="relative p-4 sm:p-5"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
                tabIndex={0}
                role="button"
                aria-label={`Preview ${project.title}`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onOpen();
                    }
                }}
            >
                <div className="mb-4 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.26em] text-muted">
                    <span>{highlighted ? 'Highlighted' : `Project ${String(position + 1).padStart(2, '0')}`}</span>
                    <span className={`rounded-full border px-2.5 py-1 font-semibold ${project.status === 'In Progress' ? 'border-amber-400/20 bg-amber-500/10 text-brand' : 'border-emerald-400/20 bg-emerald-500/10 text-brand'}`}>
                        {project.status || 'Featured'}
                    </span>
                </div>

                <div className="relative mb-4 overflow-hidden rounded-2xl border border-brand/15 bg-brand/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--color-brand-bg)_88%,transparent)] via-transparent to-transparent" />
                    {imageUrl ? (
                        <motion.img
                            src={imageUrl}
                            alt={project.title}
                            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-44 items-center justify-center bg-card text-muted">No preview</div>
                    )}
                </div>

                <div className="space-y-3">
                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-brand">{project.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                    </div>

                    <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-accent">Impact</p>
                        <p className="text-sm leading-6 text-muted">{impactLine}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {topTech.map((tech) => (
                            <span key={tech} className="theme-chip rounded-full px-2.5 py-1 text-[11px] font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onOpen}
                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-accent/25 bg-gradient-to-r from-brand-accent/15 via-brand-accent-secondary/20 to-brand-accent/15 px-4 py-2.5 text-sm font-semibold text-brand transition-all duration-300 hover:border-brand-accent/50 hover:shadow-[0_0_24px_var(--color-brand-accent-glow)]"
                        >
                            Explore System
                            <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                            {project.github && (
                            <ActionIconLink href={project.github} label="GitHub">
                                <Github size={15} />
                            </ActionIconLink>
                        )}
                        {project.live && (
                            <ActionIconLink href={project.live} label="Live Demo">
                                <ExternalLink size={15} />
                            </ActionIconLink>
                        )}
                    </div>
                </div>
            </div>

                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 z-20 p-5 bg-black/40 backdrop-blur-md rounded-[1.5rem] flex flex-col justify-between"
                        >
                            <div>
                                <h4 className="text-lg font-bold text-brand mb-2">{project.title}</h4>
                                <p className="text-sm text-muted line-clamp-3">{project.longDescription ? project.longDescription.replace(/\n/g, ' ') : project.description}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {project.tech.slice(0, 6).map((t) => (
                                        <span key={t} className="theme-chip px-2 py-1 text-xs">{t}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="btn-accent px-3 py-2 text-xs">Code</a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-card border border-brand text-sm">Live</a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
        </motion.article>
    );
};

interface ActionIconLinkProps {
    href: string;
    label: string;
    children: React.ReactNode;
}

const ActionIconLink = ({ href, label, children }: ActionIconLinkProps) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/15 bg-card text-brand transition-all duration-300 hover:border-brand-accent/30 hover:bg-brand/5"
    >
        {children}
    </motion.a>
);

export default Projects;
