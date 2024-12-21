import Header from "@/components/header";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Footer from "@/components/footer";
  

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email."),
    message: z.string().min(10, "Message must be at least 10 characters."),
  });  

export default function Home() {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          name: '',
          email: '',
          message: '',
        },
      });

      const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
      };

      return (
        <div className="flex flex-col">
          <Header />
      
          <div className="flex gap-8 items-center justify-center px-4 sm:px-96 space-y-6">
            <div className="flex flex-col items-start">
            <span className="text-black text-3xl max-w-xl font-bold leading-tight text-left">
              Like what you see?
            </span>
            <span className="text-black text-md max-w-xl font-sm leading-tight text-left">
              Contact me and let's talk about your project.
            </span>
          </div>
            <Card className="w-full py-4 max-w-md">
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="justify-end">
                <Button type="submit">Submit</Button>
              </CardFooter>
            </Card>
          </div>

<div className="absolute bottom-0 w-full">
          <Footer />
          </div>
        </div>
      );
      

}