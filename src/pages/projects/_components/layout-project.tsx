import { Authenticated } from '@/libs/entry-point/is-authenticated';
import type { FC, ReactElement } from 'react';

export const LayoutProject: FC = (): ReactElement => {
  return (
    <Authenticated>
      <div>LayoutProject</div>
    </Authenticated>
  );
};
