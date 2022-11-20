import { ImageResponse } from '@vercel/og'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'
    const isBlog = searchParams.has('blog')

    return new ImageResponse(
      (
        <div
          className={inter.className}
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'black',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #f1f5f9 2%, transparent 0%), radial-gradient(circle at 75px 75px, #f1f5f9 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              rafaar.me
            </span>
          </div>
          <div tw="flex w-full py-6 px-4 items-center justify-center p-8 text-center">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center justify-center items-center">
              {isBlog && <span tw="text-white">rafaar | blog</span>}
              <span tw={isBlog ? 'text-indigo-500' : 'text-white'}>
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
