import Painel from "@/components/Painel";
import EstudioForm from "./estudioForm";

export default function PainelSectionContainer(){
    return (
        <div className="PainelSectionContainer">
            <Painel variant="yellow" content="Contrate ou acompanhe agora mesmo!"/>

            <div className="PainelSection">
                <p>
                 Para contratar gravações, entre com CPF e clique em GRAVAR. Se já contratou e quer enviar a amostra da sua música ou acompanhar o andamento dos serviços, entre com CPF e clique em ACOMPANHAR.
                </p>
                
                <EstudioForm />

            </div>
        </div>
    )
}