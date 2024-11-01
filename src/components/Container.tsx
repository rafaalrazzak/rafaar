import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={clsx('mx-auto max-w-4xl p-4', className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
