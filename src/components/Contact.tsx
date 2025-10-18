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
        },
        {
            URL: 'https://github.com/zibanouri',
            icon: Github,
            title: 'GitHub',
        },
        {
            URL: 'https://www.linkedin.com/in/ziba-nouri/',
            icon: Linkedin,
            title: 'LinkedIn',
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
            className="py-20 px-4 bg-white dark:bg-slate-900 scroll-mt-28"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Let's Talk
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Have a question?
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    <form onSubmit={submitForm} className="space-y-5">
                        <div>
                            <Label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                            >
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent transition"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
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
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent transition"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                            >
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent transition"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white py-3 rounded-lg font-medium transition-colors mt-2"
                        >
                            Send Message
                        </Button>
                    </form>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">
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
                                        className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors hover:border-slate-200 dark:hover:border-slate-700 border border-slate-200"
                                    >
                                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 group-hover:bg-white dark:group-hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition border border-slate-500">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition">
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
