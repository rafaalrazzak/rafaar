export default function Tools({ title, children }) {
  return (
    <sectio className="flex flex-col gap-2">
      <div className="py-6">
        <h1>{title}</h1>
        {children}
      </div>
    </sectio>
  )
}
