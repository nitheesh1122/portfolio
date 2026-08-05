import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { skills } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

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
        inputRef.current?.focus({ preventScroll: true });
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
        <section id="skills" className="py-28 md:py-36 relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-6 relative z-20">
                <SectionHeader index="03" title="Arsenal" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="terminal-panel overflow-hidden"
                >
                    <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--terminal-border)' }}>
                        <div className="flex items-center gap-2.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs font-mono opacity-70 flex items-center gap-2">
                            <Terminal size={14} />
                            {prompt}
                        </span>
                    </div>

                    <div className="p-6 md:p-8 font-mono text-sm space-y-5">
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                            {quickCommands.map((command) => (
                                <button
                                    key={command}
                                    type="button"
                                    onClick={() => {
                                        setCommandInput(command);
                                        inputRef.current?.focus();
                                    }}
                                    className="text-left px-3 py-2 rounded-md border transition-colors hover:opacity-100 opacity-80"
                                    style={{ borderColor: 'var(--terminal-border)' }}
                                >
                                    <span className="block text-terminal-accent">{command}</span>
                                    <span className="block mt-1 opacity-60">{commandDescriptions[command]}</span>
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
                                                className="space-y-1 opacity-80 leading-relaxed"
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
                                                className="flex flex-wrap items-center gap-2"
                                            >
                                                <span className="text-terminal-accent">{prompt}</span>
                                                <span>{entry.value}</span>
                                            </motion.div>
                                        );
                                    }

                                    if (entry.kind === 'message') {
                                        const toneClass =
                                            entry.tone === 'error'
                                                ? 'text-rose-400'
                                                : entry.tone === 'success'
                                                  ? 'text-terminal-accent'
                                                  : 'opacity-80';

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
                                            className="pl-4 space-y-3"
                                            style={{ borderLeft: '1px solid var(--terminal-border)' }}
                                        >
                                            <div className="flex flex-wrap items-center gap-3">
                                                <div className="font-semibold text-sm text-terminal-accent">{entry.title}</div>
                                                {entry.description && (
                                                    <div className="text-xs opacity-60">{entry.description}</div>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {entry.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 rounded-md text-xs font-mono"
                                                        style={{ border: '1px solid var(--terminal-border)' }}
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
                            className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-md px-4 py-3"
                            style={{ border: '1px solid var(--terminal-border)' }}
                        >
                            <span className="text-terminal-accent shrink-0">{prompt}</span>
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                                <input
                                    ref={inputRef}
                                    value={commandInput}
                                    onChange={(event) => setCommandInput(event.target.value)}
                                    autoComplete="off"
                                    spellCheck={false}
                                    placeholder="/frontend"
                                    aria-label="Terminal command input"
                                    className="min-w-0 flex-1 bg-transparent outline-none placeholder:opacity-30"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 rounded-md px-3 py-1.5 text-xs hover:opacity-100 opacity-80 transition-opacity"
                                    style={{ border: '1px solid var(--terminal-border)' }}
                                >
                                    run
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                <div className="mt-6 flex justify-center text-xs">
                    <div className="flex items-center gap-2 text-muted">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                        Building AI-driven systems
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalArsenal;
