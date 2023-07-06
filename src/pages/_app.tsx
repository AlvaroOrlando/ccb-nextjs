import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'


import { useEffect } from "react";
import Header from '@/components/Header';



export default function App({ Component, pageProps }: AppProps) {
 

useEffect(() => {
  
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
