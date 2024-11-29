import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TVariant = 'primary' | 'secondary';

export type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: TSize;
  variant?: TVariant;
};
