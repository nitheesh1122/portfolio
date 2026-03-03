import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
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
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Awards', href: '#awards' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                    {personalInfo.name}
                    <span className="text-brand-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-secondary transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    <div className="flex items-center gap-5 pl-8 border-l border-white/10">
                        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 px-5 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-brand-accent to-brand-accent-secondary text-black hover:scale-105 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white hover:text-brand-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#0f0f0f] border-b border-white/5 p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-slate-200 hover:text-brand-accent py-2 border-b border-white/5 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="mt-2">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center py-3 rounded-xl font-bold text-base bg-gradient-to-r from-brand-accent to-brand-accent-secondary text-black"
                        >
                            View Resume
                        </a>
                    </div>
                    <div className="flex gap-6 mt-4 justify-center">
                        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                        <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
