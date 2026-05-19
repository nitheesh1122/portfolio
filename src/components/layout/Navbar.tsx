import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Education', href: '#education' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Awards', href: '#awards' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Activity', href: '#activity' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
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
        try { localStorage.setItem('theme', theme); } catch { }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[color:var(--color-brand-bg)]/80 backdrop-blur-md shadow-lg border-b border-brand py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight text-brand flex items-center gap-1">
                    {personalInfo.name}
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium text-muted hover:text-brand transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-secondary transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    <div className="flex items-center gap-5 pl-8 border-l border-brand">
                        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-brand transition-colors">
                            <Github size={18} />
                        </a>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-brand transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 btn-accent hover:scale-105 transition-all"
                        >
                            Resume
                        </a>
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="ml-4 relative w-14 h-8 rounded-full flex items-center p-1 transition-all duration-400 focus:outline-none"
                        >
                            <span className={`absolute inset-0 rounded-full transition-colors duration-400 ${theme === 'light' ? 'bg-white/90 border border-brand' : 'bg-card border border-brand'}`}></span>
                            <span className={`relative z-10 w-6 h-6 rounded-full transform transition-transform duration-400 ${theme === 'light' ? 'translate-x-6 bg-[color:var(--color-brand-accent)] shadow-[0_6px_18px_rgba(250,204,21,0.22)]' : 'translate-x-0 bg-[color:var(--color-brand-card)] shadow-[0_6px_18px_rgba(2,6,23,0.6)]'}`}> 
                                {theme === 'light' ? <Sun size={14} className="mx-auto mt-1 text-brand" /> : <Moon size={14} className="mx-auto mt-1 text-brand" />}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-brand hover:text-brand-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-[100%] left-0 w-full bg-card border-b border-brand p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-brand hover:text-brand-accent py-2 border-b border-brand transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="mt-2">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center py-3 rounded-xl font-bold text-base accent-gradient"
                        >
                            View Resume
                        </a>
                    </div>
                    <div className="flex gap-6 mt-4 justify-center">
                        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-brand transition-colors"><Github size={24} /></a>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-brand transition-colors"><Linkedin size={24} /></a>
                        <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-brand transition-colors"><Mail size={24} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
