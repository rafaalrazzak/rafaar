import { createElement } from "react";
import { cn } from "@/libs/utils";

export const UnstyledButton = ({ children, className, ...props }) => {
    return createElement(
        "button",
        {
            ...props,
            className: cn("inline-flex items-center justify-center", className),
        },
        children
    );
};
