import type { TResponseError } from '@/entities/type';
import type { TProjectResponse } from '../type';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getAllProject } from '../api';

export const useGetAllProjects = (): UseQueryResult<
  TProjectResponse,
  TResponseError
> => {
  return useQuery({
    queryKey: ['get-all-projects'],
    queryFn: async () => await getAllProject(),
  });
};
