import clsx from 'clsx'

function Button ({ children, size, ...props }) {
  const sizes = {
    xs: 'text-xs p-1',
    small: 'text-sm py-2 px-4',
    normal: 'px-3 py-2'
  }

  return (
    <button
      type="button"
      className={clsx(
        size ? sizes[size] : sizes.normal,
        'group rounded-full bg-white/90  shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur transition dark:bg-primary-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
