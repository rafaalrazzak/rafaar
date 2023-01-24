"use client";

import { m } from "framer-motion";
import { useRouter } from "next/router";

import APP_ROUTE from "@/data/AppRoute";
import { useDrawer, useTheme } from "@/hooks";
import { twclsx } from "@/libs/twclsx";

import { ThemeMenu } from "./ThemeMenu";
import { UnstyledLink } from "./unstyle/Link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, ease: "easeInOut" },
  },
};

const item = {
  hidden: {
    ...container.hidden,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

export const DrawerMenu = () => {
  const { changeState } = useDrawer();
  const { pathname } = useRouter();
  const theme = useTheme();
  return (
    <aside
      aria-labelledby="toggle-drawer"
      className={twclsx(
        "fixed inset-0 z-20",
        "h-screen w-screen backdrop-blur",
        "bg-primary-50 dark:bg-primary-900",
        "md:hidden"
      )}
    >
      <nav className={twclsx("layout", "flex  flex-col", "my-24")}>
        <m.ul variants={container} initial="hidden" animate="visible">
          {APP_ROUTE.map((prop, id) => (
            <m.li key={id} variants={item}>
              <UnstyledLink
                key={id}
                href={prop.path}
                onClick={changeState}
                className={twclsx(
                  "inline-flex w-full px-6 text-left",
                  "border-b py-4 font-medium",
                  pathname === prop.path
                    ? "border-primary-600 text-theme-900 dark:border-primary-500 dark:text-theme-100"
                    : "border-theme-200 text-theme-700 dark:border-theme-800 dark:text-theme-300"
                )}
              >
                {prop.name}
              </UnstyledLink>
            </m.li>
          ))}
          <m.li variants={item}>
            <ThemeMenu
              changeTheme={theme.changeTheme}
              onClose={theme.closeDropdown}
              theme={theme.theme}
            />
          </m.li>
        </m.ul>
      </nav>
    </aside>
  );
};
