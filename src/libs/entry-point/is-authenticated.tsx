import {
  Fragment,
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { localStorageToken } from '../local-storage/token';
import { ROUTE_URL } from '@/entities/constant';
import { Navbar } from '@/components/ui/navbar';
import { localStorageUser } from '../local-storage/user';
import { usePostLogout } from '@/api/auth/hooks/use-post-logout';

export const Authenticated: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const { isAuthenticated } = useAuth();
  const Location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to={ROUTE_URL.AUTH.LOGIN} state={{ from: Location }} replace />
    );
  } else {
    return (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    );
  }
};

export const Public: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const { isAuthenticated } = useAuth();
  const Location = useLocation();

  if (isAuthenticated) {
    return (
      <Navigate
        to={ROUTE_URL.GENERATE.ROOT}
        state={{ from: Location }}
        replace
      />
    );
  } else {
    return (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    );
  }
};

export const useAuth = () => {
  const { mutate: logout } = usePostLogout();
  const isAuthenticated = !!localStorageToken.getAccessToken();
  const userData = localStorageUser.getUserData();
  return {
    isAuthenticated,
    userData,
    logout,
  };
};
