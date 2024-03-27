import MainContainer from "@/components/Containers/MainContainer";
import DadosPessoais from "@/components/Forms/DadosPessoais";
import { useRouter } from "next/router";

export default function Dados(){

  const router = useRouter()
  const cpf = router.query

  function handleRedirect(){
      router.push({
        pathname: "./endereco",
        query:cpf
      });
  };

  return (
    <MainContainer>
      <DadosPessoais onSubmit={handleRedirect} />
    </MainContainer>
  )
}