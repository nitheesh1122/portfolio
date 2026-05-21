import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { skills } from '../../data/portfolio';

type TerminalEntry =
    | {
          id: number;
          kind: 'system';
          lines: string[];
      }
    | {
          id: number;
          kind: 'command';
          value: string;
      }
    | {
          id: number;
          kind: 'result';
          title: string;
          skills: string[];
          description?: string;
      }
    | {
          id: number;
          kind: 'message';
          text: string;
          tone: 'hint' | 'error' | 'success';
      };

const prompt = 'nitheesh@portfolio:~$';

const getCategory = (title: string) => skills.find((category) => category.title === title);

const commandMap: Record<string, string> = {
    '/languages': 'Programming Languages',
    '/frontend': 'Frontend',
    '/backend': 'Backend',
    '/databases': 'Databases',
    '/cloud': 'Cloud & Deployment',
    '/deployment': 'Cloud & Deployment',
    '/tools': 'Developer Tools',
    '/design': 'Design & Analytics',
    '/analytics': 'Design & Analytics',
    '/softskills': 'Soft Skills',
};

const quickCommands = ['/help', '/languages', '/frontend', '/backend', '/databases', '/cloud', '/tools', '/design', '/softskills', '/all'];

const commandDescriptions: Record<string, string> = {
    '/help': 'Show available commands',
    '/languages': 'Programming languages',
    '/frontend': 'Frontend stack',
    '/backend': 'Backend stack',
    '/databases': 'Databases',
    '/cloud': 'Cloud & Deployment',
    '/deployment': 'Cloud & Deployment',
    '/tools': 'Developer Tools',
    '/design': 'Design & Analytics',
    '/analytics': 'Design & Analytics',
    '/softskills': 'Soft Skills',
    '/all': 'Show the full arsenal',
};

const TechnicalArsenal = () => {
    const [commandInput, setCommandInput] = useState('');
    const [entries, setEntries] = useState<TerminalEntry[]>([
        {
            id: 1,
            kind: 'system',
            lines: [
                'type /help to see the available commands.',
                        'try /frontend to inspect the frontend stack.',
            ],
        },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const nextEntryId = useRef(2);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [entries]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const buildResultEntries = (command: string): TerminalEntry[] => {
        const normalized = command.trim().toLowerCase();

        if (!normalized) {
            return [];
        }

        if (normalized === '/help') {
            return [
                {
                    id: nextEntryId.current++,
                    kind: 'message',
                    tone: 'hint',
                    text: 'Available commands: /languages, /frontend, /backend, /databases, /cloud, /tools, /design, /softskills, /all, /help',
                },
            ];
        }

        if (normalized === '/all') {
            return [
                {
                    id: nextEntryId.current++,
                    kind: 'result',
                    title: 'Full Stack Overview',
                    description: 'Everything I actively use across product builds and shipped projects.',
                    skills: skills.flatMap((category) => category.skills),
                },
            ];
        }

        const matchedCategory = commandMap[normalized];
        if (matchedCategory) {
            const category = getCategory(matchedCategory);

            if (category) {
                return [
                    {
                        id: nextEntryId.current++,
                        kind: 'result',
                        title: category.title,
                        description: commandDescriptions[normalized],
                        skills: category.skills,
                    },
                ];
            }
        }

        return [
            {
                id: nextEntryId.current++,
                kind: 'message',
                tone: 'error',
                text: `Command not found: ${command}. Type /help for the available commands.`,
            },
        ];
    };

    const handleSubmit = (value: string) => {
        const trimmed = value.trim();

        if (!trimmed) {
            return;
        }

        const commandEntry: TerminalEntry = {
            id: nextEntryId.current++,
            kind: 'command',
            value: trimmed,
        };

        const resultEntries = buildResultEntries(trimmed);

        setEntries((current) => [...current, commandEntry, ...resultEntries]);
        setCommandInput('');
    };

    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
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
                        Explore my tech stack through a live developer terminal.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="bg-gradient-to-b from-slate-900/80 to-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-cyan-500/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                            </div>
                            <span className="text-xs font-mono text-cyan-400/70 flex items-center gap-2">
                                <Terminal size={14} />
                                {prompt}
                            </span>
                        </div>

                        <div className="p-6 md:p-8 font-mono text-sm space-y-5">
                            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs text-cyan-400/70">
                                {quickCommands.map((command) => (
                                    <button
                                        key={command}
                                        type="button"
                                        onClick={() => {
                                            setCommandInput(command);
                                            inputRef.current?.focus();
                                        }}
                                        className="text-left px-3 py-2 rounded-lg border border-cyan-500/10 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-colors"
                                    >
                                        <span className="block text-cyan-300">{command}</span>
                                        <span className="block mt-1 text-cyan-400/50">{commandDescriptions[command]}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-3 max-h-[28rem] overflow-y-auto pr-1">
                                <AnimatePresence initial={false}>
                                    {entries.map((entry) => {
                                        if (entry.kind === 'system') {
                                            return (
                                                <motion.div
                                                    key={entry.id}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="space-y-1 text-cyan-400/85 leading-relaxed"
                                                >
                                                    {entry.lines.map((line) => (
                                                        <div key={line}>{line}</div>
                                                    ))}
                                                </motion.div>
                                            );
                                        }

                                        if (entry.kind === 'command') {
                                            return (
                                                <motion.div
                                                    key={entry.id}
                                                    initial={{ opacity: 0, x: -8 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="flex flex-wrap items-center gap-2 text-cyan-300"
                                                >
                                                    <span className="text-cyan-400">{prompt}</span>
                                                    <span className="text-white">{entry.value}</span>
                                                </motion.div>
                                            );
                                        }

                                        if (entry.kind === 'message') {
                                            const toneClass =
                                                entry.tone === 'error'
                                                    ? 'text-rose-300'
                                                    : entry.tone === 'success'
                                                      ? 'text-emerald-300'
                                                      : 'text-cyan-300';

                                            return (
                                                <motion.div
                                                    key={entry.id}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className={toneClass}
                                                >
                                                    {entry.text}
                                                </motion.div>
                                            );
                                        }

                                        return (
                                            <motion.div
                                                key={entry.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="pl-4 border-l border-cyan-500/20 space-y-3"
                                            >
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <div className="text-cyan-300/95 font-semibold text-sm">{entry.title}</div>
                                                    {entry.description && (
                                                        <div className="text-cyan-400/55 text-xs">{entry.description}</div>
                                                    )}
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {entry.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/10 border border-cyan-500/30 rounded text-cyan-200/90 text-xs font-mono hover:border-cyan-400/50 hover:bg-cyan-500/15 transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                                <div ref={scrollRef} />
                            </div>

                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    handleSubmit(commandInput);
                                }}
                                className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 shadow-inner shadow-cyan-500/5"
                            >
                                <span className="text-cyan-400 shrink-0">{prompt}</span>
                                <input
                                    ref={inputRef}
                                    value={commandInput}
                                    onChange={(event) => setCommandInput(event.target.value)}
                                    autoComplete="off"
                                    spellCheck={false}
                                    placeholder="/frontend"
                                    className="w-full bg-transparent text-white placeholder:text-cyan-400/35 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 rounded-lg border border-cyan-500/20 px-3 py-1.5 text-xs text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors"
                                >
                                    run
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

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

export default TechnicalArsenal;
