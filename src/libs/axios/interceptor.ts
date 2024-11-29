import type { TResponseError } from '@/entities/type';
import { api } from './instance';

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: TResponseError) => {
    if (error.response?.data?.message) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);
