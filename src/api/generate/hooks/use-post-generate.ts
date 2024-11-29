import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { postGenerate } from '../api';
import type { TResponseError } from '@/entities/type';
import type { TGenerateRequest, TGenerateResponse } from '../type';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL } from '@/entities/constant';
import { localStorageGenerateResult } from '@/libs/local-storage/generate-result';

export const usePostGenerate = (): UseMutationResult<
  TGenerateResponse,
  TResponseError,
  TGenerateRequest,
  unknown
> => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['post-generate-prompt'],
    mutationFn: async (params) => await postGenerate(params),
    onSuccess: (res) => {
      localStorageGenerateResult.setGenerateResult(res);
      navigate(ROUTE_URL.GENERATE.RESULT);
    },
  });
};
