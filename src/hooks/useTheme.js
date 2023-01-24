"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownIsOpen, setDropdown] = useState(false);

  const toggleDropdown = useCallback(() => setDropdown((prev) => !prev), []);
  const closeDropdown = useCallback(() => setDropdown(false), []);

  const changeTheme = useCallback(
    (value) => {
      return () => {
        setTheme(value);
        closeDropdown();
      };
    },
    [setTheme, closeDropdown]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    changeTheme,
    theme,
    systemTheme,
    dropdownIsOpen,
    toggleDropdown,
    closeDropdown,
  };
};
