import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const TabProvider = dynamic(() => import('counter/hooks/useTab').then(mod => mod.TabProvider), {
  ssr: false,
  loading: () => <span>Carregando...</span>
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabProvider>
      <Component {...pageProps} />
    </TabProvider>
  )
  
}
