import { api } from '@/libs/axios/instance';
import type {
  TProjectCreateRequest,
  TProjectItem,
  TProjectResponse,
} from './type';
import { ENDPOINT } from '@/entities/constant';
import { urlParser } from '@/utils/url-parser';

export const getAllProject = async (): Promise<TProjectResponse> => {
  const { data } = await api({
    method: 'get',
    url: ENDPOINT.PROJECTS.GET_ALL_PROJECTS,
  });
  return data;
};

export const getDetailProject = async (slug: string): Promise<TProjectItem> => {
  const url = urlParser(ENDPOINT.PROJECTS.GET_DETAIL_PROJECT, {
    slug,
  });
  const { data } = await api({
    method: 'get',
    url,
  });
  return data;
};

export const postCreateProject = async (
  params: TProjectCreateRequest
): Promise<TProjectItem> => {
  const formData = new FormData();
  formData.append('project_name', params.project_name);
  formData.append('budget', params.budget);
  formData.append('deadline', params.deadline);
  formData.append('description', params.description);
  formData.append('proposal', params.proposal);
  formData.append('requirements', params.requirements);
  const { data } = await api({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: ENDPOINT.PROJECTS.POST_CREATE_PROJECT,
    data: formData,
  });
  return data;
};
