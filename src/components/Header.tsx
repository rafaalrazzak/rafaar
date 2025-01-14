import Image from 'next/image';

export function Header({ avatar, cover }: { cover: string; avatar?: boolean }) {
  return (
    <div className='relative -mx-4 -mt-4 sm:mx-0 sm:mt-0'>
      <Image
        alt='header image'
        src={cover}
        width={600}
        height={400}
        className='w-full rounded-b-xl object-cover sm:rounded-xl'
      />

      {avatar && (
        <Image
          alt='logo'
          src='https://cdn.kita.blue/rafaar/me.jpg'
          width={300}
          height={300}
          className='absolute -bottom-10 left-4 size-20 rounded-full border-4 border-background md:-bottom-6 lg:h-[80px] lg:w-[80px]'
        />
      )}
    </div>
  );
}
