import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>RxGenius</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/RxGenius_App.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/RxGenius_App.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
