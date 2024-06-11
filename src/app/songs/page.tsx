/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { getNowPlaying, getTopSongs } from '@/libs/api';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Songs',
  description: 'Listen to my top songs and what I am currently listening to.',
  openGraph: {
    title: 'Songs',
    description: 'Listen to my top songs and what I am currently listening to.',
    images: [{ url: 'https://rafaar.my.id/api/og/song' }],
  },
};

export default async function Songs() {
  const topSongs = await getTopSongs();
  const nowPlaying = await getNowPlaying();

  return (
    <Container>
      <main className='my-16'>
        <Navbar />
        <Hero />

        {nowPlaying && (
          <section className='my-12 flex flex-col gap-4'>
            <Link
              href={nowPlaying.songUrl}
              className='flex aspect-video h-40 items-center justify-between gap-4 rounded-xl bg-primary-800 p-4 text-white hover:ring-1 hover:ring-primary-500'
              style={{
                backgroundImage: `linear-gradient(to right, ${nowPlaying.colors.dark}, transparent), url(${nowPlaying.songImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className='flex flex-col gap-2'>
                <Badge
                  className='w-fit rounded-full font-sans'
                  style={{
                    backgroundColor: nowPlaying.colors.lighter,
                    color: nowPlaying.colors.dark,
                  }}
                >
                  Now Playing
                </Badge>
                <div
                  style={{
                    color: nowPlaying.colors.lighter,
                  }}
                >
                  <h3 className='line-clamp-2 text-balance text-current'>
                    {nowPlaying.title}
                  </h3>
                  <p className='text-sm'>{nowPlaying.artist}</p>
                </div>
              </div>
            </Link>
          </section>
        )}

        {topSongs?.length > 0 && (
          <section className='my-12 flex flex-col gap-4'>
            <h1>Top Songs</h1>

            <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
              {topSongs.map(
                ({ songImage, songUrl, title, artist, colors }, idx) => (
                  <Link
                    href={songUrl}
                    key={idx}
                    className='flex aspect-square size-40 items-center gap-4 overflow-hidden rounded-xl bg-primary-800 text-white hover:ring-1 hover:ring-primary-500 md:size-full'
                    style={{
                      backgroundImage: `linear-gradient(to top, ${colors?.dark}, transparent), url(${songImage})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className='flex h-full flex-col justify-end p-2'>
                      <h5 className='line-clamp-2 text-balance'>{title}</h5>
                      <p className='text-xs text-primary-200'>{artist}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </section>
        )}
      </main>
    </Container>
  );
}
