import { Button } from "@/components/ui/button"
<Button variant="outline">Button</Button>
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>با من در تماس باشید</CardTitle>
          <CardDescription>فرم زیر را پر کنید تا پیام شما ارسال شود.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>اینجا فرم تماس قرار می‌گیرد.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">دکمه تست</Button>
        </CardFooter>
      </Card>
      <CardContent className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="name">نام شما</Label>
    <Textarea placeholder="پیام خود را بنویسید" />
    <Input id="name" placeholder="نام خود را وارد کنید" />
  </div>
</CardContent>
    </div>
  );
};


export default Contact;
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// <Card>
//   <CardHeader>
//     <CardTitle>Card Title</CardTitle>
//     <CardDescription>Card Description</CardDescription>
//     <CardAction>Card Action</CardAction>
//   </CardHeader>
//   <CardContent>
//     <p>Card Content</p>
//   </CardContent>
//   <CardFooter>
//     <p>Card Footer</p>
//   </CardFooter>
// </Card>
// import { Input } from "@/components/ui/input"
// <Input />
// import { Label } from "@/components/ui/label"
// <Label htmlFor="email">Your email address</Label>
// const Contact = () => {
//   return (
// <div>
// </div>
//   );
// };



