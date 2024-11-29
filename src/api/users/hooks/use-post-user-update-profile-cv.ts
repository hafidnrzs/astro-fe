import type { TResponseError } from '@/entities/type';
import type { TUserResponse } from '../type';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postUserUpdateProfileCv } from '../api';

export const usePostUserUpdateProfileCv = (): UseMutationResult<
  TUserResponse,
  TResponseError,
  File,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-update-cv'],
    mutationFn: async (file) => await postUserUpdateProfileCv(file),
  });
};
