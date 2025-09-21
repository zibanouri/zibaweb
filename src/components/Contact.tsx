import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    alert("پیام شما ارسال شد!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
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
              <Label htmlFor="name" className="text-sm font-medium">
                نام و نام خانوادگی
              </Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="..."
                required
                className="text-shadow-black text-slate-500 border border-slate-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                آدرس ایمیل
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange} 
                placeholder="example@gmail.com"
                required
                className="text-shadow-black text-slate-500 border border-slate-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                پیام شما
              </Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange} 
                required
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
    </div>
  );
}