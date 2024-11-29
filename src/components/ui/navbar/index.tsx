import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/libs/entry-point/is-authenticated';
import { ROUTE_URL } from '@/entities/constant';

export const Navbar: FC = (): ReactElement => {
  const { isAuthenticated, userData, logout } = useAuth();
  return (
    <section className="border-b w-full flex items-center justify-center px-8 md:px-0">
      <div className="w-full px-2 sm:px-0 max-w-5xl flex py-2 flex-row gap-5 justify-between items-center">
        <div className="flex flex-row gap-5 justify-center items-center">
          <Link to={ROUTE_URL.ROOT}>
            <div className="font-medium text-lg tracking-wider">
              Idea<span className="font-bold">Go</span>
            </div>
          </Link>
        </div>

        {!isAuthenticated ? (
          <div className="gap-3 md:flex flex-row flex">
            <Link
              className="py-2 px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              to={ROUTE_URL.AUTH.REGISTER}
            >
              Register
            </Link>

            <Link
              className="py-2 px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              to={ROUTE_URL.AUTH.LOGIN}
            >
              Login
            </Link>
          </div>
        ) : (
          <span onClick={() => logout()}>{userData?.first_name}</span>
        )}
      </div>
    </section>
  );
};
