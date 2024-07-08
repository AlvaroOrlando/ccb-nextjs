// React/Next
import { useRouter } from "next/router";

// Components
import MainContainer from "@/components/Containers/MainContainer";
import EstudioMusic from "@/components/Forms/Estudio";

// Utilities
import { calculaPrecoEstudio } from "@/utilities/pricing/pricing";

// Interfaces/Types
type Medalha = "2" | "3" | "4" | "5" | "6";

// type MusicDataTypes = {
//   musicas: {
//     nomeMusica: string;
//     estiloMusica: string;
//     tipoServico: string;
//     medalha?: Medalha | "";
//   }[];
//   termos?: boolean;
//   qtdMusicas: number;
// };

// Page
export default function Musicas() {

  const router = useRouter()

    const { cpf, servico } = router.query

    const cpfString = Array.isArray(cpf) ? cpf.join(',') : cpf || '';
    const servicoString = Array.isArray(servico) ? servico.join(',') : servico || '';

  // Virá do Banco de Dados
  const em_dia: "s" | "n" = "n";
  // const medalha: Medalha | "" = "";
  const medalha = "2"
 
  // Functions
  // function handleRedirect(data: MusicDataTypes) {
    
  //   const dadosComPreco = calculaPrecoEstudio(data, servico as string, em_dia, medalha);

  //   router.push({
  //     pathname: "./confirmacao",
  //     query: { cpf, servico, dados: JSON.stringify({ ...data, musicas: dadosComPreco }) },
  //   });
  // }

 
  return (
    <MainContainer>
      <EstudioMusic page = "estudio" medalha={medalha} servico={servicoString} cpf={cpfString} em_dia={em_dia} />
    </MainContainer>
  );
}
