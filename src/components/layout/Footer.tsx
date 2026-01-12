import { resume } from '../../data/resume';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {resume.personal.name}. All rights reserved.</p>
            <p className="mt-1">Built with React, Tailwind & Vite.</p>
        </footer>
    );
};

export default Footer;
