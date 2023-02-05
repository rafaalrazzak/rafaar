import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"

import motion from "@/components/motion/text"
import { Section } from "@/components/section"
import { Card } from "@/components/ui/card"
export default function WaktuTempat() {
  return (
    <Section id="waktu-tempat" bg="/ppt/background/7-dark@1.5x.png">
      <Card bg>
        <motion.h1 className="text-center">Waktu dan Tempat Prakerin</motion.h1>
        <ul className="space-y-4">
          <li className="text-base text-gray-400">
            <CalendarDaysIcon className="mr-2 inline-block h-5 w-5 text-gray-400" />
            13 Desember 2022 - 13 Januari 2023
          </li>
          <li className="text-base text-gray-400">
            <ClockIcon className="mr-2 inline-block h-5 w-5 text-gray-400" />
            07.30 - 14.30
          </li>
          <li className="text-base text-gray-400">
            <MapPinIcon className="mr-2 inline-block h-5 w-5 text-gray-400" />
            Dinas Pemadam Kebakaran Kota Depok
          </li>
        </ul>
      </Card>
    </Section>
  )
}
