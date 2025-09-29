import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
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
      displayURL: 'zn.zibanouri@gmail.com',
    },
    {
      URL: 'https://github.com/zibanouri',
      icon: Github,
      title: 'GitHub',
      displayURL: 'github.com/zibanouri',
    },
    {
      URL: 'https://www.linkedin.com/in/ziba-nouri/',
      icon: Linkedin,
      title: 'LinkedIn',
      displayURL: 'linkedin.com/in/ziba-nouri',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    // 👇 گرادیان روی کل بخش — از بالا تا پایین، بدون محدودیت
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* عنوان اصلی */}
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Contact
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* فرم تماس — ساده، یک خط عنوان */}
          <Card className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg font-medium text-slate-800">Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={submitForm} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-slate-300"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                onClick={submitForm}
                className="w-full bg-slate-700 hover:bg-slate-800 text-white"
              >
                Send
              </Button>
            </CardFooter>
          </Card>

          {/* اطلاعات تماس — فقط یک خط عنوان */}
          <Card className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg font-medium text-slate-800">Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.title}
                      href={social.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-slate-600" />
                      <div>
                        <div className="text-sm font-medium text-slate-700">{social.title}</div>
                        <div className="text-xs text-slate-500">{social.displayURL}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;