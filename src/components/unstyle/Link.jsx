import NextLink from "next/link";
import { cn } from "@/libs/utils";

export const UnstyledLink = ({ href, children, onClick, ...props }) => {
    return (
        <NextLink href={href} scroll={false} title={props.title ?? ""} onClick={onClick} className={cn(props.className)} {...props}>
            {children}
        </NextLink>
    );
};
