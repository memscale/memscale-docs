import 'nextra-theme-docs/style.css'
import '../styles/globals.css'
import { Sora, JetBrains_Mono } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sora: ${sora.style.fontFamily};
          --font-mono: ${jetbrainsMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
