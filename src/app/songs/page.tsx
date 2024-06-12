/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { getNowPlaying, getTopSongs } from '@/libs/api';

import { Playlist } from './playlist';
import { Track } from './track';

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

      <Playlist />

      {topSongs?.length > 0 && (
        <section className='my-12 flex flex-col gap-4'>
          <h1>Top Songs</h1>

          <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
            {topSongs.map((song, idx) => (
              <Track key={idx} {...song} asLink />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
