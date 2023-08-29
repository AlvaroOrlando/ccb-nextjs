import Router from "next/router";

import { useValidateCpf } from "../../../hooks/useValidateCpf";

import Input from "@/components/Global/Input";
import styles from "./isrcForm.module.scss";
import TaxasModal from "@/components/Isrc2/TaxasModal";


export default function IsrcForm() {
  
  const { isValidated, validationMessage, handleChange, cpf} = useValidateCpf();
  
  function handleGerarIsrc() {
      if (isValidated) {
        Router.push({
          pathname: "isrc/isrc2",
          query: { cpf: cpf },
        });
    }
  }
  
  function handleCertificado() {
  if (isValidated) {
    Router.push({
      pathname: "certificado",
      query: { cpf: cpf },
    });
  }
}
  
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`${styles.IsrcFormContainer} mt-4`}
      >
        <Input
          onChange={handleChange}
          placeholder="Digite seu CPF"
          value={cpf}
          maxLength="11"
          required
          className={validationMessage && `border-danger formControlDanger`}
        />
        {validationMessage &&
          <small className="text-left w-100 text-danger">
            {validationMessage}
          </small>
        }
        
        {/* Botões */}
        <div className={`mt-3 ${styles.IsrcButtonContainer}`}>
          <button
            type="button"
            onClick={handleGerarIsrc}
            disabled={!isValidated}
            className={!isValidated ? `forbidden btn btn-primary text-white` : `btn btn-primary text-white`}
          >GERAR ISRC</button>

          <button
            type="button"
            onClick={handleCertificado}
            disabled={!isValidated}
            className={!isValidated ? `forbidden btn btn-primary text-white` : `btn btn-primary text-white`}
          >Certificado</button>
        </div>
      </form>
      <hr />

      {/* Taxas */}
      <div className={styles.Taxas}>
        <section>
        <TaxasModal content="Taxa de emissao"/>
          <button type="button" className="text-center">
            Mod Certificado
          </button>
        </section>
      </div>
    </>
  );
}
