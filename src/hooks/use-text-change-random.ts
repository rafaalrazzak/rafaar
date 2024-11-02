import { useState, useEffect, useRef } from "react";

export function useTextChangeRandom(text: string[], speed: number) {
    const [displayedText, setDisplayedText] = useState(text[0]);
    const currentIndex = useRef(0);

    useEffect(() => {
        const updateText = () => {
            currentIndex.current = (currentIndex.current + 1) % text.length;
            setDisplayedText(text[currentIndex.current]);
        };

        const intervalId = setInterval(updateText, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return displayedText;
}
