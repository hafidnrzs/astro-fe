import type { FC, ReactElement } from 'react';
import { InputField } from './_components/input-field';
import { useFormContext } from 'react-hook-form';
import type { TGenerateRequest } from '@/api/generate/type';

export const GeneratePage: FC = (): ReactElement => {
  const { control } = useFormContext<TGenerateRequest>();
  return (
    <InputField
      name="prompt"
      control={control}
      placeholder="Type your business idea or industry here"
    />
  );
};
