// React/Next
import { MouseEvent } from "react";

// Components
import Input from "@/components/Global/Input/input";

// Hooks
import { useValidateCpf } from "@/hooks/useValidateCpf";

// Styles
import styles from "@/styles/estudioForm.module.scss"
import { useRouter } from "next/router";

import { EstudioProps } from "../Estudio"
import { cpfValidationSchema } from "@/utilities/formSchemas/formValidation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidationMessage from "@/components/Global/ValidationMessage";
import Button from "@/components/Global/Button";

const formSchema = z.object({
    cpf: cpfValidationSchema,
  });

export default function EstudioForm({ servico }:EstudioProps){

    type FormData = z.infer<typeof formSchema>

    const { register, 
      handleSubmit, 
      formState: { errors, isValid },
      watch
    } = useForm<FormData>({
      resolver: zodResolver(formSchema)
    })

    const isFormInvalid = Object.keys(errors).length > 0;

    const router = useRouter()

    function handleAcompanhar(){
        console.log("Acompanhar");
    }

    const handleRedirect = (pathname: string, data: FormData) => {
        if (isValid) {
          router.push({
            pathname: pathname,
            query: { 
              cpf: data.cpf,
              servico
            },
          });
        }
      };

    const handleForm = (data: FormData) => {
        handleRedirect("./estudio/dados", data)
    }

    return (
        <form onSubmit={(e) => handleSubmit(handleForm)(e)}
        className={styles.EstudioFormContainer}>
            <section className="w-100 mt-4">
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

                <section className="mt-3">
                <Button
                    value="Gravar"
                    type="submit"
                    disabled={isFormInvalid}
                />
                <Button
                    value="Acompanhar"
                    type="button"
                    disabled={isFormInvalid}
                    onClick={handleAcompanhar}
                />
                </section>
            </section>
        </form>
    )
  }       
         
         