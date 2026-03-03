import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        I'm currently available for full-time opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
                >
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent text-black font-semibold rounded-full hover:scale-105 transition-transform"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <Phone size={20} />
                        {personalInfo.phone}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center items-center gap-2 text-slate-500"
                >
                    <MapPin size={18} />
                    <span>{personalInfo.location}</span>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
