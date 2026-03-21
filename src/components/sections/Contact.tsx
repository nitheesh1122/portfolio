import { FormEvent, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [company, setCompany] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const emailPattern = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

    const validate = () => {
        if (name.trim().length < 2) {
            return 'Please enter your name.';
        }
        if (!emailPattern.test(email.trim())) {
            return 'Please enter a valid email address.';
        }
        if (message.trim().length < 20) {
            return 'Message should be at least 20 characters.';
        }
        return null;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);

        const validationError = validate();
        if (validationError) {
            setStatus({ type: 'error', text: validationError });
            return;
        }

        // Honeypot for bots. Real users never fill this field.
        if (company.trim()) {
            setStatus({ type: 'success', text: 'Thanks! Your message has been received.' });
            setName('');
            setEmail('');
            setMessage('');
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: 'error',
                text: 'Contact form is not configured yet. Please email me directly.'
            });
            return;
        }

        try {
            setSubmitting(true);
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: name.trim(),
                    from_email: email.trim(),
                    message: message.trim(),
                    to_email: personalInfo.email,
                },
                { publicKey }
            );

            setStatus({ type: 'success', text: 'Thanks! Your message has been sent successfully.' });
            setName('');
            setEmail('');
            setMessage('');
            setCompany('');
        } catch {
            setStatus({ type: 'error', text: 'Something went wrong while sending. Please try again or email me directly.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative z-10 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        I'm currently available for full-time opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm text-slate-300 mb-2">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-xl bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white outline-none focus:border-brand-accent"
                                    placeholder="Your name"
                                    autoComplete="name"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm text-slate-300 mb-2">Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-xl bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white outline-none focus:border-brand-accent"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                />
                            </div>

                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="contact-company">Company</label>
                                <input
                                    id="contact-company"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full rounded-xl bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white outline-none focus:border-brand-accent resize-none"
                                    placeholder="Tell me about your role or project."
                                />
                            </div>

                            {status && (
                                <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {status.text}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accent-secondary text-black font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
                        <div className="space-y-4">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="w-full flex items-center gap-3 px-5 py-4 bg-[#0a0a0a] text-white font-medium rounded-xl border border-white/10 hover:border-brand-accent/60 transition-colors"
                            >
                                <Mail size={18} />
                                {personalInfo.email}
                            </a>
                            <a
                                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                                className="w-full flex items-center gap-3 px-5 py-4 bg-[#0a0a0a] text-white font-medium rounded-xl border border-white/10 hover:border-brand-accent/60 transition-colors"
                            >
                                <Phone size={18} />
                                {personalInfo.phone}
                            </a>
                            <div className="w-full flex items-center gap-3 px-5 py-4 bg-[#0a0a0a] text-slate-300 font-medium rounded-xl border border-white/10">
                                <MapPin size={18} />
                                {personalInfo.location}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center items-center gap-2 text-slate-500 mt-10"
                >
                    <MapPin size={18} />
                    <span>{personalInfo.location}</span>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
