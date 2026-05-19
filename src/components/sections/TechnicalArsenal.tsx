import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { skills } from '../../data/portfolio';

const TechnicalArsenal = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCommands, setShowCommands] = useState(false);
    const [expandedCommand, setExpandedCommand] = useState<string | null>(null);

    const introText = '> initializing developer profile...\n> loading technical arsenal...\n> access granted\n\n';

    // Typing animation for intro
    useEffect(() => {
        if (displayedText.length < introText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(introText.slice(0, displayedText.length + 1));
            }, 30);
            return () => clearTimeout(timer);
        } else if (displayedText.length === introText.length && !showCommands) {
            const timer = setTimeout(() => setShowCommands(true), 500);
            return () => clearTimeout(timer);
        }
    }, [displayedText, showCommands, introText]);

    const terminalCommands = [
        { cmd: 'stack.languages', content: skills[0] },
        { cmd: 'stack.frontend', content: skills[1] },
        { cmd: 'stack.backend', content: { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'] } },
        { cmd: 'stack.database', content: skills[2] },
        { cmd: 'stack.tools', content: skills[3] },
        { cmd: 'stack.deployment', content: skills[4] },
        { cmd: 'learning.now', content: { title: 'Currently Learning', skills: ['System Design', 'Docker', 'Redis', 'AI Engineering'] } },
    ];

    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
            {/* Ambient glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px] animate-pulse" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-semibold mb-4 text-brand">Technical Arsenal</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Explore my tech stack through a developer terminal. Type commands to discover my expertise.
                    </p>
                </motion.div>

                {/* Terminal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Terminal Window */}
                    <div className="bg-gradient-to-b from-slate-900/80 to-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                        {/* Terminal Header */}
                        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-cyan-500/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                            </div>
                            <span className="text-xs font-mono text-cyan-400/70">nitheesh@portfolio:~$</span>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 md:p-8 font-mono text-sm">
                            {/* Intro Text with Cursor */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-cyan-400/90 whitespace-pre-wrap mb-6 leading-relaxed"
                            >
                                {displayedText}
                                {displayedText.length < introText.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="text-cyan-400 text-lg"
                                    >
                                        ▊
                                    </motion.span>
                                )}
                            </motion.div>

                            {/* Commands List */}
                            <AnimatePresence>
                                {showCommands && (
                                    <motion.div className="space-y-3">
                                        {terminalCommands.map((cmd, idx) => (
                                            <motion.div
                                                key={cmd.cmd}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.08 }}
                                            >
                                                <CommandBlock
                                                    cmd={cmd.cmd}
                                                    content={cmd.content}
                                                    isExpanded={expandedCommand === cmd.cmd}
                                                    onToggle={() =>
                                                        setExpandedCommand(
                                                            expandedCommand === cmd.cmd ? null : cmd.cmd
                                                        )
                                                    }
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Status Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 flex flex-wrap gap-4 justify-center"
                >
                    <div className="flex items-center gap-2 text-sm text-cyan-400/80">
                        <motion.div
                            animate={{ opacity: [1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                        />
                        Available for opportunities
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-400/80">
                        <motion.div
                            animate={{ opacity: [0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"
                        />
                        Building AI-driven systems
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

interface CommandBlockProps {
    cmd: string;
    content: { title: string; skills: string[] };
    isExpanded: boolean;
    onToggle: () => void;
}

const CommandBlock = ({ cmd, content, isExpanded, onToggle }: CommandBlockProps) => {
    const [displayedCmd, setDisplayedCmd] = useState('');

    useEffect(() => {
        if (displayedCmd.length < cmd.length) {
            const timer = setTimeout(() => {
                setDisplayedCmd(cmd.slice(0, displayedCmd.length + 1));
            }, 30);
            return () => clearTimeout(timer);
        }
    }, [displayedCmd, cmd]);

    return (
        <motion.div className="space-y-2">
            {/* Command Line */}
            <motion.button
                onClick={onToggle}
                className="w-full text-left group cursor-pointer relative overflow-hidden"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="flex items-center gap-2 relative z-10">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <span className="text-cyan-400 font-mono group-hover:text-cyan-300 transition-colors">
                        {displayedCmd}
                    </span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <ChevronRight size={16} className="text-cyan-400/60" />
                    </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                        backgroundPosition: '200% center',
                    }}
                />
            </motion.button>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pl-6 pt-2 pb-3 border-l border-cyan-500/20 space-y-2">
                            <div className="text-cyan-300/90 font-semibold text-xs mb-2">
                                {content.title}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {content.skills.map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/10 border border-cyan-500/30 rounded text-cyan-200/90 text-xs font-mono hover:border-cyan-400/50 hover:bg-cyan-500/15 transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default TechnicalArsenal;
