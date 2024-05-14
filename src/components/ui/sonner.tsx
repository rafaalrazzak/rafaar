'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme='dark'
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:shadow-lg group-[.toaster]:bg-primary-900 group-[.toaster]:text-primary-50 group-[.toaster]:border-primary-800',
          description: 'group-[.toast]:text-primary-400',
          actionButton:
            'group-[.toast]:bg-primary-900 group-[.toast]:text-primary-50 group-[.toast]:bg-primary-50 group-[.toast]:text-primary-900',
          cancelButton:
            'group-[.toast]:bg-primary-800 group-[.toast]:text-primary-400',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
