import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resume } from '../../data/resume';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19]"
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            className="absolute w-24 h-24 border-t-2 border-b-2 border-brand-accent/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute w-16 h-16 border-r-2 border-l-2 border-brand-accent/50 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-xl font-bold text-white tracking-widest uppercase"
                        >
                            {resume.personal.name.split(' ')[0][0]}<span className="text-brand-accent">{resume.personal.name.split(' ')[1]?.[0] || 'dev'}</span>
                        </motion.span>

                        {/* Soft Glow */}
                        <div className="absolute w-32 h-32 bg-brand-accent/10 blur-2xl rounded-full mix-blend-screen" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
