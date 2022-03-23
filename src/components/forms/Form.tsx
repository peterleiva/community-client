import {
  FormProvider,
  useForm,
  type UseFormReturn,
  type SubmitHandler,
  type FieldValues,
} from "react-hook-form";

type FormProps<TFormValues> = Omit<
  React.ComponentPropsWithoutRef<"form">,
  "onSubmit"
> & {
  children?:
    | { (methods: UseFormReturn<TFormValues>): React.ReactNode }
    | React.ReactNode;
  onSubmit?: SubmitHandler<TFormValues>;
};

export default function Form<TFieldValues = FieldValues>({
  onSubmit,
  children,
  ...formProps
}: FormProps<TFieldValues>) {
  const methods = useForm<TFieldValues>({ criteriaMode: "all" });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data, e) => onSubmit?.(data, e))}
        {...formProps}
      >
        {typeof children === "function" ? children(methods) : children}
      </form>
    </FormProvider>
  );
}
