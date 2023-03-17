import 'styles/reset.css'
import 'styles/globals.scss'
import 'styles/_mixins.scss'
import 'styles/_variables.scss'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: () => { },
        onError: (error: any) => {
          console.error(error)
        }
      }}
    >
      <Component {...pageProps} />
    </ SWRConfig>
  )
}
