'use client';

import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { Badge } from '@/components/ui/badge';
import { NOW_PLAYING_URL } from '@/libs/api';
import { fetcher } from '@/libs/utils';
import { NowPlaying } from '@/types';
import dynamic from 'next/dynamic';

// Dynamically import the LyricsPlayer with no SSR
const LyricsPlayer = dynamic(() => import('./components/lyrics-view'), {
  ssr: false,
});

export default function NowPlayingClient() {
  const { data: nowPlaying, isLoading } = useSWR<NowPlaying>(
    NOW_PLAYING_URL,
    fetcher,
    { refreshInterval: 3000 }
  );

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (nowPlaying) {
      setCurrentTime(nowPlaying.progressMs);
    }
  }, [nowPlaying]);

  useEffect(() => {
    if (!nowPlaying?.isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) =>
        prev + 1000 >= (nowPlaying?.durationMs ?? 0) ? 0 : prev + 1000
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [nowPlaying]);

  const formatTime = (ms: number) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  if (isLoading || !nowPlaying) {
    return (
      <div className='my-12 flex h-40 items-center justify-center rounded-xl bg-secondary'>
        <p className='text-muted-foreground'>Loading...</p>
      </div>
    );
  }

  const progress = (currentTime / nowPlaying.durationMs) * 100;

  return (
    <div className='my-12 flex flex-col gap-4'>
      <div
        className='relative flex aspect-video h-40 w-full items-center justify-between gap-4 overflow-hidden rounded-xl p-4 text-white'
        style={{
          backgroundImage: `linear-gradient(to right, ${nowPlaying.colors.dark}, transparent), url(${nowPlaying.songImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {nowPlaying.canvasUrl && (
          <video
            key={nowPlaying.canvasUrl}
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
          <div
            className='mt-1 flex items-center gap-1 text-sm'
            style={{ color: nowPlaying.colors.lighter }}
          >
            <span className='text-xs'>{formatTime(currentTime)}</span>
            <span className='text-xs'>/</span>
            <span className='text-xs'>{nowPlaying.duration}</span>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-1'>
          <div
            className='h-full rounded-full transition-all duration-200'
            style={{
              width: `${progress}%`,
              backgroundColor: nowPlaying.colors.darker,
            }}
          />
        </div>
      </div>

      {nowPlaying.lyrics && (
        <div className='relative flex flex-col gap-3 overflow-clip rounded-xl p-8'
            style={{
                background: `${nowPlaying.colors.darker}`
            }}
        >
          <h3 className='text-lg font-semibold text-primary-foreground'>Lyrics</h3>
          <LyricsPlayer data={nowPlaying} />
        </div>
      )}
    </div>
  );
}
