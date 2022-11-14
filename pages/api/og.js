import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
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
          tw="bg-slate-800"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div tw="bg-slate-800 flex">
            <div tw="flex w-full py-6 px-4 items-center justify-center p-8 text-center">
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center justify-center items-center">
                {isBlog && <span tw="text-white">rafaar | blog</span>}
                <span tw={isBlog ? "text-indigo-500" : "text-white"}>
                  {title}
                </span>
              </h2>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
