import clsx from 'clsx'

function Container ({ className, children, ...props }) {
  return (
    <div
      className={clsx('mx-auto px-8 lg:px-10 xl:w-8/12 ', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
