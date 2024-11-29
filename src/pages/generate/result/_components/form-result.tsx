import type { TGenerateResponse } from '@/api/generate/type';
import type { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

export const FormResult: FC = (): ReactElement => {
  const form = useForm<TGenerateResponse>();
  console.log(form.watch());
  return <div>FormResult</div>;
};
