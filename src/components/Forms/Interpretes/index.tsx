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
import Button from "@/components/Global/Button";
import ValidationMessage from "@/components/Global/ValidationMessage";
import BaseContainer from "@/components/Containers/BaseContainer";

// Validation
import { nameValidationSchema, cpfValidationSchema } from '@/utilities/formSchemas/formValidation'
import ButtonContainer from "@/components/Containers/ButtonContainer";

type InterpretesDataType = {
  interpretes: {
    nomeInterprete: string;
    cpfInterprete: string;
  }[];
  qtdInterpretes: number
};

interface InterpretesProps {
  // onSubmit: (data: InterpretesDataType['interpretes']) => void;
  onSubmit?: () => void;
  align?: "left" | "center" | "right"
  size?: "sm" | "md" 
  // saveInterpretesData: (data: InterpretesDataType) => void;
  formData?: InterpretesDataType | null

}

const formSchema = z.object({
  interpretes: z.array(
    z.object({
        nomeInterprete: nameValidationSchema,
        cpfInterprete: cpfValidationSchema,
    })
  ),
});

export default function Interprete({ align, size, /*saveInterpretesData,*/onSubmit, formData }:InterpretesProps) {

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
  } = useForm<InterpretesDataType>({
    resolver: zodResolver(formSchema),
  });


  const handleChangeSelect = function (e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    setSelectValue(value);
    createInterpretesFields(value);
    if (isSubmitted) {
      reset();
    }
  };

  const createInterpretesFields = useCallback(
    (value: number) => {
      const currentInterpretesFields = getValues().interpretes || [];

      const interpretesFields = Array.from({ length: value }, (_, index) => {
        const existingInterprete = currentInterpretesFields[index] || {};
        return {
          nomeInterprete: existingInterprete.nomeInterprete || '',
          cpfInterprete: existingInterprete.cpfInterprete || '',
        };
      });

      setValue('interpretes', interpretesFields);
    },
    [getValues, setValue]
  );
  
  const handleForm = async (data: InterpretesDataType) => {
  
    try {
      setIsSaving(true);
      await saveDataToDatabase(data.interpretes);
      // onSubmit(data.interpretes);
      if(onSubmit){
        onSubmit()
      }
      setIsDataSaved(true);
      // saveInterpretesData({
      //   ...data,
      //   qtdInterpretes: data.interpretes.length,
      // });
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    } finally {
      setIsSaving(false);
    }
  };
  
  const saveDataToDatabase = async (data: InterpretesDataType['interpretes']): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Dados salvos no banco de dados:", data);
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    console.log(formData);
  
    if (formData) {
      // Preencha a quantidade de músicas
      if (formData.qtdInterpretes) {
        setSelectValue(formData.qtdInterpretes);
        createInterpretesFields(formData.qtdInterpretes);
      }
  
      // Preencha os dados de cada música individualmente
      if (formData.interpretes && formData.interpretes.length > 0) {
        formData.interpretes.forEach((interprete, index) => {
          const interpreteFieldName = `interpretes.${index}.nomeInterprete` as const;
          const interpreteCpfField = `interpretes.${index}.cpfInterprete` as const;
  
          setValue(interpreteFieldName, interprete.nomeInterprete);
          setValue(interpreteCpfField, interprete.cpfInterprete);
        });
      }
    }
  }, [formData, setValue, createInterpretesFields]);

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
          <BaseContainer>
            <Label className="text-secondary" content="Quantidade de intérpretes" htmlFor="qtInterpretes" />
            <select
              className="form-select mt-1"
              id="qtInterpretes"
              value={selectValue}
              onChange={handleChangeSelect}
            >
              {list.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            {Array.from({ length: selectValue }, (_, index) => index + 1).map((index) => (
              <Container className="mt-0" key={`interpretes-${index}`}>
                <InputGroup
                  {...register(`interpretes.${index - 1}.nomeInterprete` as const)}
                  customClasses={`${
                    (isSubmitted && !errors.interpretes?.[index - 1]?.nomeInterprete)
                      ? "is-valid"
                      : errors.interpretes && errors.interpretes[index - 1]?.nomeInterprete
                      ? "is-invalid"
                      : ""
                  }`}
                  content={`Cantor/Intérprete ${index}`}
                  name={`interpretes.${index - 1}.nomeInterprete`}
                />
                
                {errors.interpretes && errors.interpretes[index - 1]?.nomeInterprete ? (
                  <ValidationMessage value={errors.interpretes[index - 1]?.nomeInterprete?.message} isValid={false} />
                ) : isSubmitted ? (
                  <ValidationMessage isValid />
                ) : null}

                <InputGroup
                  {...register(`interpretes.${index - 1}.cpfInterprete` as const)}
                  customClasses={`${
                    (isSubmitted && !errors.interpretes?.[index - 1]?.cpfInterprete)
                      ? "is-valid"
                      : errors.interpretes && errors.interpretes[index - 1]?.cpfInterprete
                      ? "is-invalid"
                      : ""
                  }`}
                  content={`CPF`}
                  name={`interpretes.${index - 1}.cpfInterprete`}
                />
                
                {errors.interpretes && errors.interpretes[index - 1]?.cpfInterprete ? (
                  <ValidationMessage value={errors.interpretes[index - 1]?.cpfInterprete?.message} isValid={false} />
                ) : isSubmitted ? (
                  <ValidationMessage isValid />
                ) : null}
                
              </Container>
            ))}

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
