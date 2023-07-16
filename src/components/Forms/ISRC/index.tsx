
import { IsrcButtonContainer, IsrcFormContainer, Taxas } from "./styles";

import Button from "../../../components/Global/Button"
import Input from "@/components/Global/Input";
import Linha from "@/components/Global/Linha/Linha";


export default function IsrcForm(){
    return(
        <>
          <IsrcFormContainer className="mt-4">
              <Input placeholder="Digite seu CPF" />

              <IsrcButtonContainer className="mt-3">
                <Button type="button" variant="primary" value="GERAR ISRC" />
                <Button variant="primary" type="button"  value="CERTIFICADO" />
              </IsrcButtonContainer>
          </IsrcFormContainer>

          <Linha />     

          <Taxas className="w-100">
            <section>
              <a className="text-center">Taxa de emissão</a>
              <a className="text-center">Mod Certificado</a>
            </section>
          </Taxas>
        </>
    )
}