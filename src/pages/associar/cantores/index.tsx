import Crumb from "@/components/Crumb";
import MainContainer from "@/components/MainContainer";
import AssociarText from "../AssociarText"
import { AssociarCarousel } from "@/components/AssociarCarousel";
import AssociarForm from "../AssociarForm";

export default function AssociarCompositores(){

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