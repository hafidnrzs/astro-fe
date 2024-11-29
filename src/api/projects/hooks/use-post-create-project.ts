import type { TResponseError } from '@/entities/type';
import type { TProjectCreateRequest, TProjectItem } from '../type';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postCreateProject } from '../api';

export const usePostCreateProject = (): UseMutationResult<
  TProjectItem,
  TResponseError,
  TProjectCreateRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-create-project'],
    mutationFn: async (params) => await postCreateProject(params),
  });
};
