import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div className={clsx("mx-auto px-4 max-w-4xl", className)} {...props}>
            {children}
        </div>
    );
}

export default Container;
