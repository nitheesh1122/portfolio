import { Download, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
            {/* Download Resume Mock */}
            <a
                href="/resume.pdf"
                download="Nitheesh_Resume.pdf"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group relative"
                title="Download Resume"
            >
                <Download size={20} />
                <span className="absolute right-full mr-4 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Download Resume
                </span>
            </a>

            {/* Scroll Top */}
            <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                title="Scroll to Top"
            >
                <ArrowUp size={20} />
            </button>
        </div>
    );
};

export default FloatingActions;
