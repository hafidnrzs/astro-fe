import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type { TUserItem, TUserResponse } from '../type';
import type { TResponseError } from '@/entities/type';
import { putUserUpdateProfile } from '../api';

export const usePutUserUpdateProfile = (): UseMutationResult<
  TUserResponse,
  TResponseError,
  TUserItem,
  unknown
> => {
  return useMutation({
    mutationKey: ['put-update-profile'],
    mutationFn: async (params) => await putUserUpdateProfile(params),
  });
};
