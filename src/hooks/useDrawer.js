"use client";

import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";

import { useMediaQuery } from "@/hooks";
import * as atom from "@/stores";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useAtom(atom.atomDrawer);
  const mdscreen = useMediaQuery("(min-width: 768px)");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeState = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!mdscreen) {
        if (isOpen) {
          document.documentElement.classList.add("overflow-y-hidden");
        } else {
          document.documentElement.classList.remove("overflow-y-hidden");
        }
      }

      if (mdscreen) {
        setIsOpen(false);
        document.documentElement.classList.remove("overflow-y-hidden");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, mdscreen]);

  return {
    isOpen,
    changeState,
  };
};
