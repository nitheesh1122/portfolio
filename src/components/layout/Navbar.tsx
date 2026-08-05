import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { index: '01', name: 'About', href: '#about' },
        { index: '02', name: 'Work', href: '#projects' },
        { index: '03', name: 'Arsenal', href: '#skills' },
        { index: '04', name: 'Recognition', href: '#recognition' },
        { index: '05', name: 'Activity', href: '#activity' },
        { index: '06', name: 'Contact', href: '#contact' },
    ];

    // Theme handling
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        try {
            const stored = localStorage.getItem('theme');
            return (stored as 'dark' | 'light') || 'light';
        } catch {
            return 'light';
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.add('light');
        } else {
            root.classList.remove('light');
        }
        try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-sm border-brand py-4' : 'border-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-lg font-display font-semibold tracking-tight text-brand">
                    {personalInfo.name}
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium text-muted hover:text-brand transition-colors flex items-center gap-1.5"
                        >
                            <span className="font-mono text-[10px] text-brand-accent">{link.index}</span>
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-5 pl-6 border-l border-brand">
                        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-brand transition-colors">
                            <Github size={18} />
                        </a>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-brand transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline !px-4 !py-2 text-xs"
                        >
                            Resume
                        </a>
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative w-12 h-7 rounded-full flex items-center p-1 border border-brand focus:outline-none"
                        >
                            <motion.span
                                className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center bg-brand-accent text-white"
                                animate={{ x: theme === 'light' ? 20 : 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {theme === 'light' ? <Sun size={12} /> : <Moon size={12} />}
                            </motion.span>
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-brand" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeOut' }}
                        className="md:hidden absolute top-full left-0 w-full bg-brand-card border-b border-brand p-6 flex flex-col gap-1 shadow-xl z-50"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-brand py-3 border-b border-brand transition-colors flex items-center gap-3"
                            >
                                <span className="font-mono text-xs text-brand-accent">{link.index}</span>
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-solid w-full"
                            >
                                View Resume
                            </a>
                        </div>
                        <div className="flex gap-6 mt-5 justify-center">
                            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-brand transition-colors"><Github size={22} /></a>
                            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-brand transition-colors"><Linkedin size={22} /></a>
                            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-muted hover:text-brand transition-colors"><Mail size={22} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
