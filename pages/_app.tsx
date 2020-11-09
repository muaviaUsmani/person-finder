import 'bootstrap/scss/bootstrap.scss'
import '../styles/globals.scss'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <section>
        <Component {...pageProps} />
      </section>
    </>
  )
}

export default MyApp
