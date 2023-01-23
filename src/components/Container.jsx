import clsx from 'clsx'

function Container({ className, children, ...props }) {
  return (
    <div
      className={clsx('mx-auto px-8 md:w-9/12 lg:px-10 ', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
