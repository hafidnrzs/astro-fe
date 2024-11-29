import type { AxiosRequestConfig } from 'axios';
import { localStorageToken } from '../local-storage/token';

const accesToken = localStorageToken.getAccessToken();

export const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.PUBLIC_API_URL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: !accesToken ? '' : `Bearer ${accesToken}`,
  },
};

export const promptConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.PUBLIC_PROMPT_API_URL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};
