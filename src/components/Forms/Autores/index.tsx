// React/Next
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// Libs
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Containers
import Container from "@/components/Containers/Container";
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import Label from "@/components/Global/Label";
import ButtonContainer from "@/components/Containers/ButtonContainer";
import Button from "@/components/Global/Button";
import ValidationMessage from "@/components/Global/ValidationMessage";
import BaseContainer from "@/components/Containers/BaseContainer";

// Validation
import { nameValidationSchema, cpfValidationSchema } from '@/utilities/form/formValidation'

type MusicDataTypes = {
  musicas: {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    id?:string
  }[],
  termos:boolean,
  qtdMusicas: number
};

type AutorDataTypes = {
  autores: {
    nomeAutor: string;
    cpfAutor: string;
  }[];
  qtdAutores: number
};

type MusicDataWithAutores = {
  musicas: {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    autores: {
      nomeAutor: string;
      cpfAutor: string;
    }[];
  }[];
  termos:boolean,
  qtdMusicas: number
};

interface AutoresProps {
  align?: "left" | "center" | "right"
  size?: "sm" | "md" 
  onSubmit?: (data: MusicDataWithAutores) => void;  // Alteração feita aqui
  formData?: AutorDataTypes | null
  musicData: MusicDataTypes
}



const formSchema = z.object({
  autores: z.array(
    z.object({
        nomeAutor: nameValidationSchema,
        cpfAutor: cpfValidationSchema,
    })
  ),
});

export default function Autor({ align, size, onSubmit, formData, musicData }:AutoresProps) {

  const router = useRouter();

  const [isDataSaved, setIsDataSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selectValue, setSelectValue] = useState(1);
  
  const list = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
    getValues,
    reset,
  } = useForm<AutorDataTypes>({
    resolver: zodResolver(formSchema),
  });

  const handleChangeSelect = function (e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    setSelectValue(value);
    createAutoresFields(value);
    if (isSubmitted) {
      reset();
    }
  };

  const createAutoresFields = useCallback((value: number) => {
    const currentAutoresFields = getValues().autores || [];
  
    const autoresFields = Array.from({ length: value }, (_, index) => {
      const existingAutor = currentAutoresFields[index] || {};
      return {
        nomeAutor: existingAutor.nomeAutor || '',
        cpfAutor: existingAutor.cpfAutor || '',
      };
    });
  
    setValue('autores', autoresFields);
  }, [getValues, setValue]);

  
 
  const handleForm = async (data: AutorDataTypes) => {
    try {
      setIsSaving(true);
      await saveDataToDatabase(data.autores);
  
      setIsDataSaved(true);
  
      if (onSubmit) {
        const musicDataWithAutores: MusicDataWithAutores = {
          ...musicData,
          musicas: musicData.musicas.map((musica, index) => {
            const startIndex = index * data.autores.length;
            const endIndex = startIndex + data.autores.length;
            const autores = data.autores.slice(startIndex, endIndex);
  
            return {
              ...musica,
              autores: autores.map((autor) => ({
                nomeAutor: autor.nomeAutor,
                cpfAutor: autor.cpfAutor,
              })),
            };
          }),
        };
        onSubmit(musicDataWithAutores);
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    } finally {
      setIsSaving(false);
    }
  };


  const saveDataToDatabase = async (data: AutorDataTypes['autores']): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Dados salvos no banco de dados:", data);
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    if (formData && formData.qtdAutores) {
      setSelectValue(formData.qtdAutores);
      createAutoresFields(formData.qtdAutores);

      // Iterar sobre os campos e definir os valores correspondentes
      for (let index = 0; index < formData.qtdAutores; index++) {
        const autor = formData.autores[index];
        if (autor) {
          setValue(`autores.${index}.nomeAutor`, autor.nomeAutor);
          setValue(`autores.${index}.cpfAutor`, autor.cpfAutor);
        }
      }
    }
  }, [formData, createAutoresFields, setValue, musicData]);

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <BaseContainer>
        <>
        { musicData.musicas.map((musica) => {
          return (
            <div key={musica.id}>
            <p>{musica.nomeMusica}</p>
            <Label className="text-secondary" content="Quantidade de Autores" htmlFor="qtAutores" />
            <select
              className="form-select mt-1"
              id="qtAutores"
              value={selectValue}
              onChange={handleChangeSelect}
              defaultValue={formData && formData?.qtdAutores ? formData?.qtdAutores : 1 }
            >
              {list.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            {Array.from({ length: selectValue }, (_, index) => index + 1).map((index) => (
              <Container className="mt-0" key={`autores-${index}`}>
                <InputGroup
                  {...register(`autores.${index - 1}.nomeAutor` as const)}
                  customClasses={`${
                    (isSubmitted && !errors.autores?.[index - 1]?.nomeAutor)
                      ? "is-valid"
                      : errors.autores && errors.autores[index - 1]?.nomeAutor
                      ? "is-invalid"
                      : ""
                  }`}
                  
                  type="text"
                  content={`Nome do Autor ${index}`}
                  name={`autores.${index - 1}.nomeAutor`}
                />
                
                {errors.autores && errors.autores[index - 1]?.nomeAutor ? (
                  <ValidationMessage value={errors.autores[index - 1]?.nomeAutor?.message} isValid={false} />
                ) : isSubmitted ? (
                  <ValidationMessage isValid />
                ) : null}

                <InputGroup
                  {...register(`autores.${index - 1}.cpfAutor` as const)}
                  customClasses={`${
                    (isSubmitted && !errors.autores?.[index - 1]?.cpfAutor)
                      ? "is-valid"
                      : errors.autores && errors.autores[index - 1]?.cpfAutor
                      ? "is-invalid"
                      : ""
                  }`}
                  content={`CPF do Autor ${index}`}
                  name={`autores.${index - 1}.cpfAutor`}
                />
                
                {errors.autores && errors.autores[index - 1]?.cpfAutor ? (
                  <ValidationMessage value={errors.autores[index - 1]?.cpfAutor?.message} isValid={false} />
                ) : isSubmitted ? (
                  <ValidationMessage isValid />
                ) : null}
                
              </Container>
            ))}
            </div>
          )
        })}
        </>
            
        
            {!isDataSaved && 
              <ButtonContainer align={align}>
                <Button size={size} className="mt-3" type="submit" disabled={isSaving}>
                  {isSaving ? (
                    <ClipLoader color="#fff" loading={isSaving} size={20} />
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </ButtonContainer>
            }

          </BaseContainer>
      </form>
    </Container>
  );
}
