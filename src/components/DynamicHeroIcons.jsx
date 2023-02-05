import * as HeroIcons from "@heroicons/react/24/outline"

export default function DynamicHeroIcons({ name }) {
  const { ...icons } = HeroIcons
  const TheIcon = icons[name]

  return <TheIcon className="h-4 w-4" aria-hidden="true" />
}
