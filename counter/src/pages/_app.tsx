import { CounterProvider } from '@/hooks/useCounter'
import { TabProvider } from '@/hooks/useTab'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <TabProvider>
        <Component {...pageProps} />
      </TabProvider>
    </CounterProvider>
  )
}
