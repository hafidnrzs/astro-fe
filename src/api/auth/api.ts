import { ENDPOINT } from '@/entities/constant';
import type { TResponseItem } from '@/entities/type';
import { api } from '@/libs/axios/instance';
import type { TLoginRequest, TLoginResponse, TRegisterRequest } from './type';

export const postLogout = async (): Promise<TResponseItem> => {
  const { data } = await api({
    method: 'post',
    url: ENDPOINT.AUTH.POST_LOGOUT,
  });
  return data;
};

export const postLogoutAll = async (): Promise<TResponseItem> => {
  const { data } = await api({
    method: 'post',
    url: ENDPOINT.AUTH.POST_LOGOUT_ALL,
  });
  return data;
};

export const postLogin = async (
  params: TLoginRequest
): Promise<TLoginResponse> => {
  const { data } = await api({
    method: 'post',
    url: ENDPOINT.AUTH.POST_LOGIN,
    data: params,
  });
  return data;
};

export const postRegister = async (
  params: TRegisterRequest
): Promise<TResponseItem> => {
  const { data } = await api({
    method: 'post',
    url: ENDPOINT.AUTH.POST_REGISTER,
    data: params,
  });
  return data;
};
