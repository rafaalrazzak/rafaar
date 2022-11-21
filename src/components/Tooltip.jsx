export default function Tooltip({ title, children }) {
  return (
    <div>
      <div className="group container relative mx-auto max-w-[228px] rounded   transition-all duration-500">
        <div className="pointer-events-none absolute -top-8 left-1/2 z-50 flex -translate-x-1/2 flex-col whitespace-nowrap rounded-lg bg-primary-800/60 px-2 py-1 text-xs text-white opacity-0 filter backdrop-blur-lg transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-primary-800/60 before:content-[''] group-hover:opacity-100 dark:bg-primary-100/60 dark:text-primary-800 dark:before:border-t-primary-100/60">
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}
