import clsx from "clsx"

function Container({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        "xl:w-12/12 mx-auto overflow-hidden px-8 lg:px-10 2xl:w-8/12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
