"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-none bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl className="h-[42px] w-[390px] rounded-none">
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormControl className="h-[42px] w-[390px] rounded-none">
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormControl className="h-[42px] w-[390px] rounded-none">
                <Input placeholder="Nomer Telepon" {...field} />
              </FormControl>
              <FormControl className="h-[42px] w-[390px] rounded-none">
                <Input placeholder="Pilih Program Yang Diminati" {...field} />
              </FormControl>
              <FormControl className="h-[127px] w-[390px] rounded-none">
                <Input placeholder="Pesan" {...field} className="flex items-start justify-items-start"/>
              </FormControl>
              <FormMessage />
              <Button
                type="submit"
                className="bg-[#AB0103] text-[#FFFFFF] h-[42px] w-[390px] rounded-none font-mono text-[14px] flex justify-center text-center"
              >
                Submit
              </Button>
              {/* <FormDescription className="font-rethink font-normal text-[12px] text-[#8B8B92] text-center">
                By adding your name and email, you are agreeing to receive email
                communications, consent to our Terms of Use and Privacy Policy,
                and confirm that you are at least eighteen (18) years of age.
              </FormDescription> */}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
