import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getUserMe } from '../api';
import type { TResponseError } from '@/entities/type';
import type { TUserResponse } from '../type';

export const useGetUserMe = (): UseQueryResult<
  TUserResponse,
  TResponseError
> => {
  return useQuery({
    queryKey: ['get-user-me'],
    queryFn: async () => await getUserMe(),
  });
};
