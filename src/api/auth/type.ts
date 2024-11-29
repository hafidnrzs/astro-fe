import type { TResponse } from '@/entities/type';
import type { TUserItem } from '../users/type';

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginItem = {
  auth: {
    token: string;
    token_type: string;
  };
  user: TUserItem;
};

export type TLoginResponse = TResponse<TLoginItem>;

export type TRegisterRequest = {
  email: string;
  role: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  username: string;
};
