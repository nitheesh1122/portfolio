import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "../../types";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isLightTheme, setIsLightTheme] = useState(() =>
        typeof window !== 'undefined' && document.documentElement.classList.contains('light')
    );

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    // Prevent background scrolling
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        const syncTheme = () => setIsLightTheme(root.classList.contains('light'));

        syncTheme();

        const observer = new MutationObserver(syncTheme);
        observer.observe(root, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    // Simple Markdown-like renderer (handling newlines and basic headers)
    const renderDescription = (text: string) => {
        return text.split('\n').map((line, index) => {
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-brand-accent-secondary mt-4 mb-2">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('- ')) {
                return <li key={index} className="ml-4 mb-1 text-muted">{line.replace('- ', '')}</li>;
            }
            if (!line.trim()) {
                return <br key={index} />;
            }
            return <p key={index} className="text-muted leading-relaxed">{line}</p>;
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 overlay backdrop-blur-sm"
        >
            <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                style={{
                    backgroundColor: 'var(--color-brand-card)',
                    border: '1px solid var(--color-brand-border)',
                    boxShadow: 'var(--shadow-soft)'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10 border border-brand"
                    style={{ background: 'color-mix(in srgb, var(--color-brand-card) 50%, transparent)' }}
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-10">
                    {project.image && (
                        <div className="mb-6">
                            <img
                                src={new URL(`../../assets/projects/${project.image}`, import.meta.url).href}
                                alt={project.title}
                                className="w-full rounded-xl mb-6"
                                style={{ border: '1px solid var(--color-brand-border)', background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)' }}
                                loading="lazy"
                            />
                        </div>
                    )}

                    <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand">{project.title}</h2>
                            {project.status && (
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                                    {project.status}
                                </span>
                            )}
                        </div>
                        {project.period && <p className="text-muted font-mono mb-2">{project.period}</p>}
                        {project.role && <p className="text-muted mb-4">Role: <span className="text-brand font-semibold">{project.role}</span></p>}

                        <div className="flex flex-wrap gap-2 text-sm font-medium font-mono">
                            {project.tech.map((tech) => (
                                <span key={tech} className="chip">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {project.demoGif && (
                        <div className="mb-8">
                            <img
                                src={project.demoGif}
                                alt={`${project.title} demo`}
                                className="w-full rounded-xl"
                                style={{ border: '1px solid var(--color-brand-border)', background: 'color-mix(in srgb, var(--color-brand-card) 50%, transparent)' }}
                                loading="lazy"
                            />
                        </div>
                    )}

                    {project.problem && (
                        <div className="mb-5">
                            <h3 className="text-lg font-semibold text-brand mb-2">Problem</h3>
                            <p className="text-muted leading-relaxed">{project.problem}</p>
                        </div>
                    )}

                    {project.architecture && project.architecture.length > 0 && (
                        <div className="mb-5">
                            <h3 className="text-lg font-semibold text-brand mb-2">Architecture</h3>
                            <ul className="space-y-1 text-muted list-disc list-inside">
                                {project.architecture.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.impact && project.impact.length > 0 && (
                        <div className="mb-5">
                            <h3 className="text-lg font-semibold text-brand mb-2">Impact</h3>
                            <ul className="space-y-1 text-muted list-disc list-inside">
                                {project.impact.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={`prose max-w-none mb-8 ${isLightTheme ? '' : 'prose-invert'}`}>
                        {/* Usage of long description if available, else standard description */}
                        {project.longDescription ? (
                            <div className="space-y-1">
                                {renderDescription(project.longDescription)}
                            </div>
                        ) : (
                            <p className="text-lg text-muted leading-relaxed">{project.description}</p>
                        )}
                    </div>

                    <div className="flex gap-4 pt-6" style={{ borderTop: '1px solid var(--color-brand-border)' }}>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-brand transition-colors"
                                style={{ background: 'color-mix(in srgb, var(--color-brand-card) 50%, transparent)', border: '1px solid var(--color-brand-border)' }}
                            >
                                <Github size={20} /> View Source
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
                                style={{ background: 'linear-gradient(90deg, var(--color-brand-accent), var(--color-brand-accent-secondary))', color: 'var(--color-brand-text)' }}
                            >
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
