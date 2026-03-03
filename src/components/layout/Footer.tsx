import { personalInfo } from '../../data/portfolio';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a] py-8 text-center text-slate-500 text-sm relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                <p className="mt-2 text-slate-600">Built with React, Tailwind & Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
