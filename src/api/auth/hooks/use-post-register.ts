import type { TResponseError, TResponseItem } from '@/entities/type';
import type { TRegisterRequest } from '../type';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postRegister } from '../api';
import { ROUTE_URL } from '@/entities/constant';
import { useNavigate } from 'react-router-dom';

export const usePostRegister = (): UseMutationResult<
  TResponseItem,
  TResponseError,
  TRegisterRequest,
  unknown
> => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['post-register'],
    mutationFn: async (params) => await postRegister(params),
    onSuccess: () => {
      navigate(ROUTE_URL.AUTH.LOGIN);
    },
  });
};
