import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const socials = [
        {
            URL: 'mailto:zn.zibanouri@gmail.com',
            icon: Mail,
            title: 'Email',
            color: 'text-slate-600',
        },
        {
            URL: 'https://github.com/zibanouri',
            icon: Github,
            title: 'GitHub',
            color: 'text-slate-600',
        },
        {
            URL: 'https://www.linkedin.com/in/ziba-nouri/',
            icon: Linkedin,
            title: 'LinkedIn',
            color: 'text-slate-600',
        },
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Your message has been sent!');
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Lets Talk
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Have a question ?
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    <form onSubmit={submitForm} className="space-y-5">
                        <div>
                            <Label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-800 mb-1.5"
                            >
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-800 mb-1.5"
                            >
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-800 mb-1.5"
                            >
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-medium transition-colors mt-2"
                        >
                            Send Message
                        </Button>
                    </form>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-5">
                            Find me online
                        </h3>
                        <div className="space-y-4">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.title}
                                        href={social.URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                                    >
                                        <div
                                            className={`p-2 rounded-lg bg-slate-100 group-hover:bg-white ${social.color} transition`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-slate-800 group-hover:text-slate-900 transition">
                                            {social.title}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
