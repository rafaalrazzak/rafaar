'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Link from '@/components/Link';
import { Badge } from '@/components/ui/badge';
import { NOW_PLAYING_URL } from '@/libs/api';
import { fetcher } from '@/libs/utils';
import { NowPlaying } from '@/types';

export default function NowPlayingClient() {
  const { data: nowPlaying, isLoading, error } = useSWR<NowPlaying>(NOW_PLAYING_URL, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    refreshInterval: 3000,
  });

  const [currentTime, setCurrentTime] = useState(nowPlaying?.progressMs || 0);

  useEffect(() => {
    if (!nowPlaying) return;

    setCurrentTime(nowPlaying.progressMs);

    // Update progress every 1 second
    const intervalId = setInterval(() => {
      setCurrentTime(prevTime => {
        const newTime = Math.min(prevTime + 1000, nowPlaying.durationMs);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [nowPlaying]);

  const progress = nowPlaying ? (currentTime / nowPlaying.durationMs) * 100 : 0;

  if (!nowPlaying || isLoading || error) {
    return null;
  }

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section className='my-12 flex flex-col gap-4'>
      <Link
        href={nowPlaying.songUrl}
        className='hover:ring-primary-500 relative flex aspect-video h-40 w-full items-center justify-between gap-4 overflow-hidden rounded-xl p-4 text-white hover:ring-2'
        style={{
          backgroundImage: `linear-gradient(to right, ${nowPlaying.colors.dark}, transparent), url(${nowPlaying.songImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {nowPlaying.canvasUrl && (
          <video
            src={nowPlaying.canvasUrl}
            loop
            autoPlay
            muted
            playsInline
            className='absolute inset-0 z-0 h-full w-full object-cover brightness-50'
          />
        )}

        <div className='relative z-10 flex flex-col gap-2'>
          <Badge
            className='w-fit rounded-full font-sans'
            style={{
              backgroundColor: nowPlaying.colors.darker,
              color: nowPlaying.colors.lighter,
            }}
          >
            Now Playing
          </Badge>
          <div style={{ color: nowPlaying.colors.lighter }}>
            <h3 className='line-clamp-2 text-balance text-current'>
              {nowPlaying.title}
            </h3>
            <p className='line-clamp-1 text-sm'>{nowPlaying.artist}</p>
          </div>

          <div className='mt-1 flex items-center gap-1 text-sm' style={{
            color: nowPlaying.colors.lighter
          }}>
            <span className='text-xs'>{formatTime(currentTime)}</span>
            <span className='text-xs'>/</span>
            <span className='text-xs'>{nowPlaying.duration}</span>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-1'>
          <div
            className='h-full rounded-full'
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              position: 'relative'
            }}
          >
            <div
              className='h-full rounded-full'
              style={{
                width: `${progress}%`,
                backgroundColor: nowPlaying.colors.darker,
                transition: 'width 0.5s ease-in-out', // Smooth transition
              }}
            ></div>
          </div>
        </div>
      </Link>
    </section>
  );
}
