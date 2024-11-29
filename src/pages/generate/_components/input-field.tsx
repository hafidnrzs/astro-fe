import { cn } from '@/utils/cn';
import type {
  DetailedHTMLProps,
  ReactElement,
  TextareaHTMLAttributes,
} from 'react';
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';

type TTextArea<T extends FieldValues> = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  UseControllerProps<T>;

export const InputField = <T extends FieldValues>(
  props: TTextArea<T>
): ReactElement => {
  const { className, ...rest } = props;
  const { field } = useController(props);
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm scrollbar-none',
        className
      )}
      {...rest}
      {...field}
    />
  );
};
