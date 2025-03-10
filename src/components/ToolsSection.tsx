export default function ToolsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col gap-2'>
      <div className='flex flex-col gap-4 py-6'>
        <h2>{title}</h2>
        <div className='flex flex-wrap gap-2'>{children}</div>
      </div>
    </section>
  );
}
