import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { InputWrap, type TInputWrap } from './wrap';
import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';
import { clsx } from 'clsx';

type TInputText<T extends FieldValues> = Omit<
  TInputWrap,
  'children' | 'message'
> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseControllerProps<T>;

export const InputText = <T extends FieldValues>(
  props: TInputText<T>
): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController<T>(props);
  const className = clsx(
    'focus:outline-none focus:ring-none border-[2px] p-2 rounded-lg placeholder:text-gray-400 placeholder:text-sm w-full',
    {
      'border-red-300 placeholder:text-red-400 text-red-400': error?.message,
      'bg-gray-50 border-gray-100': !error?.message,
    }
  );
  return (
    <InputWrap message={error?.message} {...props}>
      <input className={className} {...props} {...field} />
    </InputWrap>
  );
};
