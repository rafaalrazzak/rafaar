import { cn } from '@/libs/utils';
import { buttonVariants, ButtonProps } from './ui/button';

interface IconTextProps extends ButtonProps {
  icon: React.ReactNode;
  text: string;
}

export default function IconText({
  icon,
  text,
  className,
  variant,
  size,
}: IconTextProps) {
  return (
    <div
      className={cn(
        'flex gap-2 text-sm',
        buttonVariants({ variant, size, className })
      )}
    >
      {icon}
      <p className='font-semibold text-primary-300'>{text}</p>
    </div>
  );
}
