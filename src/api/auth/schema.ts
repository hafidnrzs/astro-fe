import { z } from 'astro:content';

export const schemaLogin = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export const schemaRegister = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
  username: z.string().min(1, { message: 'Username is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  role: z.string().min(1, { message: 'Role is required' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  password_confirmation: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});
