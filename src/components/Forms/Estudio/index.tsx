
// React/Next
import { useState } from "react";

// Libs
import { ClipLoader } from "react-spinners";
import { Plus, Trash } from 'phosphor-react'
import { FormSelect } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import Container from "@/components/Containers/Container";
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import Label from "@/components/Global/Label";
import Button from "@/components/Global/Button";
import ValidationMessage from "@/components/Global/ValidationMessage";

//Utilities
import MusicOptions from "@/utilities/musicOptions";
import { processEstudioMusicData } from '@/utilities/musicMap'
import { estudioFormSchema } from "@/utilities/formSchemas/schemas";
import { calculaPrecoEstudio } from "@/utilities/pricing/pricing";

type Medalha = "2" | "3" | "4" | "5" | "6";

interface MusicProps {
  cpf: string
  em_dia: string
  servico: string
  medalha: Medalha
}

interface EstudioMusicaProps {
  nomeMusica: string;
  estiloMusica: string;
  tipoServico: string;
}

type FormTypeCreateEstudioPedido = z.infer<typeof estudioFormSchema>;

const pedidoId = uuidv4();

export default function EstudioMusic({ cpf, em_dia, servico, medalha }:MusicProps) {

  const [isSaving, setIsSaving] = useState(false);

  const [estudioFormData, setEstudioFormData] = useState<FormTypeCreateEstudioPedido>({
    musicas: [
      {
        nomeMusica: "",
        estiloMusica: "1",
        tipoServico: "",
      },
    ],
    pago: "n",
    finalizado: "n",
    cpf:cpf,
    id:"",
    valor: 0,
    data: new Date(),
    em_dia: ""
  });
  
  const [estudioOutput, setEstudioOutput] = useState<FormTypeCreateEstudioPedido>(
    {
      musicas: [
        {
          nomeMusica: "",
          estiloMusica: "",
          tipoServico: "",
        },
      ],
      pago: "n",
      finalizado: "n",
      cpf:"",
      id:"",
      valor: 0,
      data: new Date(),
      em_dia: ""
    }
  );
  
  const handleForm = (estudioFormData:FormTypeCreateEstudioPedido) => {
    
    const quantidadeMusicasEstudio = estudioFormData.musicas.length;
  
      try {
        const precoTotal = calculaPrecoEstudio(estudioFormData, servico, em_dia, medalha);
      } catch (error) {
        console.error('Erro ao calcular o preço:', error);
      }

    //   isrcFormData.musicas.forEach((musica: EstudioMusicaProps) => {
    //     musica.tipoServico = "3";
    //   });

    processEstudioMusicData(estudioFormData.musicas);

    estudioFormData.cpf = cpf
    estudioFormData.em_dia = em_dia
    estudioFormData.id = pedidoId
    
    // setEstudioOutput(estudioFormData)
  
    console.log('Dados do formulário estúdio:', estudioFormData);
  };

  const estudioFormValues = {
    musicas: [
      {
        nomeMusica: "",
        estiloMusica: "1",
        tipoServico: "",
      },
    ],
    id: "",
    data: new Date(),
    valor: 0,
    pago: "n",
    finalizado: "n",
    cpf:"",
    em_dia: ""
  };

  const { handleSubmit, register, control, formState:{ isSubmitted, errors } } = useForm<FormTypeCreateEstudioPedido>({
    defaultValues:estudioFormValues,
    resolver: zodResolver(estudioFormSchema)
  });
  
  const { append, fields, remove } = useFieldArray({
    name: 'musicas', 
    control,
  });

  const handleAddMusic = () => {
    append({
      nomeMusica: "",
      estiloMusica: "",
      tipoServico: "",
    });
  };

  const handleRemoveMusic = (index: number) => {
    remove(index);
  };

  return (
    <Container>
     <form onSubmit={handleSubmit(handleForm)}>
        <div>
          {fields.map((musicas, index) => {
            return (  
              <div style={{backgroundColor:'white', padding:'1rem'}} key={musicas.id}>
                <div className="mt-3">

                  {/* Nome Música */}
                  <InputGroup
                    content={`Nome da música ${index + 1}`}
                    {...register(`musicas.${index}.nomeMusica`)}
                    id={`nomeMusica.${index}`}
                    customClasses={`${
                      (
                        errors?.musicas && errors?.musicas[index]?.nomeMusica
                        ? "is-invalid"
                        : ""
                    )}`}
                  />
                  {errors.musicas?.[index]?.nomeMusica ? (
                    <ValidationMessage value={errors.musicas[index]?.nomeMusica?.message} isValid ={false} />
                    ) : null
                  }
                  
                  {/* Estilo Música */}
                  <div className="mt-2">
                    <Label className="text-secondary" htmlFor={`estiloMusica-${index}`} content="Ritmo/Estilo da Música" />
                    <FormSelect
                      {...register(`musicas.${index}.estiloMusica`)}
                      id={`estiloMusica-${index}`}
                    >
                      <MusicOptions />
                    </FormSelect>
                  </div>

               
                    <>
                      <Label className="text-secondary fw-bold" htmlFor={`tipoServico-${index}`} content="Tipo de Serviço" />
                      <FormSelect
                          {...register(`musicas.${index}.tipoServico`)}
                          className="mt-1"
                          id={`tipoServico-${index}`}
                      >
                          <option value="1">Gravar guia voz e violão</option>
                          <option value="2">Gravação completa com arranjo</option>
                      </FormSelect>
                    </>
                </div>

                {/* Add Música */}
                <div>
                  {fields.length >= 2 &&(
                  <Button 
                    className="mt-3"
                    type="button"
                    onClick={() => handleRemoveMusic(index)}
                    variant="close"
                    size="sm"
                  >
                    <Trash />
                    Música {`${index + 1}`}
                  </Button>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Add Música */}
          {fields.length <= 3 && (
            <Button size="sm" variant="success"  type="button"  onClick={handleAddMusic} className="mt-3">
              <Plus />
              <span>
                  Música
              </span>
            </Button>
          )}
        </div>

        <Button className="mt-3" style={{margin:'0 auto'}} type="submit" disabled={isSaving}>
            {isSaving ? 
            <ClipLoader color="#fff" loading={isSaving} size={20} /> 
            : "Enviar"}
        </Button>
      </form>
    </Container>
  );
}
