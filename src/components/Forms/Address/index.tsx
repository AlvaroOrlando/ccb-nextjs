import { useEffect, useState, ChangeEvent, useCallback } from "react";

import { FormSelect } from "react-bootstrap"

import Button from "@/components/Global/Button";
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import Label from "@/components/Global/Label";
import Container from "@/components/Containers/Container";
import ValidationMessage from "@/components/Global/ValidationMessage";
import { ClipLoader } from "react-spinners";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { 
  addressValidationSchema,
  cityValidationSchema,
  neighborhoodValidationSchema,
  stateValidationSchema,
  numberValidationSchema,
  cepValidationSchema
  
} from "@/utilities/formSchemas/formValidation";
import Link from "next/link";
import ButtonContainer from "@/components/Containers/ButtonContainer";

const formSchema = z.object({
  cep: cepValidationSchema,
  rua: addressValidationSchema,
  numero: numberValidationSchema,
  cidade: cityValidationSchema,
  bairro: neighborhoodValidationSchema,
  uf: stateValidationSchema,
});

interface AddressDataTypes {
  rua:string,
  bairro: string,
  cep:string,
  cidade:string,  
  uf:string,
  numero:string,
}

interface EnderecoProps {
  // saveAddressData: (data: AddressDataTypes) => void;
  align?: "left" | "center" | "right"
  size?: "sm" | "md" 
  formData?: AddressDataTypes | null
  currentStep?: number
  onSubmit?: () => void
}

