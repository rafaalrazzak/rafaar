import { useEffect, useRef, useState } from 'react';
import { NowPlaying } from '@/types';

type LyricsContent = {
  Lead: {
    Syllables: Array<{
      Text: string;
      StartTime: number;
      EndTime: number;
      IsPartOfWord: boolean;
    }>;
  };
  OppositeAligned: boolean;
};

const LyricsPlayer = ({ data }: { data: NowPlaying }) => {
  const [activeLine, setActiveLine] = useState<number>(-1);
  const [activeWord, setActiveWord] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  if(!data.lyrics) return null;

  useEffect(() => {
    if (!data.lyrics) return;

    const currentTimeInSeconds = data.progressMs / 1000;

    const updateLyrics = () => {
      const newLineIndex = data.lyrics.Content.findIndex((content) => {
        const syllables = content.Lead.Syllables;
        if (syllables.length === 0) return false;

        const lineStart = syllables[0].StartTime;
        const lineEnd = syllables[syllables.length - 1].EndTime;

        return (
          currentTimeInSeconds >= lineStart && currentTimeInSeconds <= lineEnd
        );
      });

      if (newLineIndex !== activeLine) {
        setActiveLine(newLineIndex);
        if (newLineIndex >= 0 && containerRef.current && !isScrolling) {
          const lineElement = document.getElementById(`line-${newLineIndex}`);
          lineElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }

      if (newLineIndex >= 0) {
        const syllables = data.lyrics.Content[newLineIndex]?.Lead?.Syllables;
        if (syllables) {
          const syllableIndex = syllables.findIndex(
            (syl) =>
              currentTimeInSeconds >= syl.StartTime &&
              currentTimeInSeconds <= syl.EndTime
          );

          if (syllableIndex >= 0) {
            let wordStartIndex = 0;
            for (let i = 0; i <= syllableIndex; i++) {
              if (!syllables[i].IsPartOfWord && i > 0) {
                wordStartIndex = i;
              }
            }
            setActiveWord(wordStartIndex);
          }
        }
      }
    };

    updateLyrics();
    const intervalId = setInterval(updateLyrics, 50);

    return () => clearInterval(intervalId);
  }, [data.progressMs, data.lyrics, activeLine, activeWord, isScrolling]);

  const handleScroll = () => {
    setIsScrolling(true);
    const timeout = setTimeout(() => setIsScrolling(false), 1000);
    return () => clearTimeout(timeout);
  };

  if (!data.lyrics) return null;

  return (
    <div className='relative mx-auto w-full'>
      <style jsx>{`
        .lyrics-word {
          display: inline-block;
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

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

        .lyrics-container {
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `}</style>

      <div
        className='absolute inset-0 rounded-xl opacity-90'
        style={{
          background: `linear-gradient(180deg, ${data.colors.darker}00 0%, ${data.colors.darker}95 10%, ${data.colors.darker}95 90%, ${data.colors.darker}00 100%)`,
          backdropFilter: 'blur(16px)',
        }}
      />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className='hide-scrollbar lyrics-container relative h-[calc(100vh-16rem)] overflow-y-auto'
      >
        {data.lyrics.Content.map((content, lineIndex) => {
          const isActive = lineIndex === activeLine;
          const isPast = lineIndex < activeLine;
          const isFuture = lineIndex > activeLine;

          const words: Array<Array<(typeof content.Lead.Syllables)[0]>> = [];
          let currentWord: typeof content.Lead.Syllables = [];

          content.Lead.Syllables.forEach((syllable, index) => {
            currentWord.push(syllable);
            if (
              !syllable.IsPartOfWord ||
              index === content.Lead.Syllables.length - 1
            ) {
              words.push(currentWord);
              currentWord = [];
            }
          });

          return (
            <div
              key={lineIndex}
              id={`line-${lineIndex}`}
              className={`lyric-line transition-all duration-300 ${
                isActive
                  ? 'lyric-line-active py-6'
                  : isPast
                    ? 'lyric-line-past py-3'
                    : 'lyric-line-future py-3'
              } ${content.OppositeAligned ? 'text-right' : 'text-left'}`}
            >
              <div className='inline-block'>
                {words.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className={`lyrics-word ml-2 inline-block transition-all duration-150 ${
                      isActive && wordIndex === activeWord
                        ? 'lyrics-word-active'
                        : isPast || (isActive && wordIndex < activeWord)
                          ? 'lyrics-word-past'
                          : 'lyrics-word-future'
                    }`}
                  >
                    {word.map((syllable) => syllable.Text).join('')}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LyricsPlayer;
