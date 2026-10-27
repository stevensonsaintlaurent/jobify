"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function CreateJobForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Field>
        <FieldLabel>Username</FieldLabel>
        <Input placeholder="shadcn" {...form.register("username")} />
        <FieldGroup>
          {form.formState.errors.username && (
            <p className="text-red-500">
              {form.formState.errors.username.message}
            </p>
          )}
        </FieldGroup>
      </Field>

      <Button type="submit">Submit</Button>
    </form>
  );
}
export default CreateJobForm;
