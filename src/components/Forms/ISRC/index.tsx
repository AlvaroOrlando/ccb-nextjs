
import { IsrcFormContainer, Taxas } from "./styles";

import Button from "../../../components/Global/Button"
import Input from "@/components/Global/Input";
import Linha from "@/components/Global/Linha/Linha";


export default function IsrcForm(){
    return(
        <>
          <IsrcFormContainer>
            <section className="w-100 mt-4">
              <Input placeholder="Digite seu CPF" />

              <section className="mt-3">
                <Button type="button" variant="primary" value="GERAR ISRC" />
                <Button variant="primary" type="button"  value="CERTIFICADO" />
              </section>
            </section>
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