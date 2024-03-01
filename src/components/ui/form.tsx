import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { Form, useFormikContext } from 'formik';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

type FormItemContextProps = {
  id: string;
  name?: string;
};

const FormItemContext = React.createContext<FormItemContextProps | undefined>(
  undefined
);

const useFormField = () => {
  const fieldContext = React.useContext(FormItemContext);
  if (!fieldContext) {
    throw new Error('useFormField must be used within FormFieldContext');
  }

  const itemContext = React.useContext(FormItemContext);
  const { errors, touched } = useFormikContext();

  const errorKey = fieldContext.name as keyof typeof errors;
  const touchedKey = fieldContext.name as keyof typeof touched;

  const error =
    errors[errorKey] && touched[touchedKey] ? errors[errorKey] : null;

  const id = itemContext?.id;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    error,
  };
};

type FormItemProps = React.HTMLAttributes<HTMLDivElement>;

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = 'FormItem';

type FormLabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        ref={ref}
        className={cn(error && 'text-destructive', className)}
        htmlFor={formItemId}
        {...props}
      />
    );
  }
);
FormLabel.displayName = 'FormLabel';

type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot>;

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    );
  }
);
FormControl.displayName = 'FormControl';

type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-[0.8rem] font-medium text-destructive', className)}
        {...props}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = 'FormMessage';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};
