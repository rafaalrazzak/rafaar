"use client";

import { useEffect, useState } from "react";

export const useScroll = (): boolean => {
    const [yOffset, setYOffset] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleScroll() {
        const currentYOffset = window.pageYOffset;
        const isVisible = yOffset > currentYOffset;
        setYOffset(currentYOffset);

        setVisible(isVisible);
    }

    return visible;
};
