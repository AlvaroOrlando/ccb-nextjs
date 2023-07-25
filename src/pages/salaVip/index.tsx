import Crumb from "@/components/Crumb";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Context/GlobalContextProvider";
import MainContainer from "@/components/MainContainer";
import Card from "@/components/Cards";

export default function SalaVip(){

    const { log } = useGlobalContext()
    const { push } = useRouter()
    
    useEffect(()=>{
        !log && push('/')
    },[log, push])

    return (
        <>
        <Crumb />
        <MainContainer>
          <div style={{padding:'1rem', paddingBottom:'0px'}} className="col-12 col-sm-12 col-md-12">
          <div className="row">
            <Card page='salaVip'/>
          </div>
          </div>
       </MainContainer>
      </>
    )
}