import type { AppProps } from 'next/app';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
    console.log('✅ _app.tsx loaded - globals.css imported');
  
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
