import { createElement } from "react";

import { twclsx } from "@/libs/twclsx";

export const UnstyledButton = ({ children, className, ...props }) => {
  return createElement(
    "button",
    {
      ...props,
      className: twclsx("inline-flex items-center justify-center", className),
    },
    children
  );
};
