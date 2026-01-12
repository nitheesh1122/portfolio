import React, { useState, useRef } from 'react';
import { resume } from '../../data/resume';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import emailjs from '@emailjs/browser';

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

        // TODO: Replace with your actual EmailJS credentials
        // Get these from https://dashboard.emailjs.com/
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            // Mock success if no keys provided, but warn user
            console.warn("EmailJS keys are missing! Showing mock success.");
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSent(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSent(false), 3000);
            }, 1500);
            return;
        }

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
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
        <section id="contact" className="py-20 px-6">
            <Reveal width="100%">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Info Side */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
                            <p className="text-gray-400 mb-8">
                                I'm currently looking for full-time opportunities. Drop me a line if you want to connect!
                            </p>

                            <div className="space-y-4 mb-8">
                                <ContactItem icon={<Mail size={20} />} text={resume.personal.email} href={`mailto:${resume.personal.email}`} />
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-blue-400"><MapPin size={20} /></div>
                                    <span>{resume.personal.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1 uppercase">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1 uppercase">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1 uppercase">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${isSent ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : isSent ? "Message Sent!" : <>Send Message <Send size={18} /></>}
                            </button>
                        </form>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

const ContactItem = ({ icon, text, href }: any) => (
    <a href={href} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-blue-400">
            {icon}
        </div>
        <span className="break-all">{text}</span>
    </a>
)

export default Contact;
