// React/Next
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

// External Libs
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

// Components
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import BaseContainer from "@/components/Containers/BaseContainer";
import ChangeAvatar from "@/components/Global/ChangeAvatar";
import ButtonContainer from "@/components/Containers/ButtonContainer";
import Container from "@/components/Containers/Container";
import ValidationMessage from "@/components/Global/ValidationMessage";
import Button from "@/components/Global/Button";

// Validation Schemas
import { 
  nameValidationSchema, 
  nartValidationSchema, 
  emailValidationSchema, 
  phoneValidationSchema, 
  birthdayValidationSchema 
} from '@/utilities/form/formValidation'

const formSchema = z.object({
  nome: nameValidationSchema,
  // cpf: cpfValidationSchema,
  nart: nartValidationSchema,
  email: emailValidationSchema,
  telefone: phoneValidationSchema,
  nascimento: birthdayValidationSchema
});

interface DadosPessoaisDataTypes {
  nome: string;
  nart: string;
  email: string;
  telefone: string;
  nascimento: string;
}

interface DadosPessoaisProps {
  // onSubmit?: (data: DadosPessoaisDataTypes) => void;
  onSubmit?: () => void;
  avatar?:ReactNode
  align?: "left" | "center" | "right"
  size?: "sm" | "md" 
  formData?: DadosPessoaisDataTypes | null
  handleNextStep?: () => void;
}

export default function DadosPessoais({
  avatar,
  align,
  size,
  formData,
  onSubmit,
  handleNextStep,
  
}: DadosPessoaisProps) {

  const [isDataSaved, setIsDataSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false); 

  const router = useRouter()

  
  const { cpf } = router.query

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const saveDataToDatabase = async (data: FormData): Promise<void> => {
    return new Promise((resolve) => {
      // Simula uma chamada assíncrona ao backend para salvar os dados
      setTimeout(() => {
        console.log("Dados salvos no banco de dados:", data);
        resolve(); // Resolve a Promise quando os dados são salvos
      }, 2000); // Simula um atraso de 2 segundos
    });
  };
  

  const handleForm = async (data: FormData) => {
    
    try {
      setIsSaving(true);
      await saveDataToDatabase(data);
      if(onSubmit){
        onSubmit();
      }
      setIsDataSaved(true); 
      if(handleNextStep){
        handleNextStep()
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    } finally {
      setIsSaving(false);
    }
  };


  // Virá do banco de dados:
  // const avatarSrc = "https://avatars.githubusercontent.com/u/92760374?v=4"
  const avatarSrc = ""

  return (
    <BaseContainer>
        <form onSubmit={handleSubmit(handleForm)}  className="w-100">
          <Container>
            {avatar && (
              <ChangeAvatar avatarSrc={avatarSrc} />
            )}
            <Container className="mt-0">
              <InputGroup
                {...register('nome')}
                customClasses={errors.nome ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                content="Nome Completo:"
                id="userName"
                maxLength={150}
                defaultValue={formData && formData?.nome ? formData.nome : ""}
              />

                {errors.nome ? (
                  <ValidationMessage value={errors.nome.message} isValid={false} />
                )
                  : isSubmitted ?
                (
                  <ValidationMessage isValid /> 
                ): null}

                <InputGroup 
                {...register('nart')}
                  customClasses={errors.nart ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                  content="Nome Artístico (Pseudônimo):" 
                  id="nart" 
                  maxLength={150}
                  defaultValue={formData && formData?.nart ? formData.nart : ""}  
                />

                {errors.nart ? (
                  <ValidationMessage value={errors.nart.message} isValid={false} />
                )
                  : isSubmitted ?
                (
                  <ValidationMessage isValid /> 
                ): null}

                <InputGroup 
                  {...register('email')} 
                  customClasses={errors.email ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                  content="E-mail:" 
                  id="email" 
                  maxLength={255} 
                  defaultValue={formData && formData?.email ? formData.email : ""}
                />

                {errors.email ? (
                  <ValidationMessage value={errors.email.message} isValid={false} />
                )
                  : isSubmitted ?
                (
                  <ValidationMessage isValid /> 
                ): null}

                <InputGroup 
                  {...register('telefone')} 
                  customClasses={errors.telefone ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                  content="Celular com ddd (só números)" 
                  id="telefone" 
                  maxLength={18} 
                  defaultValue={formData && formData?.telefone ? formData.telefone : ""}
                />
                {errors.telefone ? (
                  <ValidationMessage value={errors.telefone.message} isValid={false} />
                )
                  : isSubmitted ?
                (
                  <ValidationMessage isValid /> 
                ): null}

                <InputGroup
                  {...register('nascimento')}
                  customClasses={ errors.nascimento ? `is-invalid`: isSubmitted ? `is-valid` : '' }
                  type="date"
                  content="Data de nascimento:"
                  id="nascimento"
                  onChange={(e) => {
                    setValue('nascimento', e.target.value, { shouldValidate: true });
                  }}
                  defaultValue={formData && formData?.nascimento ? formData.nascimento : ""}
                />
                {errors.nascimento ? (
                  <ValidationMessage value={errors.nascimento.message} isValid={false} />
                )
                  : isSubmitted ?
                (
                  <ValidationMessage isValid /> 
                ): null}

            </Container>
            {!isDataSaved && (
              <ButtonContainer align={align}>
                <Button size={size} className="mt-3" type="submit" disabled={isSaving}>
                  {isSaving ? (
                    <ClipLoader color="#fff" loading={isSaving} size={20} />
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </ButtonContainer>
            )}
           
          </Container>
        </form>
    </BaseContainer>
  );
}
