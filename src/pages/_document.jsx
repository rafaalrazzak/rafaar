import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/jpg" href="/rafaar.jpg" />
      </Head>
      <body className="flex h-full flex-col bg-primary-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
