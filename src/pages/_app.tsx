import 'styles/reset.css'
import 'styles/globals.scss'
import 'styles/_mixins.scss'
import 'styles/_variables.scss'

import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
