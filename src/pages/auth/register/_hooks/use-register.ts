import type { TRegisterRequest } from '@/api/auth/type';
import { usePostRegister } from '@/api/auth/hooks/use-post-register';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaRegister } from '@/api/auth/schema';

export const useRegister = () => {
  const form = useForm<TRegisterRequest>({
    mode: 'all',
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      first_name: '',
      username: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const roleOptions = [
    {
      value: 'user',
      label: 'Freelancer',
    },
    {
      value: 'investor',
      label: 'Investor',
    },
    {
      value: 'company',
      label: 'Business Creator',
    },
  ];

  const { mutate } = usePostRegister();

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  const handler = {
    onSubmit,
  };

  const options = {
    roleOptions,
  };

  return {
    form,
    options,
    handler,
  };
};
