export default function ToolsSection({ title, children}) {
  return (
    <section className="flex flex-col gap-2">
      <div className="py-6 flex flex-col gap-4">
        <h4>{title}</h4>
        <div className="flex flex-wrap gap-2">
        {children}
        </div>
      </div>
    </section>
  )
}
