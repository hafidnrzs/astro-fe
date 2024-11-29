import type { TResponseError } from '@/entities/type';
import type { TUserResponse } from '../type';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postUserUpdateProfileAvatar } from '../api';

export const usePostUserUpdateProfileAvatar = (): UseMutationResult<
  TUserResponse,
  TResponseError,
  File,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-update-avatar'],
    mutationFn: async (file) => await postUserUpdateProfileAvatar(file),
  });
};
