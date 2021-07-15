import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import ThemeProvider from '../components/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary renderFallback={({ error, reset }) =>
      <ThemeProvider>
        <div>something wrong... </div>
        <button onClick={reset}>reset</button>
      </ThemeProvider>
    }>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
export default MyApp
