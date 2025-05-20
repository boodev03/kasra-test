"use client";
import { Button } from "@/components/ui/button";
import useUserStore from "@/store/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Setting() {
  const { name, email, setName, setEmail } = useUserStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || "",
      email: email || "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setName(data.name);
    setEmail(data.email);
    toast.success("Settings saved successfully");
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="font-medium text-gray-900 text-base mb-2">
        Account Settings
      </h2>
      <div className="border rounded-md p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              {...form.register("name")}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...form.register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
