import { useMutation } from '@tanstack/react-query';
import { postLogoutAll } from '../api';
import { localStorageToken } from '@/libs/local-storage/token';
import { ROUTE_URL } from '@/entities/constant';
import { useNavigate } from 'react-router-dom';

export const usePostLogoutAll = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['post-logout-all'],
    mutationFn: async () => await postLogoutAll(),
    onSuccess: () => {
      localStorageToken.removeAccessToken();
      navigate(ROUTE_URL.AUTH.LOGIN);
    },
  });
};
