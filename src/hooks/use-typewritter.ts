import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let direction = 1; // 1 for forward, -1 for backward

    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex += direction;

      if (currentIndex === text.length || currentIndex === 0) {
        direction *= -1; // Reverse direction
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
}
