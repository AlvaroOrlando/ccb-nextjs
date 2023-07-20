import Crumb from "@/components/Crumb";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Context/GlobalContextProvider";

export default function SalaVip(){

    const { log } = useGlobalContext()
    const { push } = useRouter()
    
    useEffect(()=>{
        !log && push('/')
    },[log, push])

    return (
        <>
            <Crumb />
            <section className="MainContainer">
                <h1>Sala VIP </h1>
            </section>
        </>
    )
}