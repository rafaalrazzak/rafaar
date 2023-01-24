import clsx from "clsx"
import Balancer from "react-wrap-balancer"

import Image from "@/components/Image"
import siteMetadata from "@/data/siteMetadata"

function Hero({ className }) {
  return (
    <div
      className={clsx("flex  flex-1 items-center justify-between", className)}
    >
      <div className="flex max-w-lg flex-col gap-6 py-6">
        <h1>Rafa Al Razzak</h1>
        <h2 className="text-gradient bg-gradient-to-r from-teal-500 to-teal-800 text-5xl font-bold">
          Front-End Developer, Desainer
        </h2>
        <Balancer className=" text-primary-600 dark:text-primary-400">
          {siteMetadata.SELF_DESCRIPTION}
        </Balancer>
      </div>
      <div className="relative hidden overflow-hidden rounded-xl md:block">
        <Image
          src="/rafaar.jpg"
          alt="Rafa Al Razzak"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}

export default Hero
