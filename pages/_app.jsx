import "../styles/globals.css"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} storageKey="theme" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