export default function Address({ align, size, onSubmit, formData }:EnderecoProps ) {

  const [isDataSaved, setIsDataSaved] = useState(false);

  const [isSaving, setIsSaving] = useState(false); 

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    trigger,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const saveDataToDatabase = async (data: FormData): Promise<void> => {
    return new Promise((resolve) => {
      // Simulação de  chamada assíncrona ao backend para salvar os dados
      setTimeout(() => {
        console.log("Dados salvos no banco de dados:", data);
        resolve();
      }, 2000); // Simula um atraso de 2 segundos 
    });
  };

  const handleForm = async (data: FormData) => {
    setIsSaving(true);
  
    try {
      setIsSaving(true);
      await saveDataToDatabase(data);
      setUsers([{ ...data }]);
      setDataLoaded(true);
      if (onSubmit) {
        onSubmit();
      }
      // saveAddressData(data)
      setIsDataSaved(true); 
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    } finally {
      setIsSaving(false);
    }
  };
  

  const [estados, setEstados] = useState<{ nome: string; sigla: string; }[]>([]);
  const [ufPadrao, setUFPadrao] = useState('');

  useEffect(() => {
    import('@/utilities/estados.json').then((data: { UF: { nome: string; sigla: string; }[] }) => {
      setEstados(data.UF);
    });
    console.log(errors);
  }, [errors]);

  const [users, setUsers] = useState<AddressDataTypes[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  async function checkCEP(e: ChangeEvent<HTMLInputElement>) {
  try {
    // Trigger na validação do campo cep de forma síncrona
    const cepValidationResult = trigger('cep');

    // Aguardar a conclusão da validação do campo cep
    await cepValidationResult;

    // Verificar se há erros no campo cep
    if (Object.keys(errors).includes('cep')) {
      throw new Error('Erro de validação no CEP');
    }

    const cep = e.target.value.replace(/\D/g, '');
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setValue("rua", data.logradouro);
      setValue("cidade", data.localidade);

      const estadoCorrespondente = estados.find(estado => estado.sigla === data.uf);
      
      if (estadoCorrespondente) {
        setUFPadrao(estadoCorrespondente.sigla);
        setValue("uf", data.uf);
      } 

      setValue("bairro", data.bairro);
      setFocus("numero");
    } else {
      console.error(`Erro ao consultar CEP: ${response.statusText}`);
      // Limpar os campos e definir um erro no campo cep
      setValue("rua", "");
      setValue("cidade", "");
      setValue("bairro", "");
      setValue("uf", "");
      setValue("numero", "");
    }
  } catch (error) {
    console.error("Erro na requisição CEP:", error);
    // Limpar os campos e definir um erro no campo cep
    setValue("rua", "");
    setValue("cidade", "");
    setValue("bairro", "");
    setValue("uf", "");
    setValue("numero", "");
  }
  }
  
  const [valorSelecionado, setValorSelecionado] = useState('0');
  
  useEffect(() => {
    setValorSelecionado(ufPadrao !== '0' ? ufPadrao : '0');
    console.log(`UF: ${formData?.uf}`);
  }, [ufPadrao,formData?.uf]);

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="w-100">
          <Container>
              <InputGroup 
                {...register('cep')}
                customClasses={errors.cep ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                content="CEP:" 
                id="cep" 
                defaultValue={formData && formData?.cep ? formData.cep : ""} 
                onBlur={checkCEP} 
              />
              <div className="d-flex flex-column">
                {errors.cep ? (
                  <ValidationMessage value={errors.cep.message} isValid={false} />
                )
                  : isSubmitted ?
                (
                  <ValidationMessage isValid /> 
                ): null}

                <small>
                  <Link href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">
                    Consulte seu CEP
                  </Link>
                </small>
              </div>

              <div>
                <Label className="mt-3 text-secondary" content="Estado:" />
                <FormSelect 
                  {...register('uf', {
                    setValueAs: (value) => value, 
                  })}
                  value={valorSelecionado || "0"}
                  onChange={(e) => {
                    setValorSelecionado(e.target.value);
                    setValue('uf', e.target.value, { shouldValidate: true }); // Define o valor e aciona a validação
                  }}
                  defaultValue={formData && formData?.uf ? formData.uf : ""} 
                >
                  <option disabled value={0}>
                    Selecione
                  </option>
                  {estados.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla} >
                      {estado.nome} - {estado.sigla}
                    </option>
                  ))}
                </FormSelect>
              </div>

              {errors.uf ? (
                <ValidationMessage value={errors.uf.message} isValid={false} />
              )
                : isSubmitted ?
              (
                <ValidationMessage isValid /> 
              ): null}

              <InputGroup 
                {...register('cidade')} 
                customClasses={errors.cidade ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                content="Cidade:" 
                id="cidade" 
                defaultValue={formData && formData?.cidade ? formData.cidade : ""} 
              />

              {errors.cidade ? (
                <ValidationMessage value={errors.cidade.message} isValid={false} />
              )
                : isSubmitted ?
              (
                <ValidationMessage isValid /> 
              ): null}

              <InputGroup 
                {...register('bairro')}
                customClasses={errors.bairro ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                content="Bairro:" 
                id="bairro" 
                defaultValue={formData && formData?.bairro ? formData.bairro : ""} 
              />

              {errors.bairro ? (
                <ValidationMessage value={errors.bairro.message} isValid={false} />
              )
                : isSubmitted ?
              (
                <ValidationMessage isValid /> 
              ): null}

              <InputGroup 
                {...register('rua')} 
                customClasses={errors.rua ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                content="Rua:" 
                id="rua" 
                defaultValue={formData && formData?.rua ? formData.rua : ""}  
              />

              {errors.rua ? (
                <ValidationMessage value={errors.rua.message} isValid={false} />
              )
                : isSubmitted ?
              (
                <ValidationMessage isValid /> 
              ): null}

              <InputGroup 
                {...register('numero')} 
                customClasses={errors.numero ? `is-invalid` : isSubmitted ? `is-valid` : ""}
                content="Número:" 
                id="numero" 
                defaultValue={formData && formData?.numero ? formData.numero : ""} 
              />

              {errors.numero ? (
                <ValidationMessage value={errors.numero.message} isValid={false} />
              )
                : isSubmitted ?
              (
                <ValidationMessage isValid /> 
              ): null}
          </Container>

          <ButtonContainer align={align}>
            <Button size={size} className="mt-3" type="submit" disabled={isSaving}>
              {isSaving ? (
                <ClipLoader color="#fff" loading={isSaving} size={20} />
              ) : (
                "Enviar"
              )}
            </Button>
          </ButtonContainer>
      </form>
      
    </>
  );
}


