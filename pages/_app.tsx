import 'bootstrap/scss/bootstrap.scss'
import '../styles/globals.scss'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import Header from '../components/Header/Header'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Component {...pageProps} />
      </section>
    </Provider>
  )
}

export default MyApp
