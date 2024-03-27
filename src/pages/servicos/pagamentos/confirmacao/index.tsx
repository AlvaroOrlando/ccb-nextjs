import Crumb from "@/components/Crumb";
import MainContainer from "@/components/Containers/MainContainer";
import Pagamentos2Form from "./pagamentos2Form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Confirmacao(){

    const router = useRouter();
    const { cpf, option } = router.query;
    const [opcao, setOpcao] = useState("");

    useEffect(() => {

        option === "3" ? setOpcao(" Pagamento de matrícula") :
        option === "4" ? setOpcao("Pagamento de mensalidade") :
        option === "5" ? setOpcao("Reativação de Conta de associado") :
        setOpcao("Opção não disponível no momento")
        
    }, [option, setOpcao]);


    return (
        <>
          <Crumb />
          <MainContainer>
            <h3 className="subtitulosGlobal">CCB - {opcao} </h3>

            <div className="alert alert-warning alert fade show instrucoesPagamentos2" role="alert">
                <h3 className="subtitulosGlobal">Instruções para pagamento</h3>
                <ol>
                    <li>Confira seus dados cadastrais alterando o que for necessário.</li>
                    <li> Clique no botão que está logo abaixo, para pagar.</li>
                </ol>
            </div> 

            <Pagamentos2Form cpf={cpf} />
          </MainContainer>
        </>
    )
}


