import { type FormEvent, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

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

    const links = [
        { label: 'email', href: `mailto:${personalInfo.email}`, external: false },
        { label: 'github', href: personalInfo.socials.github, external: true },
        { label: 'linkedin', href: personalInfo.socials.linkedin, external: true },
    ];

    return (
        <section id="contact" className="py-28 md:py-36 relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeader index="06" title="Contact" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <h3 className="text-4xl md:text-6xl font-display font-semibold text-brand tracking-tight mb-6">
                        Let's build something.
                    </h3>
                    <p className="text-lg text-muted max-w-2xl leading-relaxed mb-6">
                        I'm currently available for full-time opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noreferrer' : undefined}
                                className="inline-flex items-center gap-1 font-mono text-sm text-brand hover:text-brand-accent transition-colors"
                            >
                                {link.label}
                                <ArrowUpRight size={14} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="bento-card p-6 md:p-8"
                    >
                        <h4 className="text-lg font-semibold text-brand mb-6">Send a Message</h4>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm text-muted mb-2">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-md bg-transparent border border-brand px-4 py-3 text-brand outline-none focus:border-brand-accent"
                                    placeholder="Your name"
                                    autoComplete="name"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm text-muted mb-2">Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-md bg-transparent border border-brand px-4 py-3 text-brand outline-none focus:border-brand-accent"
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
                                <label htmlFor="contact-message" className="block text-sm text-muted mb-2">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full rounded-md bg-transparent border border-brand px-4 py-3 text-brand outline-none focus:border-brand-accent resize-none"
                                    placeholder="Tell me about your role or project."
                                />
                            </div>

                            {status && (
                                <p role="status" className={`text-sm ${status.type === 'success' ? 'text-brand-accent' : 'text-rose-400'}`}>
                                    {status.text}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-solid w-full disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="editorial-panel p-6 md:p-8 flex flex-col gap-4"
                    >
                        <h4 className="text-lg font-semibold text-brand mb-2">Direct Contact</h4>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-3 text-brand hover:text-brand-accent transition-colors"
                        >
                            <Mail size={18} />
                            {personalInfo.email}
                        </a>
                        <div className="flex items-center gap-3 text-muted">
                            <MapPin size={18} />
                            {personalInfo.location}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
