import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "../../types";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

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

    // Simple Markdown-like renderer (handling newlines and basic headers)
    const renderDescription = (text: string) => {
        return text.split('\n').map((line, index) => {
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-blue-400 mt-4 mb-2">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('- ')) {
                return <li key={index} className="ml-4 mb-1 text-gray-300">{line.replace('- ', '')}</li>;
            }
            if (!line.trim()) {
                return <br key={index} />;
            }
            return <p key={index} className="text-gray-300 leading-relaxed">{line}</p>;
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
            <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-10">
                    <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                                {project.status}
                            </span>
                        </div>
                        <p className="text-gray-400 font-mono mb-4">{project.period}</p>

                        <div className="flex flex-wrap gap-2 text-sm text-blue-400 font-medium font-mono">
                            {project.tech.split(',').map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none mb-8">
                        {/* Usage of long description if available, else standard description */}
                        {project.longDescription ? (
                            <div className="space-y-1">
                                {renderDescription(project.longDescription)}
                            </div>
                        ) : (
                            <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
                        )}
                    </div>

                    <div className="flex gap-4 border-t border-white/10 pt-6">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                            >
                                <Github size={20} /> View Source
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
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
