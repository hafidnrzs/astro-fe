import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const AvatarComponent = ({ src, alt, fallbackText, variant = '' }) => {
  return (
    <Avatar className={variant}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};
