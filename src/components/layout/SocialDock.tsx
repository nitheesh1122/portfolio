import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { motion } from 'framer-motion';

const SocialDock = () => {
    const items = [
        { href: personalInfo.socials.github, icon: <Github size={18} />, label: 'GitHub' },
        { href: personalInfo.socials.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
        { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: 'Email' },
    ];

    return (
        <div className="fixed right-6 top-1/3 z-50 hidden md:flex flex-col gap-3">
            {items.map((item) => (
                <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    whileHover={{ x: -6 }}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-card border border-brand text-brand shadow-md"
                >
                    {item.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialDock;
