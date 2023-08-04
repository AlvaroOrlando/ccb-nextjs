
import Button from "../../../components/Global/Button"
import Input from "@/components/Global/Input";
import styles from "./isrcForm.module.scss"
import React, { ChangeEvent, FormEvent, useState } from "react";
import Router from "next/router";

export default function IsrcForm(){

const [cpf, setCpf] = useState('')



  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    Router.push({
      pathname: 'isrc/isrc2', 
      query: {cpf: cpf}
    })
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    const cpf = e.target.value
    setCpf(cpf)
  }

    return(
        <>
          <form
            onSubmit={handleSubmit}
            className={`${styles.IsrcFormContainer } mt-4`}>
              <Input 
                onChange={handleChange}
                placeholder="Digite seu CPF" 
                value={cpf}
                />

              <div className={`mt-3 ${styles.IsrcButtonContainer}`}>
                <Button type="button" variant="primary" value="GERAR ISRC" />
                <Button variant="primary" type="button"  value="CERTIFICADO" />
              </div>
          </form>
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