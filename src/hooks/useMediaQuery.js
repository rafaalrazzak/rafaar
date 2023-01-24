"use strict";
"use client";

Object.defineProperty(exports, "__esModule", { value: true });

const react = require("react");
/**
 *
 * @param query - a string of media query.
 * @example ```tsx
 * const isMedium = useMediaQuery('(min-width: 768px)')
 * ```
 * @returns `true` or `false`
 */
const useMediaQuery = function (query) {
  const _a = (0, react.useState)(false);
  const matches = _a[0];
  const setMatches = _a[1];
  // check if the query is match with the given parameter
  const isMatch = (0, react.useCallback)(function (query) {
    if (typeof window !== "undefined") {
      // this will return true
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);
  // calllback for media query's event listener
  const handleChange = (0, react.useCallback)(
    function () {
      return setMatches(isMatch(query));
    },
    [isMatch, query]
  );
  // we run side effect whenever media query has change
  (0, react.useEffect)(
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
exports.useMediaQuery = useMediaQuery;
