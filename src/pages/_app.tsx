import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.scss'


import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

useEffect(() => {
  
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <>
      <ThemeProvider theme={defaultTheme}> 
        <Header />
        <main className={openSans.className}>
          <Component {...pageProps} />
        <Footer />
        </main>
      </ThemeProvider> 
    </>
  )
}