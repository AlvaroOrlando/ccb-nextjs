
import { IsrcButtonContainer, IsrcFormContainer, Taxas } from "./styles";

import Button from "../../../components/Global/Button"
import Input from "@/components/Global/Input";
import styles from "./isrcForm.module.scss"


export default function IsrcForm(){
    return(
        <>
          <div className={`${styles.IsrcFormContainer } mt-4`}>
              <Input placeholder="Digite seu CPF" />

              <div className={`mt-3 ${styles.IsrcButtonContainer}`}>
                <Button type="button" variant="primary" value="GERAR ISRC" />
                <Button variant="primary" type="button"  value="CERTIFICADO" />
              </div>
          </div>
          <hr />

          <div className={styles.Taxas}>
            <section>
              <a className="text-center">Taxa de emissão</a>
              <a className="text-center">Mod Certificado</a>
            </section>
          </div>
        </>
    )
}