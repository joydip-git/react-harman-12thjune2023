import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// const Test = () => { return <div>hello</div> }
// App({Component:()=>Test()})
