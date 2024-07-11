import Link from 'next/link';

import siteMetadata from '@/data/site-metadata';
import { socialMedia } from '@/data/social-media';

import { Button, ShimmerButton } from './ui/button';

function Hero() {
  return (
    <div className='flex max-w-lg flex-col gap-8'>
      <section className='flex flex-col gap-2'>
        <h2 className='text-gradient bg-gradient-to-r from-teal-500 to-teal-800 box-decoration-clone py-2 text-3xl font-bold md:text-4xl'>
          Rafa Al Razzak
        </h2>

        <p className='text-sm text-muted-foreground md:text-base'>
          {siteMetadata.SELF_DESCRIPTION}
        </p>
        <div className='flex gap-2'>
          {socialMedia.map((social, index) => (
            <Link key={index} href={social.url}>
              <Button key={social.name} size='icon'>
                <social.icon className='size-4 fill-current' />
              </Button>
            </Link>
          ))}
        </div>
      </section>

      <Link href='/cv' className='w-fit'>
        <ShimmerButton background='rgb(18, 139, 128)'>Read CV</ShimmerButton>
      </Link>
    </div>
  );
}

export default Hero;
