import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { TProjectItem } from '../type';
import type { TResponseError } from '@/entities/type';
import { getDetailProject } from '../api';

export const useGetDetailProject = (
  slug: string
): UseQueryResult<TProjectItem, TResponseError> => {
  return useQuery({
    queryKey: ['get-detail-project', slug],
    queryFn: async () => await getDetailProject(slug),
  });
};
