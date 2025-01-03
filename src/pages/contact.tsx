import Header from "@/components/ui/header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/nav-button";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  surname: z.string().min(2, "Surname must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    emailjs
      .send(
        "service_j47mjsh",
        "template_tv7vbrs",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "Tk-zw7Tnb0BfGcXW1"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset(); // Clear the form
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("An error occurred while sending the message.");
      });
  };

  return (
    <div className="flex flex-col gap-8 md:gap-20 pb-20">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      {/* Main Content with Margin */}
      <div className="grid grid-cols-2 gap-12 2xl:gap-20 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-40 xl:mt-60">
        {/* Card Section */}
        <div className="xl:col-span-1 col-span-2 justify-self-end">
          <Card className="w-full max-w-md h-full">
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="flex justify-between gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-md font-old-standard">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="surname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-md font-old-standard">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-old-standard">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="..." {...field} />
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
                        <FormLabel className="text-md font-old-standard">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-40"
                            placeholder="..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardFooter className="flex justify-end">
                    <Button type="submit">
                      <span className="font-old-standard text-md font-semibold">
                        Submit
                      </span>
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Text Section */}
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <span className="text-black font-old-standard md:text-5xl text-2xl font-bold leading-tight">
            Got questions?
          </span>
          <span className="text-black font-old-standard md:text-2xl text-xl font-medium leading-tight">
            Contact me and let's have a chat.
          </span>
        </div>
      </div>

      <Toaster position="bottom-right" />

      {/* Footer */}
      <div className="fixed bottom-0 w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}
