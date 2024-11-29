import { useMutation } from '@tanstack/react-query';
import { postLogout } from '../api';
import { localStorageToken } from '@/libs/local-storage/token';
import { ROUTE_URL } from '@/entities/constant';
import { useNavigate } from 'react-router-dom';

export const usePostLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['post-logout'],
    mutationFn: async () => await postLogout(),
    onSuccess: () => {
      localStorageToken.removeAccessToken();
      navigate(ROUTE_URL.AUTH.LOGIN);
    },
  });
};
