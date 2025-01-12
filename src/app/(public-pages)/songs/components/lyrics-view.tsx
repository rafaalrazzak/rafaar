"use client";

import { AnimatePresence,motion } from 'framer-motion';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { Content, NowPlaying, Syllable } from '@/types';

// Optimized hooks with better performance
const useWordProcessor = () => {
  return useCallback((syllables: Syllable[]): Syllable[][] => {
    if (!syllables?.length) return [];

    const result: Syllable[][] = [];
    let currentWord: Syllable[] = [];

    syllables.forEach((syllable, index) => {
      currentWord.push(syllable);

      if (!syllable.IsPartOfWord || index === syllables.length - 1) {
        if (currentWord.length > 0) {
          result.push([...currentWord]);
          currentWord = [];
        }
      }
    });

    return result;
  }, []);
};

const useActiveLine = (data: NowPlaying) => {
  const lastUpdate = useRef({ time: 0, lineIndex: -1, wordIndex: -1 });
  const [state, setState] = useState({ lineIndex: -1, wordIndex: -1 });

  useEffect(() => {
    const currentTime = data.progressMs / 1000;

    // Throttle updates to every 30ms for smoother transitions
    if (data.progressMs - lastUpdate.current.time < 30) return;

    const lineIndex = data.lyrics.Content.findIndex((content) => {
      const startTime = content.Lead?.StartTime ?? content.StartTime;
      const endTime = content.Lead?.EndTime ?? content.EndTime;

      if (!startTime || !endTime) return false;

      return currentTime >= startTime && currentTime <= endTime;
    });

    if (lineIndex === -1) {
      if (state.lineIndex !== -1) {
        setState({ lineIndex: -1, wordIndex: -1 });
      }
      return;
    }

    const line = data.lyrics.Content[lineIndex];
    const syllables = line.Lead?.Syllables || [];
    const wordIndex = syllables.findIndex(
      (syl) => currentTime >= syl.StartTime && currentTime <= syl.EndTime
    );

    if (
      lineIndex !== lastUpdate.current.lineIndex ||
      wordIndex !== lastUpdate.current.wordIndex
    ) {
      lastUpdate.current = {
        time: data.progressMs,
        lineIndex,
        wordIndex,
      };
      setState({ lineIndex, wordIndex });
    }
  }, [data.progressMs, data.lyrics.Content, state.lineIndex]);

  return state;
};

const useScrollManager = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isScrolling = useRef(false);

  const scrollToLine = useCallback((lineIndex: number) => {
    if (!containerRef.current || isScrolling.current) return;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      const lineElement = document.getElementById(`line-${lineIndex}`);
      if (!lineElement) return;

      isScrolling.current = true;
      const container = containerRef.current!;
      const containerHeight = container.clientHeight;
      const lineTop = lineElement.offsetTop;
      const lineHeight = lineElement.clientHeight;

      const targetScroll = lineTop - containerHeight / 2 + lineHeight / 2;

      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });

        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 300);
      });
    }, 50);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return { containerRef, scrollToLine };
};

// Optimized components
const Word = memo(
  ({
    syllables,
    isActive,
    isPast,
  }: {
    syllables: Syllable[];
    isActive: boolean;
    isPast: boolean;
  }) => (
    <motion.span
      initial={false}
      animate={{
        opacity: isPast ? 0.9 : isActive ? 1 : 0.7,
        scale: isActive ? 1.1 : 1,
      }}
      transition={{
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`inline-block origin-center font-light will-change-transform ${
        isActive
          ? 'font-bold text-white'
          : isPast
            ? 'text-white/80'
            : 'text-white/60'
      }`}
    >
      {syllables.map((s) => s.Text).join('')}
    </motion.span>
  )
);

const Line = memo(
  ({
    content,
    index,
    isActive,
    isPast,
    activeWordIndex,
  }: {
    content: Content;
    index: number;
    isActive: boolean;
    isPast: boolean;
    activeWordIndex: number;
  }) => {
    const processWords = useWordProcessor();

    // Check if Lead.Syllables exist, otherwise fallback to Text
    const words = React.useMemo(() => {
      if (content.Lead?.Syllables) {
        return processWords(content.Lead.Syllables);
      }
      if (content.Text) {
        // Fallback: Treat `content.Text` as a single word
        return [
          [
            {
              Text: content.Text,
              StartTime: 0,
              EndTime: 0,
              IsPartOfWord: false,
            },
          ],
        ];
      }
      return [];
    }, [content.Lead?.Syllables, content.Text, processWords]);

    return (
      <motion.div
        id={`line-${index}`}
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0.6,
          scale: isActive ? 1 : 0.99,
        }}
        transition={{
          duration: 0.3,
          ease: [0.23, 1, 0.32, 1],
        }}
        className={`relative py-4 text-xl font-light tracking-wide md:text-2xl ${
          content.OppositeAligned ? 'text-right' : 'text-left'
        } ${isActive ? 'z-10' : 'z-0'}`}
      >
        <div className='inline-flex flex-wrap items-center gap-[0.4em] leading-relaxed'>
          {words.map((syllableGroup, idx) => (
            <Word
              key={`${syllableGroup[0].StartTime}-${idx}`}
              syllables={syllableGroup}
              isActive={isActive && idx === activeWordIndex}
              isPast={isPast || (isActive && idx < activeWordIndex)}
            />
          ))}
        </div>
      </motion.div>
    );
  }
);

const Backdrop = memo(({ color }: { color: string }) => (
  <div
    className='absolute inset-0 transition-colors duration-500'
    style={{
      background: `linear-gradient(180deg, 
        ${color}00 0%, 
        ${color}95 8%, 
        ${color}98 92%, 
        ${color}00 100%
      )`,
      backdropFilter: 'blur(40px) saturate(150%)',
      WebkitBackdropFilter: 'blur(40px) saturate(150%)',
    }}
  />
));

const LyricsPlayer = memo(({ data }: { data: NowPlaying }) => {
  const { containerRef, scrollToLine } = useScrollManager();
  const { lineIndex: activeLine, wordIndex: activeWord } = useActiveLine(data);

  useEffect(() => {
    if (activeLine >= 0) {
      scrollToLine(activeLine);
    }
  }, [activeLine, scrollToLine]);

  if (!data?.lyrics?.Content?.length) return null;

  return (
    <div className='relative'>
      <div
        ref={containerRef}
        className='relative h-[calc(100vh-16rem)] overflow-y-auto overscroll-contain scroll-smooth will-change-scroll md:h-[calc(100vh-20rem)]'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className='space-y-1'>
          <AnimatePresence mode='wait'>
            {data.lyrics.Content.map((content, index) => (
              <Line
                key={`line-${index}`}
                content={content}
                index={index}
                isActive={index === activeLine}
                isPast={index < activeLine}
                activeWordIndex={activeWord}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

// Display names
Word.displayName = 'Word';
Line.displayName = 'Line';
Backdrop.displayName = 'Backdrop';
LyricsPlayer.displayName = 'LyricsPlayer';

export default LyricsPlayer;
