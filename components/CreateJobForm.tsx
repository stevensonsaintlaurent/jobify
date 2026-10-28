"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from "@/utils/types";

import { Button } from "@/components/ui/button";

import { CustomFormField, CustomFormSelect } from "./FormComponents";
import { Field } from "@/components/ui/field";

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values);
  }

  return (
    <Field {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField name="position" control={form.control} />
          <CustomFormField name="company" control={form.control} />
          <CustomFormField name="location" control={form.control} />
          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="Status"
            items={Object.values(JobStatus).join(",")}
          />
          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="Mode"
            items={Object.values(JobMode).join(",")}
          />

          <Button
            type="submit"
            className="bg-primary text-primary-foreground col-span-full mt-4"
          >
            create job
          </Button>
        </div>
      </form>
    </Field>
  );
}

export default CreateJobForm;
