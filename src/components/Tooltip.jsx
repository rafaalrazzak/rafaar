import { twclsx } from "@/libs/twclsx"

export default function Tooltip({ title, children, position = "top" }) {
  const pos = {
    top: "-translate-x-1/2 -top-8 left-1/2 before:left-1/2 before:top-full before:-translate-x-1/2",
    bottom:
      "-translate-x-1/2 -bottom-8 left-1/2 before:left-1/2 before:bottom-full before:-translate-x-1/2 before:rotate-180",
    left: "-left-[72px] -translate-y-1/2 top-1/2 before:top-1/2 before:left-full before:-translate-y-1/2 before:-rotate-90",
    right:
      "-right-[72px] -translate-y-1/2 top-1/2 before:top-1/2 before:right-full before:-translate-y-1/2 before:rotate-90",
  }

  return (
    <div>
      <div className="group container relative mx-auto max-w-[228px] rounded   transition-all duration-500">
        <div
          className={twclsx(
            "pointer-events-none absolute  z-50 flex  flex-col whitespace-nowrap rounded-lg bg-primary-800/60 px-2 py-1 text-xs text-white opacity-0 filter backdrop-blur-lg transition before:absolute  before:border-4 before:border-transparent before:border-t-primary-800/60 before:content-[''] group-hover:opacity-100 dark:bg-primary-100/60 dark:text-primary-800 dark:before:border-t-primary-100/60",
            pos[position]
          )}
        >
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}
