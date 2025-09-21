import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
      title: 'ایمیل',
      displayURL: 'zn.zibanouri@gmail.com',
    },
    {
      URL: 'https://github.com/zibanouri', 
      icon: Github,
      title: 'گیت‌هاب',
      displayURL: 'github.com/zibanouri',
    },
    {
      URL: 'https://www.linkedin.com/in/ziba-nouri/', 
      icon: Linkedin,
      title: 'لینکدین',
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
    alert('پیام شما ارسال شد!');
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-slate-500 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold">
              با من در تماس باشید
            </CardTitle>
            <CardDescription className="text-muted">
              سوالی دارید اینجا بپرسید
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={submitForm} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  نام و نام خانوادگی
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="..."
                  className="text-shadow-black text-slate-500 border border-slate-300"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  آدرس ایمیل
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="text-shadow-black text-slate-500 border border-slate-300"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  پیام شما
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="text-shadow-black text-slate-500 border border-slate-300"
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="pt-6">
            <Button
              type="submit"
              onClick={submitForm}
              className="w-full py-6 text-shadow-black text-slate-500 border border-slate-300"
            >
              ارسال پیام
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-slate-500 shadow-lg flex flex-col">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold">
              اطلاعات تماس
            </CardTitle>
            <CardDescription className="text-muted">
              ارتباط با من
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="space-y-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.title}
                    href={social.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 w-full rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-100 transition-colors duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-slate-600 dark:text-slate-700 group-hover:text-slate-500" />
                    <div>
                      <div className="font-medium text-slate-700 dark:text-slate-900">
                        {social.title}
                      </div>
                      <div className="text-sm text-slate-700 dark:text-slate-900">
                        {social.displayURL}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contact;