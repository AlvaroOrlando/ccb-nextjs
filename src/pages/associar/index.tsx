import Crumb from "@/components/Crumb";
import MainContainer from "@/components/Containers/MainContainer";
import { AssociarCarousel } from "@/components/AssociarCarousel";
import AssociarForm from "./AssociarForm";
import AssociarText from "./AssociarText";

export default function Associar(){
    
     function handleSubmit(){
        console.log("Hello");
     }

    return (
        <>
            <Crumb />
            <MainContainer>

               <AssociarCarousel />
                
               <AssociarForm />

               <AssociarText />

            </MainContainer>
        </>
    )
}