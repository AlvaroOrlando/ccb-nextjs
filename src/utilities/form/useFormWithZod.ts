// Tecnologia desenvolvida de forma experimental por Álvaro Conde Orlando

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, FieldValues, DefaultValues, FormState, UseFormHandleSubmit, UseFormRegister, Control } from "react-hook-form";
import { ZodSchema } from "zod";

export interface FormConfig<T extends FieldValues> {
  defaultValues: DefaultValues<T>;
  schema: ZodSchema<any>;
}

export const useFormForComponent = <T extends FieldValues>({
  defaultValues,
  schema,
}: FormConfig<T>): UseFormReturn<T> & {
  handleSubmit: UseFormHandleSubmit<T>;
  register: UseFormRegister<T>;
  control: Control<T>;
  formState: FormState<T>;
} => {
  const { handleSubmit, register, control, formState, setValue, trigger, getValues } = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return { handleSubmit, register, control, formState, setValue, trigger, getValues } as UseFormReturn<T> & {
    handleSubmit: UseFormHandleSubmit<T>;
    register: UseFormRegister<T>;
    control: Control<T>;
    formState: FormState<T>;
  };
};
