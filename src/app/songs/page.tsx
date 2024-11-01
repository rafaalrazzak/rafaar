/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { getNowPlaying, getTopSongs } from '@/libs/api';

import NowPlayingClient from './now-playing';
import { Playlist } from './playlist';
import { Track } from './track';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Songs',
  description: 'Listen to my top songs and what I am currently listening to.',
  openGraph: {
    title: 'Songs',
    description: 'Listen to my top songs and what I am currently listening to.',
  },
};

export default async function Songs() {
  const topSongs = await getTopSongs();

  return (
    <main className='my-16'>
      <Navbar />
      <Hero />

      <NowPlayingClient />

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
