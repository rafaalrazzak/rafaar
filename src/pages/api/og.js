/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google"
import { ImageResponse } from "@vercel/og"

const inter = Inter({
  subsets: ["latin"],
})

export const config = {
  runtime: "edge",
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title"
    const isBlog = searchParams.has("blog")

    return new ImageResponse(
      (
        <div
          className={inter.className}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "#0e0e0e",
          }}
        >
          <img
            width="1200"
            height="630"
            alt="Background"
            src="https://res.cloudinary.com/raf-ar/image/upload/v1675954979/thumbnail/hero-dark_ucvhsh.png"
          />
          <div tw="top-8 left-8 absolute flex text-white items-center">
            <img
              src="https://res.cloudinary.com/raf-ar/image/upload/v1675955137/raf/logo-dark_iwlhqd.svg"
              width={50}
              height={30}
              alt="Logo"
            />
          </div>

          <div tw="flex flex-col w-full py-6 px-4 items-center justify-center p-8 text-center absolute inset-0">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center justify-center items-center">
              {isBlog && <span tw="text-white">rafaar | blog</span>}
              <span tw={isBlog ? "text-indigo-500" : "text-white"}>
                {title}
              </span>
            </h2>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
