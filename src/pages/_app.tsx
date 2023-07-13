import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.scss'


import { useEffect } from "react";
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';


export default function App({ Component, pageProps }: AppProps) {
 const { pathname } = useRouter()

useEffect(() => {
  
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <ThemeProvider theme={defaultTheme}> 
      <Header />
        <Component {...pageProps} />
      <Footer />
    </ThemeProvider> 
  )
}
