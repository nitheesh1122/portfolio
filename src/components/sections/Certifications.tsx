import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolio';
import { BadgeCheck } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-[#0d0d0d] relative z-10 border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-2 flex items-center gap-4 text-white">
                        <span className="text-brand-accent">
                            <BadgeCheck size={36} />
                        </span>
                        Certifications
                    </h2>
                    <p className="text-slate-400 pl-16">Professional credentials and verified knowledge</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-6 p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-brand-accent/30 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                {/* Fallback Oracle "O" icon style if no explicit image */}
                                <span className="text-2xl font-black text-red-500 font-serif">O</span>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-brand-accent transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="text-sm">
                                    <span className="text-slate-300 font-medium mr-2">{cert.issuer}</span>
                                    <span className="text-slate-500">&bull; {cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
