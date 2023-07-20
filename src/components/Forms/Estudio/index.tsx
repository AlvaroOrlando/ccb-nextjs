import Input from "@/components/Global/Input";
import Button from "@/components/Global/Button";

import styles from "./estudioForm.module.scss"

  export default function EstudioForm(){
    return (
        <form className={styles.EstudioFormContainer}>
            <section className="w-100 mt-4">
                <Input placeholder="Digite seu CPF" />
                <section className="mt-3">
                    <Button type="button" variant="primary" value="Gravar" />
                    <Button type="button" variant="primary" value="Acompanhar" />
                </section>
            </section>
        </form>
    )
  }       
         
         