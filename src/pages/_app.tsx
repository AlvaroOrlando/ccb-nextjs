import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.scss'


import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Open_Sans } from 'next/font/google'
import { GlobalContextProvider } from '@/Context/GlobalContextProvider';
import { ValidateCpfProvider } from '@/Context/ValidateCpfContext';
import { globalStyles } from '@/styles/global';
import { MultiStepProvider } from '@/Context/MultiStepContext';
import { FormProviderCreateIsrcPedido } from '@/stores/isrcStore';
const openSans = Open_Sans({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {


  useEffect(() => {
    
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
        <GlobalContextProvider>
            <Header />
            <main className={openSans.className}>
              <Component {...pageProps} />
            <Footer />
            </main>
        </GlobalContextProvider>
    </>
  )
}