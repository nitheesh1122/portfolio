import React, { useState, useRef } from 'react';
import { resume } from '../../data/resume';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await fetch("https://formsubmit.co/ajax/nitheeshselvaraj01@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            setIsSent(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 5000);
        } catch (err) {
            console.error(err);
            setError('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto border border-brand-border bg-brand-card/30 backdrop-blur-lg rounded-3xl p-8 md:p-16 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Let's build together.</h2>
                        <p className="text-brand-muted mb-10 text-lg leading-relaxed">
                            I am actively seeking <strong className="text-white">Internship opportunities</strong> and am open to <strong className="text-white">Freelance projects</strong>. If you have an exciting opportunity or just want to connect, feel free to reach out.
                        </p>

                        <div className="space-y-6">
                            <ContactItem icon={<Mail size={22} />} text={resume.personal.email} href={`mailto:${resume.personal.email}`} />
                            <div className="flex items-center gap-4 text-brand-muted">
                                <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-brand-accent"><MapPin size={22} /></div>
                                <span className="text-lg">{resume.personal.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-brand-bg/60 p-8 rounded-2xl border border-brand-border space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-brand-muted mb-2">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black/50 border border-brand-border rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-brand-muted mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black/50 border border-brand-border rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-brand-muted mb-2">Message</label>
                            <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-black/50 border border-brand-border rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isSent
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-brand-accent text-[#050550] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                                }`}
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : isSent ? "Message Sent!" : <>Send Message <Send size={18} /></>}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) => (
    <a href={href} className="flex items-center gap-4 text-brand-muted hover:text-white transition-colors group">
        <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/10 transition-colors">
            {icon}
        </div>
        <span className="break-all text-lg">{text}</span>
    </a>
)

export default Contact;
