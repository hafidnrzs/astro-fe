import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type { TUserUpdatePasswordItem } from '../type';
import type { TResponseError, TResponseItem } from '@/entities/type';
import { putUserUpdateProfilePassword } from '../api';

export const usePutUpdateProfilePassword = (): UseMutationResult<
  TResponseItem,
  TResponseError,
  TUserUpdatePasswordItem,
  unknown
> => {
  return useMutation({
    mutationKey: ['put-update-profile-password'],
    mutationFn: async (params) => await putUserUpdateProfilePassword(params),
  });
};
