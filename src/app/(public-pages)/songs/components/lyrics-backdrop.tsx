import { memo } from 'react';

export const Backdrop = memo(({ color }: { color: string }) => (
  <div
    className='absolute inset-0 transition-colors duration-500'
    style={{
      background: `linear-gradient(180deg, 
        ${color}00 0%, 
        ${color}95 8%, 
        ${color}98 92%, 
        ${color}00 100%
      )`,
      backdropFilter: 'blur(40px) saturate(150%)',
      WebkitBackdropFilter: 'blur(40px) saturate(150%)',
    }}
  />
));

Backdrop.displayName = 'Backdrop';
