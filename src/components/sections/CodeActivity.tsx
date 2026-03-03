import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { GitHubCalendar } from 'react-github-calendar';

const CodeActivity = () => {
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
                    <h2 className="text-4xl font-semibold mb-4 text-white">Code Activity</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Consistent contributions and problem-solving metrics.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* LeetCode Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all flex flex-col items-center justify-center text-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">LeetCode Profile</h3>
                        {/* We use an external API that generates a Leetcode stats image */}
                        <div className="w-full flex justify-center bg-[#0a0a0a] rounded-xl p-4 border border-white/5">
                            <img
                                src={`https://leetcard.jacoblin.cool/${personalInfo.leetcodeUsername}?theme=dark&font=Inter&ext=activity`}
                                alt="LeetCode Stats"
                                className="w-full max-w-[400px] h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>
                        <a
                            href={personalInfo.socials.leetcode}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 text-sm font-medium text-brand-accent hover:text-white transition-colors"
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
                        className="bg-[#141414] p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all flex flex-col items-center justify-center text-center w-full"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.525-3.795-.45-3.93-1.02-.075-.195-.405-1.02-.69-1.29-.24-.225-.585-.525-.015-.54.54-.015.93.51 1.065.72 1.62 1.05 2.76.75 3.435.57.06-.72.39-1.23.75-1.515-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.405.345.75 1.035.75 2.085 0 1.5-.015 2.715-.015 3.09 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub Stats
                        </h3>

                        <div className="w-full flex flex-col gap-6 items-center">
                            {/* Full Width Contribution Calendar */}
                            <div className="w-full bg-[#0a0a0a] rounded-xl p-4 border border-white/5 flex items-center justify-center overflow-x-auto overflow-y-hidden">
                                <GitHubCalendar
                                    username={personalInfo.githubUsername}
                                    colorScheme="dark"
                                    theme={{
                                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                    }}
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
                                <div className="bg-[#0a0a0a] rounded-xl border border-white/5 flex justify-center overflow-hidden">
                                    <img
                                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${personalInfo.githubUsername}&theme=transparent&hide_border=true&title_color=10b981&text_color=ffffff&icon_color=06b6d4&bg_color=0a0a0a`}
                                        alt="GitHub Streak"
                                        className="h-auto w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Top Languages Card */}
                                <div className="bg-[#0a0a0a] rounded-xl border border-white/5 flex justify-center overflow-hidden">
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${personalInfo.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=10b981&text_color=ffffff&bg_color=0a0a0a`}
                                        alt="Top Languages"
                                        className="h-auto w-full object-contain"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${personalInfo.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=10b981&text_color=ffffff&bg_color=0a0a0a`;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 text-sm font-medium text-brand-accent hover:text-white transition-colors"
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
