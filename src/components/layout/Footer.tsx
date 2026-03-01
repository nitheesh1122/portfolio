import { resume } from '../../data/resume';

const Footer = () => {
    return (
        <footer className="border-t border-brand-border bg-brand-bg py-8 text-center text-brand-muted text-sm relative z-10">
            <p>&copy; {new Date().getFullYear()} {resume.personal.name}. All rights reserved.</p>
            <p className="mt-1">Built with React, Tailwind & Vite.</p>
        </footer>
    );
};

export default Footer;
