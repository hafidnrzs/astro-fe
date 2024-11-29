import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getUserProfile } from '../api';
import type { TResponseError } from '@/entities/type';
import type { TUserResponse } from '../type';

export const useGetUserProfile = (): UseQueryResult<
  TUserResponse,
  TResponseError
> => {
  return useQuery({
    queryKey: ['get-user-profile'],
    queryFn: async () => await getUserProfile(),
  });
};
