import NextLink from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

function Link({ href, className, children, ...props }: LinkProps) {
    return (
        <NextLink href={href} className={className} {...props}>
            {children}
        </NextLink>
    );
}

export default Link;
