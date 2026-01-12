import { resume } from '../../data/resume';
import { Reveal } from '../ui/Reveal';

const CodingProfile = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Coding Activity</h2>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LeetCode Stats */}
                    <Reveal delay={0.2} width="100%">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-yellow-500">LeetCode Stats</h3>
                                <a
                                    href={resume.personal.leetcode}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    View Profile →
                                </a>
                            </div>
                            <div className="flex justify-center overflow-hidden">
                                <img
                                    src="https://leetcard.jacoblin.cool/nitheeshs06?theme=dark&font=inter&ext=heatmap"
                                    alt="LeetCode Stats"
                                    className="w-full max-w-sm lg:max-w-full opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </Reveal>

                    {/* GitHub Stats */}
                    <Reveal delay={0.4} width="100%">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">GitHub Contributions</h3>
                                <a
                                    href={resume.personal.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    View Profile →
                                </a>
                            </div>
                            <div className="flex justify-center overflow-hidden pt-4">
                                <img
                                    src="http://ghchart.rshah.org/409ba5/nitheesh1122"
                                    alt="GitHub Contributions"
                                    className="w-full opacity-90 group-hover:opacity-100 transition-opacity invert hue-rotate-180"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CodingProfile;
