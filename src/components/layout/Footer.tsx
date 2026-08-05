import { personalInfo } from '../../data/portfolio';

const Footer = () => {
    return (
        <footer className="border-t border-brand py-8 text-sm relative z-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="font-mono text-muted">
                    <span className="text-brand-accent">nitheesh@portfolio:~$</span> echo "&copy; {new Date().getFullYear()} {personalInfo.name}"
                </p>
                <p className="text-muted">Built with React &amp; Tailwind.</p>
            </div>
        </footer>
    );
};

export default Footer;
