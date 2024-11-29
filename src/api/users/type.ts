import type { TResponse } from '@/entities/type';

export type TUserItem = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  bio: string;
  website: string;
  socials: Array<string>;
  location: string;
  timezone: string;
  language: string;
  currency: string;
  phone: string;
  avatar: string;
  background: string;
  cv: string;
};

export type TUserUpdatePasswordItem = {
  current_password: string;
  password: string;
  password_confirmation: string;
};

export type TUserResponse = TResponse<TUserItem>;
