import Image from "@/components/Image"
import { useRouter } from "next/router"

import { generateOgImage } from "@/libs/metapage/ogImage"

import React from "react"

const OG = generateOgImage({ title: "Hello World", theme: "dark" })

function Hello() {

  return (
    <div>
      hello
      <Image src={OG} width={200} height={300} alt="" />
    </div>
  )
}

export default Hello
