import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { GitHubCalendar } from 'react-github-calendar';
import SectionHeader from '../ui/SectionHeader';

interface StatImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
    className?: string;
}

const STAT_IMAGE_TIMEOUT_MS = 8000;

const StatImage = ({ src, alt, fallbackSrc, className }: StatImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined);

    // Some of these third-party stat services occasionally respond slowly
    // (10s+) or return a technically-valid-but-visually-empty image rather
    // than a network error, so onError alone doesn't catch every failure
    // mode. A soft timeout falls back to the same message in that case too,
    // instead of leaving a blank/loading box indefinitely. Cleared as soon
    // as the image actually settles (load or error) so a slow-but-eventually
    // successful load never gets flipped to the failure state afterwards.
    // (Callers remount this component via `key={src}` when src changes, so
    // isLoading/hasError naturally reset to their initial values instead of
    // being reset here.)
    useEffect(() => {
        timeoutRef.current = window.setTimeout(() => setHasError(true), STAT_IMAGE_TIMEOUT_MS);
        return () => window.clearTimeout(timeoutRef.current);
    }, []);

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
                onLoad={() => {
                    window.clearTimeout(timeoutRef.current);
                    setIsLoading(false);
                }}
                onError={() => {
                    window.clearTimeout(timeoutRef.current);
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
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const [isLightTheme, setIsLightTheme] = useState(() =>
        typeof window !== 'undefined' && document.documentElement.classList.contains('light')
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        const root = document.documentElement;
        const syncTheme = () => setIsLightTheme(root.classList.contains('light'));

        syncTheme();
        handleResize();

        const observer = new MutationObserver(syncTheme);
        observer.observe(root, { attributes: true, attributeFilter: ['class'] });
        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
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
            iconColor: '0f766e',
            backgroundColor: 'ffffff',
        }
        : {
            theme: 'transparent',
            titleColor: '10b981',
            textColor: 'ffffff',
            iconColor: '10b981',
            backgroundColor: '0a0a0a',
        };

    const leetCodeTheme = isLightTheme ? 'light' : 'dark';

    return (
        <section id="activity" className="py-20 md:py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <SectionHeader index="05" title="Activity" subtitle="Contributions & problem-solving metrics" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                    {/* LeetCode Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="bento-card p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center"
                    >
                            <h3 className="text-lg sm:text-xl font-display font-semibold text-brand mb-5 sm:mb-6">LeetCode Profile</h3>
                            <div className="w-full flex justify-center bento-card p-3 sm:p-4 overflow-hidden">
                            <StatImage
                                key={leetCodeTheme}
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
                        className="bento-card p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center w-full"
                    >
                        <h3 className="text-lg sm:text-xl font-display font-semibold text-brand mb-5 sm:mb-6 flex items-center justify-center gap-2">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-brand">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.525-3.795-.45-3.93-1.02-.075-.195-.405-1.02-.69-1.29-.24-.225-.585-.525-.015-.54.54-.015.93.51 1.065.72 1.62 1.05 2.76.75 3.435.57.06-.72.39-1.23.75-1.515-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.405.345.75 1.035.75 2.085 0 1.5-.015 2.715-.015 3.09 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub Stats
                        </h3>

                        <div className="w-full flex flex-col gap-6 items-center">
                            {/* Full Width Contribution Calendar */}
                            <div className="w-full bento-card p-3 sm:p-4 flex items-center justify-start md:justify-center overflow-x-auto overflow-y-hidden">
                                <GitHubCalendar
                                    username={personalInfo.githubUsername}
                                    colorScheme={isLightTheme ? 'light' : 'dark'}
                                    theme={githubCalendarTheme}
                                    fontSize={isMobile ? 10 : 12}
                                    blockSize={isMobile ? 10 : 12}
                                    blockMargin={isMobile ? 3 : 4}
                                    showColorLegend={false}
                                    showTotalCount={false}
                                />
                            </div>

                            {/* Stat Cards Row */}
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Streak Card */}
                                <div className="bento-card flex justify-center overflow-hidden">
                                    <StatImage
                                        key={isLightTheme ? 'light' : 'dark'}
                                        src={`https://streak-stats.demolab.com/?user=${personalInfo.githubUsername}&theme=${githubStatsTheme.theme}&hide_border=true&title_color=${githubStatsTheme.titleColor}&text_color=${githubStatsTheme.textColor}&icon_color=${githubStatsTheme.iconColor}&bg_color=${githubStatsTheme.backgroundColor}`}
                                        alt="GitHub Streak"
                                        fallbackSrc="/stats/github-streak-fallback.svg"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>

                                {/* Top Languages Card */}
                                <div className="bento-card flex justify-center overflow-hidden">
                                    <StatImage
                                        key={isLightTheme ? 'light' : 'dark'}
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
