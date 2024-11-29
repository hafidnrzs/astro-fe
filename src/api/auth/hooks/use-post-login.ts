import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postLogin } from '../api';
import type { TResponseError } from '@/entities/type';
import type { TLoginRequest, TLoginResponse } from '../type';
import { localStorageToken } from '@/libs/local-storage/token';
import { localStorageUser } from '@/libs/local-storage/user';
import { ROUTE_URL } from '@/entities/constant';
import { useNavigate } from 'react-router-dom';

export const usePostLogin = (): UseMutationResult<
  TLoginResponse,
  TResponseError,
  TLoginRequest,
  unknown
> => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['post-login'],
    mutationFn: async (params) => await postLogin(params),
    onSuccess: (res) => {
      localStorageToken.setAccessToken(res?.data?.auth?.token);
      localStorageUser.setUserData(res?.data?.user);
      navigate(ROUTE_URL.GENERATE.ROOT);
    },
    onError: (err) => {
      console.log('err', err);
    },
  });
};
