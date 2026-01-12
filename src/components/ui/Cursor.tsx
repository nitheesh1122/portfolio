import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <>
            {/* Main Pointer */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999]"
                animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            {/* Glowing Spotlight Effect */}
            <motion.div
                className="fixed top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full pointer-events-none z-[9998] blur-3xl mix-blend-screen"
                animate={{ x: mousePosition.x - 128, y: mousePosition.y - 128 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            {/* Ring Follower */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-blue-400/50 rounded-full pointer-events-none z-[9998]"
                animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </>
    );
};

export default Cursor;
