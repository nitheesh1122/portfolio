import { ArrowUp } from 'lucide-react';
import { motion, useSpring } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

const FloatingActions = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const ref = useRef<HTMLButtonElement>(null);
    const springConfig = { damping: 15, stiffness: 300, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        x.set(distanceX * 0.4);
        y.set(distanceY * 0.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
            {/* Scroll Top with Magnetic Physics */}
            <motion.button
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x, y }}
                onClick={scrollToTop}
                className="w-12 h-12 bg-white/5 border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 text-white rounded-full flex items-center justify-center shadow-lg transition-colors backdrop-blur-md group"
                title="Scroll to Top"
            >
                <ArrowUp size={20} className="stroke-[2] group-hover:text-brand-accent transition-colors" />
            </motion.button>
        </div>
    );
};

export default FloatingActions;
