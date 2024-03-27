import MainContainer from "@/components/Containers/MainContainer";
import Autor from "@/components/Forms/Autores";
import { useRouter } from "next/router";

type MusicDataTypes = {
  musicas: {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
  }[],
  termos:boolean,
  qtdMusicas: number
};

type MusicDataWithAutores = {
  musicas: {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    autores: {
      nomeAutor: string;
      cpfAutor: string;
    }[];
  }[];
  termos:boolean,
  qtdMusicas: number
};


export default function Autores() {
  const router = useRouter();
  const { cpf, em_dia, medalha, servico, dados } = router.query;

  function handleRedirect(musicDataWithAutores: MusicDataWithAutores) {

    router.push({
      pathname: "./interpretes",
      query: {
        ...router.query,
        musicDataWithAutores: JSON.stringify(musicDataWithAutores),
      },
    });
  }
  const musicData: MusicDataTypes | undefined = dados ? JSON.parse(String(dados)) : undefined;

  return (
    <MainContainer>
       {musicData && <Autor musicData={musicData} onSubmit={handleRedirect} />}
    </MainContainer>
  );
}