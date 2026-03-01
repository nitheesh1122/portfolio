import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Pointer */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                animate={{ x: mousePosition.x - 5, y: mousePosition.y - 5 }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            {/* Glowing Spotlight Effect */}
            <motion.div
                className="fixed top-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full pointer-events-none z-[9998] blur-[80px] mix-blend-screen"
                animate={{ x: mousePosition.x - 128, y: mousePosition.y - 128 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            {/* Ring Follower */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-brand-accent/30 rounded-full pointer-events-none z-[9998]"
                animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
        </>
    );
};

export default Cursor;
