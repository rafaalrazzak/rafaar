'use client';

import { NowPlaying, Syllable } from '@/types';
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  memo,
  useMemo,
} from 'react';

// Types for component props
interface LyricWordProps {
  word: Syllable[];
  isActive: boolean;
  isPast: boolean;
}

interface StyleProps {
  darker: string;
}

// Styles extracted to constant to prevent recreating on each render
const STYLES = {
  WORD_BASE: 'lyrics-word ml-2 inline-block',
  WORD_STATES: {
    active: 'lyrics-word-active',
    past: 'lyrics-word-past',
    future: 'lyrics-word-future',
  },
  LINE_BASE: 'lyric-line',
  LINE_STATES: {
    active: 'lyric-line-active py-6',
    past: 'lyric-line-past py-3',
    future: 'lyric-line-future py-3',
  },
} as const;

// Background gradient component
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

// Optimized word component
const LyricWord = memo(({ word, isActive, isPast }: LyricWordProps) => {
  const state = isActive ? 'active' : isPast ? 'past' : 'future';

  return (
    <span className={`${STYLES.WORD_BASE} ${STYLES.WORD_STATES[state]}`}>
      {word.map((syllable) => syllable.Text).join('')}
    </span>
  );
});

LyricWord.displayName = 'LyricWord';

// Main component
const LyricsPlayer: React.FC<{ data: NowPlaying }> = memo(({ data }) => {
  const [activeLine, setActiveLine] = useState(-1);
  const [activeWord, setActiveWord] = useState(-1);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);

  // Validate lyrics data
  if (!data?.lyrics?.Content?.length) return null;

  // Memoized words processing with early returns and optimizations
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

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    scrollTimeoutRef.current && clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  // Optimized lyrics update logic
  useEffect(() => {
    if (!data.lyrics?.Content) return;

    const currentTimeInSeconds = data.progressMs / 1000;

    const updateLyrics = () => {
      const newLineIndex = data.lyrics?.Content.findIndex((content) => {
        const syllables = content.Lead.Syllables;
        return (
          syllables.length > 0 &&
          currentTimeInSeconds >= syllables[0].StartTime &&
          currentTimeInSeconds <= syllables[syllables.length - 1].EndTime
        );
      });

      // Update active line and scroll if needed
      if (newLineIndex !== activeLine) {
        setActiveLine(newLineIndex !== undefined ? newLineIndex : -1);
        if (newLineIndex !== undefined && newLineIndex >= 0 && containerRef.current && !isScrolling) {
          document.getElementById(`line-${newLineIndex}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }

      // Update active word
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

  // Memoize content rendering
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
            className={`${STYLES.LINE_BASE} ${STYLES.LINE_STATES[lineState]} ${alignment}`}
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
    [data.lyrics.Content, activeLine, activeWord, processWords]
  );

  return (
    <div className='relative mx-auto w-full'>
      <style jsx>{`
        .lyrics-word {
          font-size: 1.5rem;
          font-weight: 500;
          transition:
            transform 200ms ease-out,
            opacity 200ms ease-out;
          will-change: transform, opacity;
        }
        .lyrics-word-active {
          color: #ffffff;
          transform: scale(1.12);
          font-weight: 600;
          opacity: 1;
        }
        .lyrics-word-past {
          color: rgba(255, 255, 255, 0.75);
          opacity: 0.6;
          transform: scale(1);
        }
        .lyrics-word-future {
          color: rgba(255, 255, 255, 0.4);
          opacity: 0.5;
          transform: scale(1);
        }
        .lyrics-container {
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .lyric-line {
          transition:
            opacity 300ms ease,
            transform 300ms ease-out;
          will-change: transform, opacity;
        }
        .lyric-line-active {
          opacity: 1;
          transform: translateY(0);
        }
        .lyric-line-past {
          opacity: 0.5;
          transform: translateY(10px);
        }
        .lyric-line-future {
          opacity: 0.4;
          transform: translateY(10px);
        }
      `}</style>

      <BackgroundGradient darker={data.colors.darker} />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className='hide-scrollbar lyrics-container relative h-[calc(100vh-16rem)] overflow-y-auto'
      >
        {renderedContent}
      </div>
    </div>
  );
});

LyricsPlayer.displayName = 'LyricsPlayer';

export default LyricsPlayer;
