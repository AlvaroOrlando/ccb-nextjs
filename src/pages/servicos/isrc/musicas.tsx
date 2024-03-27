// React/Next
import { useRouter } from "next/router";
import MainContainer from "@/components/Containers/MainContainer";
import Music from "@/components/Forms/Musicas/musicasIsrc";
import { FormProviderCreateIsrcPedido } from "@/stores/isrcStore";

// Interfaces/Types
type Medalha = "2" | "3" | "4" | "5" | "6";

const cpf = "05559092630"

// Page
export default function Musicas(){

    const router = useRouter()

    const { cpf } = router.query

    const cpfString = Array.isArray(cpf) ? cpf.join(',') : cpf || '';

    // Virá do Banco de Dados
    const em_dia: "s" | "n" = "n";
    const medalha: Medalha | "" = "";

    function handleRedirect(){
      console.log("redirecionou");
    }

    return (
        <MainContainer>
          <Music em_dia={em_dia} cpf={cpfString} />
        </MainContainer>
    )
}
