import { SvContentContainer } from "./Containers/SvContentContainer";
import { SvDescriptionContainer } from "./Containers/SvDescriptionContainer";
import { SvRightContainer } from "./Containers/SvRightContainer";
import { SvSessionContainer } from "./Containers/SvSessionContainer";

export function Carteira(){
    return (
      <SvSessionContainer>
          <SvContentContainer>

            <SvDescriptionContainer 
              title='Informações pessoais'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel impedit velit at corrupti modi sequi perspiciatis molestias, atque ipsam rem dolore eaque sapiente a id omnis! Excepturi, vero hic!'
            />

            <SvRightContainer>
              <h2>Conteúdo Carteira</h2>
            </SvRightContainer>
            
          </SvContentContainer>
       </SvSessionContainer>
    )
}