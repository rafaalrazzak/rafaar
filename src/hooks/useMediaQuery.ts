"use strict";
"use client";

import { useState, useCallback, useEffect } from "react";

/**
 *
 * @param query - a string of media query.
 * @example ```tsx
 * const isMedium = useMediaQuery('(min-width: 768px)')
 * ```
 * @returns `true` or `false`
 */
const useMediaQuery = function (query: string): boolean {
    const [matches, setMatches] = useState(false);

    // check if the query is match with the given parameter
    const isMatch = useCallback(function (query: string): boolean {
        if (typeof window !== "undefined") {
            // this will return true
            return window.matchMedia(query).matches;
        }
        return false;
    }, []);

    // callback for media query's event listener
    const handleChange = useCallback(
        function () {
            return setMatches(isMatch(query));
        },
        [isMatch, query]
    );

    // we run side effect whenever media query has change
    useEffect(
        function () {
            if (typeof window !== "undefined") {
                const mediaQuery = window.matchMedia(query);
                handleChange();
                mediaQuery.addEventListener("change", handleChange);
                return function () {
                    return mediaQuery.removeEventListener("change", handleChange);
                };
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [query]
    );

    return matches;
};

export { useMediaQuery };
