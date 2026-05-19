import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { GitHubCalendar } from 'react-github-calendar';

interface StatImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
    className?: string;
}

const StatImage = ({ src, alt, fallbackSrc, className }: StatImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="w-full relative">
            {isLoading && (
                <div className="absolute inset-0 rounded-lg loading-shimmer animate-pulse" />
            )}

            <img
                src={hasError ? fallbackSrc : src}
                alt={alt}
                className={className}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    if (!hasError) {
                        setHasError(true);
                        return;
                    }
                    setIsLoading(false);
                }}
            />

            {hasError && (
                <p className="text-xs text-muted mt-2 text-center">
                    Live widget unavailable, showing cached snapshot.
                </p>
            )}
        </div>
    );
};

const CodeActivity = () => {
    const [isLightTheme, setIsLightTheme] = useState(() =>
        typeof window !== 'undefined' && document.documentElement.classList.contains('light')
    );

    useEffect(() => {
        const root = document.documentElement;
        const syncTheme = () => setIsLightTheme(root.classList.contains('light'));

        syncTheme();

        const observer = new MutationObserver(syncTheme);
        observer.observe(root, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const githubCalendarTheme = isLightTheme
        ? {
            light: ['#e5e7eb', '#cbd5e1', '#94a3b8', '#64748b', '#0f172a'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }
        : {
            light: ['#e5e7eb', '#cbd5e1', '#94a3b8', '#64748b', '#0f172a'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        };

    const githubStatsTheme = isLightTheme
        ? {
            theme: 'transparent',
            titleColor: '0f172a',
            textColor: '0f172a',
            iconColor: '06b6d4',
            backgroundColor: 'ffffff',
        }
        : {
            theme: 'transparent',
            titleColor: '10b981',
            textColor: 'ffffff',
            iconColor: '06b6d4',
            backgroundColor: '0a0a0a',
        };

    const leetCodeTheme = isLightTheme ? 'light' : 'dark';

    return (
        <section id="activity" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-semibold mb-4 text-brand">Code Activity</h2>
                    <p className="text-muted max-w-2xl mx-auto">Consistent contributions and problem-solving metrics.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* LeetCode Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="bg-card p-8 rounded-2xl border border-brand hover:border-brand-accent/30 transition-all flex flex-col items-center justify-center text-center"
                    >
                            <h3 className="text-xl font-bold text-brand mb-6">LeetCode Profile</h3>
                            <div className="w-full flex justify-center bg-card rounded-xl p-4 border border-brand">
                            <StatImage
                                src={`https://leetcard.jacoblin.cool/${personalInfo.leetcodeUsername}?theme=${leetCodeTheme}&font=Inter&ext=activity`}
                                alt="LeetCode Stats"
                                fallbackSrc="/stats/leetcode-card-fallback.svg"
                                className="w-full max-w-[400px] h-auto rounded-lg"
                            />
                        </div>
                        <a
                            href={personalInfo.socials.leetcode}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 text-sm font-medium text-brand-accent hover:text-brand transition-colors"
                        >
                            View Full Profile &rarr;
                        </a>
                    </motion.div>

                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card p-8 rounded-2xl border border-brand hover:border-brand-accent/30 transition-all flex flex-col items-center justify-center text-center w-full"
                    >
                        <h3 className="text-xl font-bold text-brand mb-6 flex items-center justify-center gap-2">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.525-3.795-.45-3.93-1.02-.075-.195-.405-1.02-.69-1.29-.24-.225-.585-.525-.015-.54.54-.015.93.51 1.065.72 1.62 1.05 2.76.75 3.435.57.06-.72.39-1.23.75-1.515-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.405.345.75 1.035.75 2.085 0 1.5-.015 2.715-.015 3.09 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub Stats
                        </h3>

                        <div className="w-full flex flex-col gap-6 items-center">
                            {/* Full Width Contribution Calendar */}
                            <div className="w-full bg-card rounded-xl p-4 border border-brand flex items-center justify-center overflow-x-auto overflow-y-hidden">
                                <GitHubCalendar
                                    username={personalInfo.githubUsername}
                                    colorScheme={isLightTheme ? 'light' : 'dark'}
                                    theme={githubCalendarTheme}
                                    fontSize={12}
                                    blockSize={12}
                                    blockMargin={4}
                                    hideColorLegend
                                    hideTotalCount
                                />
                            </div>

                            {/* Stat Cards Row */}
                            <div className="w-full grid md:grid-cols-2 gap-4">
                                {/* Streak Card */}
                                <div className="bg-card rounded-xl border border-brand flex justify-center overflow-hidden">
                                    <StatImage
                                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${personalInfo.githubUsername}&theme=${githubStatsTheme.theme}&hide_border=true&title_color=${githubStatsTheme.titleColor}&text_color=${githubStatsTheme.textColor}&icon_color=${githubStatsTheme.iconColor}&bg_color=${githubStatsTheme.backgroundColor}`}
                                        alt="GitHub Streak"
                                        fallbackSrc="/stats/github-streak-fallback.svg"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>

                                {/* Top Languages Card */}
                                <div className="bg-card rounded-xl border border-brand flex justify-center overflow-hidden">
                                    <StatImage
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${personalInfo.githubUsername}&layout=compact&theme=${githubStatsTheme.theme}&hide_border=true&title_color=${githubStatsTheme.titleColor}&text_color=${githubStatsTheme.textColor}&bg_color=${githubStatsTheme.backgroundColor}`}
                                        alt="Top Languages"
                                        fallbackSrc="/stats/github-langs-fallback.svg"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 text-sm font-medium text-brand-accent hover:text-brand transition-colors"
                        >
                            View GitHub &rarr;
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CodeActivity;
