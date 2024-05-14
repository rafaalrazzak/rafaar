'use client';

import clsx from 'clsx';
import { useCallback } from 'react';
import { toast } from 'sonner';

import Image from './Image';

export interface GalleryProps {
  id: number;
  image: string;
  title: string;
}

function GalleryImage({ id, image, title }: GalleryProps) {
  const handleToast = useCallback(() => {
    toast(title);
  }, [title]);

  return (
    <button
      onClick={handleToast}
      className={clsx(
        'relative aspect-[9/10] h-64 w-48 flex-none overflow-clip rounded-xl transition-all duration-300  hover:scale-[1.1] sm:rounded-2xl',
        {
          '-rotate-2 hover:-rotate-12 ': id % 2 === 0,
          'rotate-2 hover:rotate-12': id % 2 === 1,
        }
      )}
    >
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className='absolute inset-0 h-full bg-cover object-cover'
        sizes='(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw'
      />
    </button>
  );
}

export default GalleryImage;
