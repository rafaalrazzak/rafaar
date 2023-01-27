import clsx from "clsx"
export default function IconText({ icon, text, className: addClassName, ...props }) {
  return (
    <div className={clsx("flex gap-2 bg-primary-100 rounded-xl px-4 py-2 items-center dark:bg-primary-800")} {...props}>
      {icon}
      <p className="font-semibold dark:text-primary-300 text-sm">
        {text}
      </p>
    </div>
  )
}
