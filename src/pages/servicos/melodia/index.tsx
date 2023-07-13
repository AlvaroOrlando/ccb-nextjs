import Crumb from "@/components/Crumb";
import { MainContainer } from "@/styles/styles";

export default function EstudioMelodia(){
    return (
        <>
        <Crumb href="gravar/melodia" pag1="Gravar" pag2="Melodia"  />
        <MainContainer>
          <h1>Gravar Estúdio</h1>
        </MainContainer>
      </>
    )
}