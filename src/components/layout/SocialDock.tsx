import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { motion } from 'framer-motion';

const SocialDock = () => {
    const items = [
        {
            href: personalInfo.socials.github,
            icon: <Github size={18} className="text-[#333] dark:text-[#fafafa]" />,
            label: 'GitHub',
            bg: 'bg-[#fafafa] dark:bg-[#23272e] border-[#23272e] dark:border-[#fafafa]'
        },
        {
            href: personalInfo.socials.linkedin,
            icon: <Linkedin size={18} className="text-[#0a66c2] dark:text-[#63a4ea]" />,
            label: 'LinkedIn',
            bg: 'bg-[#eaf4fb] dark:bg-[#0a66c2] border-[#0a66c2] dark:border-[#eaf4fb]'
        },
        {
            href: `mailto:${personalInfo.email}`,
            icon: <Mail size={18} className="text-[#ea4335] dark:text-[#f28b82]" />,
            label: 'Email',
            bg: 'bg-[#fff5f5] dark:bg-[#ea4335] border-[#ea4335] dark:border-[#fff5f5]'
        },
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
                    className={`flex items-center justify-center w-11 h-11 rounded-full border shadow-md transition-colors duration-200 ${item.bg}`}
                >
                    {item.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialDock;
