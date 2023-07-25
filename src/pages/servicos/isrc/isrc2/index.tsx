import Crumb from "@/components/Crumb";
import MainContainer from "@/components/MainContainer";
import Painel from "@/components/Painel";
import DadosPessois from "./Forms/DadosPessoais";
import BaseContainer from "@/components/BaseContainer";

export default function ISRC2(){
    return (
        <>
            <Crumb />
            <MainContainer>
                <h1 className="subtitulosGlobal">
                    Preencha as informações para gerar seu ISRC
                </h1>
                <BaseContainer>
                  <Painel content="DADOS PESSOAIS"/>
                  <DadosPessois />
                </BaseContainer>
            </MainContainer>
        </>
    )
}