import { usePostLogin } from '@/api/auth/hooks/use-post-login';
import { schemaLogin } from '@/api/auth/schema';
import type { TLoginRequest } from '@/api/auth/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useLogin = () => {
  const form = useForm<TLoginRequest>({
    mode: 'all',
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = usePostLogin();

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
  });

  const handler = {
    onSubmit,
  };

  return {
    form,
    isPending,
    handler,
  };
};
