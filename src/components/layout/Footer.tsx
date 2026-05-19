import { personalInfo } from '../../data/portfolio';

const Footer = () => {
    return (
        <footer className="border-t border-brand bg-card py-8 text-center text-muted text-sm relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                <p className="mt-2 text-muted">Powered by React. Styled with Tailwind. Animated with precision.</p>
            </div>
        </footer>
    );
};

export default Footer;
