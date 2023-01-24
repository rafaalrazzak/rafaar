import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Balancer from "react-wrap-balancer";

import DynamicIcon from "@/components/DynamicIcon";
import Link from "@/components/Link";
import Tooltip from "@/components/Tooltip";

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  stack,
}) {
  return (
    <div
      className="fixed relative sticky flex  h-64 flex-col justify-between overflow-clip rounded-lg bg-cover  bg-center px-4 py-2 text-white  transition-all duration-300 ease-in-out before:absolute before:inset-0 before:bg-gradient-to-t before:from-black after:to-transparent"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-between ">
        {stack && (
          <div className="inline-flex gap-3 rounded-full bg-black/20 px-2 py-1 backdrop-blur-xl">
            {stack.map((tool) => (
              <Tooltip key={tool} title={tool} position="bottom">
                <DynamicIcon name={tool} transform="scale(0.7)" />
              </Tooltip>
            ))}
          </div>
        )}

        <Link
          href={link}
          className="absolute top-2 right-3 inline-flex cursor-pointer rounded-full bg-black/20 p-2 backdrop-blur-xl"
        >
          <ArrowTopRightOnSquareIcon className="h-4 w-4 hover:text-teal-400" />
        </Link>
      </div>
      <div className="absolute bottom-4 flex flex-col px-2">
        <Balancer className="font-bold text-white">{title}</Balancer>
        <Balancer className="text-xs leading-relaxed text-primary-400 line-clamp-2">
          {description}
        </Balancer>
      </div>
    </div>
  );
}
