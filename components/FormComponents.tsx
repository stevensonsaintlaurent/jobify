import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Field, FieldGroup, FieldLabel } from "./ui/field";

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
};

export function CustomFormField({ name, control }: CustomFormFieldProps) {
  return (
    <Field
      control={control}
      name={name}
      render={({ field }) => (
        <FieldGroup>
          <FieldLabel>{name}</FieldLabel>
          <Input placeholder={name} {...field} />
        </FieldGroup>
      )}
    />
  );
}

type CustomSelectProps = {
  name: string;
  control: Control<any>;
  items: string;
  labelText?: string;
};
export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomSelectProps) {
  return (
    <Field
      control={control}
      name={name}
      render={({ field }) => (
        <FieldGroup>
          <FieldLabel>{labelText}</FieldLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {items.split(",").map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FieldGroup>
      )}
    />
  );
}
