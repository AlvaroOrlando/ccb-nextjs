import Image from "next/image";
import modeloCertificado from '@/assets/images/certificado_isrc_modelo.jpg'
import MainContainer from "@/components/Containers/MainContainer";

export default function ModeloCertificado(){
    return (
        <MainContainer className="p-0">
            <Image style={{width:'100%', margin:'0 auto', maxHeight:'668px'}} alt="" src={modeloCertificado} width={1200} height={1200}/>
        </MainContainer>
    )
}