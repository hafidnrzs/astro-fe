import type { TResponseError } from '@/entities/type';
import type { TUserResponse } from '../type';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postUserUpdateProfileBackground } from '../api';

export const usePostUserUpdateProfileBackground = (): UseMutationResult<
  TUserResponse,
  TResponseError,
  File,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-update-background'],
    mutationFn: async (file) => await postUserUpdateProfileBackground(file),
  });
};
