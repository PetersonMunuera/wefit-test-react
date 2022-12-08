import type { AppProps } from 'next/app'

import { Template } from '../components/Template'
import { GlobalStyle } from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <GlobalStyle />
      <Component {...pageProps} />
    </Template>
  )
}