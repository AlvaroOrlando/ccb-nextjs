// React/Next
import { useRouter } from "next/router";

// Components
import MainContainer from "@/components/Containers/MainContainer";
import Music from "@/components/Forms/Musicas";

// utilities
import { calculaPrecoIsrc } from "@/utilities/pricing/pricing";

// Interfaces/Types
type Medalha = "2" | "3" | "4" | "5" | "6";

type MusicDataTypes = {
  musicas: {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    medalha?: Medalha | "";
  }[],
  termos:boolean,
  qtdMusicas: number
};

// Page
export default function Musicas(){

    const router = useRouter()
    // const { cpf, servico } = router.query
    const cpf = "0"
    const em_dia = "s"

    // Virá do Banco de Dados
    // const em_dia: "s" | "n" = "n";
    // const medalha: Medalha | "" = "";
    const servico = "isrc"

     // Functions
    function handleRedirect(data: MusicDataTypes) {
        // const dadosComPreco = calculaPrecoIsrc(data, em_dia, medalha);
  
      router.push({
        pathname: "./autores",
        query: { cpf, servico, dados: JSON.stringify(data) },
      });
    }

  return (
    <MainContainer>
      <Music cpf={cpf} em_dia={em_dia} />
    </MainContainer>
  )
}
