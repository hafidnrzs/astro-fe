import { RouterProvider } from 'react-router-dom';
import { ReactQueryProvider } from '../react-query/provider';
import { routes } from './router';
import { StrictMode, type FC, type ReactElement } from 'react';

export const App: FC = (): ReactElement => {
  return (
    <StrictMode>
      <ReactQueryProvider>
        <RouterProvider router={routes} />
      </ReactQueryProvider>
    </StrictMode>
  );
};
