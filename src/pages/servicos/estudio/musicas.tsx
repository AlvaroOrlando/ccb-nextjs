// React/Next
import { useRouter } from "next/router";

// Components
import MainContainer from "@/components/Containers/MainContainer";
import EstudioMusic from "@/components/Forms/Estudio";

// Utilities
import { calculaPrecoEstudio } from "@/utilities/pricing/pricing";

// Interfaces/Types
type Medalha = "2" | "3" | "4" | "5" | "6";

// Page
export default function Musicas() {

  const router = useRouter()

    const { cpf, servico } = router.query

    const cpfString = Array.isArray(cpf) ? cpf.join(',') : cpf || '';
    const servicoString = Array.isArray(servico) ? servico.join(',') : servico || '';

  // Virá do Banco de Dados
  const em_dia: "s" | "n" = "n";
  const medalha = "2"
 
  return (
    <MainContainer>
      <EstudioMusic 
        page = "estudio" 
        medalha={medalha} 
        servico={servicoString} 
        cpf={cpfString} 
        em_dia={em_dia} 
      />
    </MainContainer>
  );
}
