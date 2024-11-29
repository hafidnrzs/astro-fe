import { api } from '@/libs/axios/instance';
import type { TUserItem, TUserResponse, TUserUpdatePasswordItem } from './type';
import { ENDPOINT } from '@/entities/constant';
import { warn } from 'node_modules/astro/dist/core/logger/core';
import type { TResponseItem } from '@/entities/type';

export const getUserMe = async (): Promise<TUserResponse> => {
  const { data } = await api({
    method: 'get',
    url: ENDPOINT.USERS.GET_USER_ME,
  });
  return data;
};

export const getUserProfile = async (): Promise<TUserResponse> => {
  const { data } = await api({
    method: 'get',
    url: ENDPOINT.USERS.GET_PROFILE,
  });
  return data;
};

export const putUserUpdateProfile = async (
  params: TUserItem
): Promise<TUserResponse> => {
  const { data } = await api({
    method: 'put',
    url: ENDPOINT.USERS.PUT_UPDATE_PROFILE,
    data: params,
  });
  return data;
};

export const postUserUpdateProfileAvatar = async (
  file: File
): Promise<TUserResponse> => {
  const formData = new FormData();
  formData.append('avatar', file);
  const { data } = await api({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: ENDPOINT.USERS.POST_UPDATE_AVATAR,
    data: formData,
  });
  return data;
};

export const postUserUpdateProfileBackground = async (
  file: File
): Promise<TUserResponse> => {
  const formData = new FormData();
  formData.append('background', file);
  const { data } = await api({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: ENDPOINT.USERS.POST_UPDATE_BACKGROUND,
    data: formData,
  });
  return data;
};

export const postUserUpdateProfileCv = async (
  file: File
): Promise<TUserResponse> => {
  const formData = new FormData();
  formData.append('cv', file);
  const { data } = await api({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: ENDPOINT.USERS.POST_UPDATE_CV,
    data: formData,
  });
  return data;
};

export const putUserUpdateProfilePassword = async (
  params: TUserUpdatePasswordItem
): Promise<TResponseItem> => {
  const { data } = await api({
    method: 'put',
    url: ENDPOINT.USERS.PUT_UPDATE_PASSWORD,
    data: params,
  });
  return data;
};
