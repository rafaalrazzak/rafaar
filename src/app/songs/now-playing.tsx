'use client';

import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { Badge } from '@/components/ui/badge';
import { NOW_PLAYING_URL } from '@/libs/api';
import { cn, fetcher } from '@/libs/utils';
import { LyricSegment, NowPlaying } from '@/types';

export default function NowPlayingClient() {
  const {
    data: nowPlaying,
    isLoading,
    error,
  } = useSWR<NowPlaying>(NOW_PLAYING_URL, fetcher, { refreshInterval: 3000 });

  const [currentTime, setCurrentTime] = useState(0);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(-1);
  const lyricsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (nowPlaying) {
      setCurrentTime(nowPlaying.progressMs);
    }
  }, [nowPlaying]);

  useEffect(() => {
    if (!nowPlaying?.lyrics) return;

    const updateLyricIndex = () => {
      const index = getCurrentLyricIndex(nowPlaying.lyrics ?? []);
      setCurrentLyricIndex(index);
    };

    const interval = setInterval(() => {
      setCurrentTime((prev) =>
        prev + 1000 >= nowPlaying.durationMs ? 0 : prev + 1000
      );
      updateLyricIndex();
    }, 1000);

    updateLyricIndex();
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  useEffect(() => {
    if (currentLyricIndex >= 0 && lyricsContainerRef.current) {
      const container = lyricsContainerRef.current;
      const currentLyric = container.children[currentLyricIndex];

      if (currentLyric) {
        // Calculate the position to scroll, adjusting for 54px offset
        const scrollToPosition =
          currentLyric.getBoundingClientRect().top -
          container.getBoundingClientRect().top +
          container.scrollTop -
          54;
        container.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
      }
    }
  }, [currentLyricIndex]);

  const getCurrentLyricIndex = (lyrics: LyricSegment[]) => {
    const lyricWindowMs = 6500; // 6.5 seconds window
    const currentTimeMs = Math.floor(currentTime / 1000) * 1000;

    return lyrics.findIndex((lyric) => {
      const lyricStartMs = parseTimeToMs(lyric.start);
      return (
        lyricStartMs <= currentTimeMs &&
        lyricStartMs + lyricWindowMs > currentTimeMs
      );
    });
  };

  const formatTime = (ms: number) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const parseTimeToMs = (time: string): number => {
    const [minutes, seconds] = time.split(':').map(Number);
    return (minutes * 60 + seconds) * 1000;
  };

  if (isLoading || error || !nowPlaying) return null;

  const progress = (currentTime / nowPlaying.durationMs) * 100;

  return (
    <div className='my-12 flex flex-col gap-4'>
      <div
        className='relative flex aspect-video h-40 w-full items-center justify-between gap-4 overflow-hidden rounded-xl p-4 text-white'
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
          <div className='h-full rounded-full' style={{ width: '100%' }}>
            <div
              className='h-full rounded-full'
              style={{
                width: `${progress}%`,
                backgroundColor: nowPlaying.colors.darker,
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      </div>

      {nowPlaying && nowPlaying.lyrics && nowPlaying.lyrics?.length > 0 && (
        <div className='relative flex flex-col gap-3 overflow-clip rounded-xl bg-secondary px-8 py-4'>
          <h3 className='text-lg font-semibold'>Lyrics</h3>
          <div
            ref={lyricsContainerRef}
            className='h-64 max-h-64 overflow-y-scroll'
          >
            {nowPlaying.lyrics.map((lyric, index) => (
              <p
                key={index}
                id={currentLyricIndex === index ? 'current-lyrics' : undefined}
                className={cn('mb-2 text-2xl', {
                  'font-semibold text-primary': currentLyricIndex === index,
                  'text-muted-foreground': currentLyricIndex !== index,
                })}
              >
                {lyric.lyrics}
              </p>
            ))}
          </div>
          <div className='absolute inset-x-0 top-12 h-16 bg-gradient-to-b from-secondary to-transparent' />
          <div className='absolute inset-x-0 bottom-4 h-16 bg-gradient-to-t from-secondary to-transparent' />
        </div>
      )}
    </div>
  );
}
