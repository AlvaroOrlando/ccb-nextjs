import Router from "next/router";
import Input from "@/components/Global/Input/input";
import TaxasModal from "@/components/pages/Isrc/TaxasModal";
import Button from "@/components/Global/Button";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cpfValidationSchema } from "@/utilities/form/formValidation";
import { IsrcButtonContainer, IsrcFormContainer, TaxasContainer } from "./styles";
import ValidationMessage from "@/components/Global/ValidationMessage";


const formSchema = z.object({
  cpf: cpfValidationSchema,
});

export default function IsrcForm() {
  
  type FormData = z.infer<typeof formSchema>

  const { register, 
    handleSubmit, 
    formState: { errors, isValid },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const isFormInvalid = Object.keys(errors).length > 0;

  const handleRedirect = (pathname: string, data: FormData) => {
    if (isValid) {
      Router.push({
        pathname: pathname,
        query: { cpf: data.cpf},
      });
    }
  };

  const handleCertificado = () => {
    handleSubmit((data: FormData) => {
      setValue("cpf", data.cpf);
      handleRedirect("certificado", data);
    })();
  };

  const handleForm = (data: FormData) => {
    handleRedirect("isrc/dados", data);
  }

  function handleOpenCertificate(){
    Router.push({
      pathname: "isrc/modeloCertificado",
    });
  }

  return (
    <>
     <IsrcFormContainer>
        <form onSubmit={handleSubmit(handleForm)}>
          <Input
            className={errors.cpf ? `is-invalid` : isValid ? `is-valid` : ""}
            placeholder="Digite seu CPF"
            {...register('cpf')}
            maxLength={11}
          />

            {errors.cpf ? (
            <ValidationMessage value={errors.cpf.message} isValid={false} />
              ) : isValid && watch('cpf') ? (
                <ValidationMessage value="Parece Ok!" isValid />
              ) : null
            }
          
          <IsrcButtonContainer>
            <Button
              value="GERAR ISRC"
              type="submit"
              disabled={isFormInvalid} 
            />

            <Button
              value="Certificado"
              type="button"
              disabled={isFormInvalid}
              onClick={handleCertificado}
            />
          </IsrcButtonContainer>
        </form>
     </IsrcFormContainer>
      <hr />

      {/* Taxas */}
      <TaxasContainer>
        <section>
          <TaxasModal content="Taxa de emissao"/>
          <button type="button" onClick={handleOpenCertificate}>
            Mod Certificado
          </button> 
        </section>
      </TaxasContainer>
    </>
  );
}
