import { Public } from '@/libs/entry-point/is-authenticated';
import type { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutAuth: FC = (): ReactElement => {
  return (
    <Public>
      <section className="flex flex-row h-screen w-full justify-between">
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <h1 className="text-gray-600 text-4xl font-medium">
            Idea<strong>GO</strong>
          </h1>
        </div>
        <div className="w-1/2 h-full bg-secondary flex items-center justify-center px-8">
          <Outlet />
        </div>
      </section>
    </Public>
  );
};
