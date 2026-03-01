import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, User, Code, Hammer, Mail, Command } from 'lucide-react';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle Ctrl+K / Cmd+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const commands = [
        { id: 'resume', title: 'View Resume', icon: <FileText size={18} />, action: () => window.open('/resume.pdf', '_blank') },
        { id: 'about', title: 'Go to About', icon: <User size={18} />, action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: 'projects', title: 'View Projects', icon: <Code size={18} />, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: 'skills', title: 'Explore Skills', icon: <Hammer size={18} />, action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: 'contact', title: 'Send a Message', icon: <Mail size={18} />, action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const executeCommand = (action: () => void) => {
        action();
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-[#0B0F19]/80 backdrop-blur-sm z-[9999]"
                    />

                    {/* Palette */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-brand-card shadow-2xl rounded-2xl border border-brand-border z-[10000] overflow-hidden"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/5">
                            <Search size={20} className="text-brand-muted shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Type a command or search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-white px-3 py-2 placeholder:text-brand-muted text-lg"
                            />
                            <div className="flex items-center gap-1 text-xs text-brand-muted bg-white/5 px-2 py-1 rounded">
                                <Command size={12} /> K
                            </div>
                        </div>

                        <div className="p-2 max-h-[60vh] overflow-y-auto">
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((cmd) => (
                                    <button
                                        key={cmd.id}
                                        onClick={() => executeCommand(cmd.action)}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-brand-muted hover:text-white hover:bg-brand-accent/10 hover:border-l-[3px] border-l-[3px] border-transparent hover:border-brand-accent rounded-lg transition-all"
                                    >
                                        <div className="text-brand-accent/70">{cmd.icon}</div>
                                        <span className="font-medium">{cmd.title}</span>
                                    </button>
                                ))
                            ) : (
                                <div className="text-center py-8 text-brand-muted">
                                    No commands found for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
