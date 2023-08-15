import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div className={clsx("mx-auto px-8 md:w-9/12 lg:px-10 ", className)} {...props}>
            {children}
        </div>
    );
}

export default Container;
