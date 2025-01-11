'use client';

import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { NowPlaying, Syllable } from '@/types';

interface LyricWordProps {
  word: Syllable[];
  isActive: boolean;
  isPast: boolean;
}

interface StyleProps {
  darker: string;
}

const BackgroundGradient = memo(({ darker }: StyleProps) => (
  <div
    className='absolute inset-0 rounded-xl opacity-90'
    style={{
      background: `linear-gradient(180deg, ${darker}00 0%, ${darker}95 10%, ${darker}95 90%, ${darker}00 100%)`,
      backdropFilter: 'blur(16px)',
    }}
  />
));
BackgroundGradient.displayName = 'BackgroundGradient';

const LyricWord = memo(({ word, isActive, isPast }: LyricWordProps) => {
  const state = isActive ? 'active' : isPast ? 'past' : 'future';

  return (
    <span
      className={`lyrics-word ml-2 inline-block transition-all duration-200 ${
        state === 'active'
          ? 'scale-110 transform font-semibold text-white opacity-100'
          : state === 'past'
            ? 'scale-100 transform text-white/60 opacity-90'
            : 'scale-100 transform text-white/40 opacity-40'
      }`}
    >
      {word.map((syllable) => syllable.Text).join('')}
    </span>
  );
});
LyricWord.displayName = 'LyricWord';

const LyricsPlayer: React.FC<{ data: NowPlaying }> = memo(({ data }) => {
  // Hooks
  const [activeLine, setActiveLine] = useState(-1);
  const [activeWord, setActiveWord] = useState(-1);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);

  const processWords = useCallback((syllables: Syllable[]): Syllable[][] => {
    if (!syllables?.length) return [];
    return syllables
      .reduce<Syllable[][]>(
        (acc, syllable, index) => {
          const currentWord = acc[acc.length - 1] || [];
          currentWord.push(syllable);
          if (!syllable.IsPartOfWord || index === syllables.length - 1) {
            return [...acc.slice(0, -1), currentWord, []];
          }
          return [...acc.slice(0, -1), currentWord];
        },
        [[]]
      )
      .filter((word) => word.length);
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    scrollTimeoutRef.current && clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  useEffect(() => {
    setActiveLine(-1);
    setActiveWord(-1);
    setIsScrolling(false);
  }, [data.songUri]);

  useEffect(() => {
    const currentTimeInSeconds = data.progressMs / 1000;

    const updateLyrics = () => {
      const newLineIndex = data.lyrics?.Content.findIndex((content) => {
        if (!content.Lead.Syllables) return false;

        const syllables = content.Lead.Syllables;
        return (
          syllables.length > 0 &&
          currentTimeInSeconds >= syllables[0].StartTime &&
          currentTimeInSeconds <= syllables[syllables.length - 1].EndTime
        );
      });

      if (newLineIndex !== activeLine) {
        setActiveLine(newLineIndex !== undefined ? newLineIndex : -1);
        if (
          newLineIndex !== undefined &&
          newLineIndex >= 0 &&
          containerRef.current &&
          !isScrolling
        ) {
          document.getElementById(`line-${newLineIndex}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }

      if (newLineIndex !== undefined && newLineIndex >= 0) {
        const syllables = data.lyrics?.Content[newLineIndex]?.Lead?.Syllables;
        if (syllables?.length) {
          const syllableIndex = syllables.findIndex(
            (syl) =>
              currentTimeInSeconds >= syl.StartTime &&
              currentTimeInSeconds <= syl.EndTime
          );

          if (syllableIndex >= 0) {
            const wordStartIndex = syllables
              .slice(0, syllableIndex + 1)
              .reduce(
                (start, syl, i) => (!syl.IsPartOfWord && i > 0 ? i : start),
                0
              );

            setActiveWord(wordStartIndex);
          }
        }
      }
    };

    const intervalId = setInterval(updateLyrics, 50);
    return () => {
      clearInterval(intervalId);
      scrollTimeoutRef.current && clearTimeout(scrollTimeoutRef.current);
    };
  }, [data.progressMs, data.lyrics, activeLine, isScrolling]);

  const renderedContent = useMemo(
    () =>
      data.lyrics?.Content.map((content, lineIndex) => {
        const isActive = lineIndex === activeLine;
        const isPast = lineIndex < activeLine;
        const words = processWords(content.Lead.Syllables);

        const lineState = isActive ? 'active' : isPast ? 'past' : 'future';
        const alignment = content.OppositeAligned ? 'text-right' : 'text-left';

        return (
          <div
            key={lineIndex}
            id={`line-${lineIndex}`}
            className={`lyric-line py-3 text-2xl transition-all duration-300 ${
              lineState === 'active'
                ? 'translate-y-0 transform opacity-100'
                : lineState === 'past'
                  ? 'translate-y-2 transform opacity-20'
                  : 'translate-y-2 transform opacity-40'
            } ${alignment}`}
          >
            <div className='inline-block'>
              {words.map((word, wordIndex) => (
                <LyricWord
                  key={wordIndex}
                  word={word}
                  isActive={isActive && wordIndex === activeWord}
                  isPast={isPast || (isActive && wordIndex < activeWord)}
                />
              ))}
            </div>
          </div>
        );
      }),
    [data.lyrics?.Content, activeLine, activeWord, processWords]
  );

  if (!data?.lyrics?.Content?.length) return null;

  return (
    <div className='relative mx-auto w-full'>
      <BackgroundGradient darker={data.colors.darker} />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className='hide-scrollbar lyrics-container relative h-[calc(100vh-24rem)] overflow-y-auto'
      >
        {renderedContent}
      </div>
    </div>
  );
});
LyricsPlayer.displayName = 'LyricsPlayer';

export default LyricsPlayer;
