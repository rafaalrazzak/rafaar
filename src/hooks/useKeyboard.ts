"use client";

import { useCallback, useEffect, useRef, RefObject } from "react";

type Key = string;

type Callback = (event: KeyboardEvent) => void;

export const useKeyboard = (keys: Key[], callback: Callback, node: RefObject<HTMLElement> | null = null) => {
    // implement the callback ref pattern
    const callbackRef = useRef<Callback>(callback);

    // handle what happens on key press
    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            // check if one of the key is part of the ones we want
            if (keys.some((key) => event.key === key)) {
                callbackRef.current(event);
            }
        },
        [keys]
    );

    useEffect(() => {
        // target is either the provided node or the document
        const targetNode = node?.current ?? document;
        // attach the event listener
        targetNode.addEventListener("keydown", handleKeyPress);

        // remove the event listener
        return () => targetNode.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress, node]);
};
