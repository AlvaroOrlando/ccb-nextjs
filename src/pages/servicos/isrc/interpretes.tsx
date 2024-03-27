import MainContainer from "@/components/Containers/MainContainer";
import Interprete from "@/components/Forms/Interpretes";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Interpretes(){

    const router = useRouter()
    const { cpf, musicDataWithAutores } = router.query

    useEffect(() => {
      if (musicDataWithAutores) {
        const parsedData = JSON.parse(String(musicDataWithAutores));
        console.log("Parsed data:", parsedData);
      }
    }, [musicDataWithAutores]);
  

  function handleRedirect(){
      router.push({
        pathname: "/servicos/pagamentoUnificado",
      });
  };

  return (
    <MainContainer>
      <Interprete onSubmit={handleRedirect} />
    </MainContainer>
  )
}