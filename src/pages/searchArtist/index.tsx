import { Compositor }from "@/components/Compositor";
import Crumb from "@/components/Crumb";
import MainContainer from "@/components/Containers/MainContainer";


export default function SearchArtist(){
    return (
        <>
          <Crumb />
          <MainContainer>
           
                <Compositor/>
                <Compositor/>
                <Compositor/>
                
          </MainContainer>
        </>
    )
}