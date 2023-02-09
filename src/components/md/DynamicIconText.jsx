import DynamicHeroIcons from "../DynamicHeroIcons"

export default function DynamicIconText({ data }) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((content) => (
        <div key={content.title} className="flex gap-2 text-gray-300">
          <DynamicHeroIcons name={content.icon} />
          <span className="text-base">{content.title}</span>
        </div>
      ))}
    </div>
  )
}
