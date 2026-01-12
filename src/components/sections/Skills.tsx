import { resume } from '../../data/resume';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-white/5 md:bg-transparent">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Technical Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCategory title="Languages" skills={resume.skills.languages} />
                    <SkillCategory title="Frameworks" skills={resume.skills.frameworks} />
                    <SkillCategory title="Databases" skills={resume.skills.databases} />
                    <SkillCategory title="Tools" skills={resume.skills.tools} />
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {resume.skills.soft.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium text-gray-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-4">Certifications</h3>
                        <div className="space-y-4">
                            {resume.certifications.map((cert, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <span className="text-sm font-medium text-gray-200">{cert.name}</span>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg text-white transition-colors"
                                    >
                                        View
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
    <div>
        <h3 className="text-lg font-semibold text-gray-300 mb-4 border-b border-white/10 pb-2">{title}</h3>
        <ul className="space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);

export default Skills;
