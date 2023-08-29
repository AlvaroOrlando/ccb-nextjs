import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.scss'


import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Open_Sans } from 'next/font/google'
import { GlobalContextProvider } from '@/Context/GlobalContextProvider';
import { ValidateCpfProvider } from '@/Context/ValidateCpfContext';
const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

useEffect(() => {
  
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <>
        <GlobalContextProvider> 
          <ValidateCpfProvider>
            <Header />
            <main className={openSans.className}>
              <Component {...pageProps} />
            <Footer />
            </main>
            </ValidateCpfProvider>
        </GlobalContextProvider>
    </>
  )
}