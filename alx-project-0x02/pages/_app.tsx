import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;