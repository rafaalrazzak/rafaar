import clsx from "clsx"
export default function IconText({
  icon,
  text,
  className: addClassName,
  ...props
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-xl bg-primary-100 px-4 py-2 dark:bg-primary-800"
      )}
      {...props}
    >
      {icon}
      <p className="text-sm font-semibold dark:text-primary-300">{text}</p>
    </div>
  )
}
