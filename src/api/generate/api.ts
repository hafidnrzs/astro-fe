import type { TGenerateRequest, TGenerateResponse } from './type';
import { ENDPOINT } from '@/entities/constant';
import { promptApi } from '@/libs/axios/instance';

export const postGenerate = async (
  params: TGenerateRequest
): Promise<TGenerateResponse> => {
  const { data } = await promptApi({
    method: 'post',
    url: ENDPOINT.GENERATE.POST_GENERATE,
    data: params,
  });
  return data;
};
