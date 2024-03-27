import MainContainer from "@/components/Containers/MainContainer";
import Address from "@/components/Forms/Address";
import { useRouter } from "next/router";

export default function Endereco(){

    const router = useRouter()

    const { cpf, servico } = router.query

  function handleRedirect(){
      router.push({
        pathname: "./musicas",
        query: { cpf, servico }
      });
  };

  return (
    <MainContainer>
      <Address onSubmit={handleRedirect} />
    </MainContainer>
  )
}