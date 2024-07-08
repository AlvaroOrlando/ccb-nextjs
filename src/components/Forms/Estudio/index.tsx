// React/Next
import { useState } from "react";

// Libs
import { ClipLoader } from "react-spinners";
import { Plus, Trash } from 'phosphor-react'
import { FormSelect } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { useFieldArray, useForm } from "react-hook-form";

// Components
import Container from "@/components/Containers/Container";
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import Label from "@/components/Global/Label";
import Button from "@/components/Global/Button";
import ValidationMessage from "@/components/Global/ValidationMessage";

//Utilities
import MusicOptions from "@/utilities/musicOptions";
import { processEstudioMusicData } from '@/utilities/musicMap'
import { estudioFormSchema } from "@/utilities/form/schemas";
import { calcularPrecoEstudioPorMusica, calcularPrecoTotalEstudioMusicas } from "@/utilities/pricing/pricing";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTypeEstudioData, EstudioMusicProps } from '@/utilities/interfaces'

const pedidoId = uuidv4();

export default function EstudioMusic({ cpf, em_dia, servico, medalha }:EstudioMusicProps) {

  const estudioMusicaValues = {
    nomeMusica: "",
    estiloMusica: "",
    tipoServico: "",
    medalha,
    valor: 0,
    servico,
  }

  const [isSaving, setIsSaving] = useState(false);
  
  const estudioPedidoDefaultValues = {
    musicas: [
      estudioMusicaValues
    ],
    id: "",
    data: new Date(),
    valor: 0,
    pago: "n",
    finalizado: "n",
    cpf:"",
    em_dia: "",
    page:""
  }

  const [estudioFormData, setEstudioFormData] = useState<FormTypeEstudioData>(estudioPedidoDefaultValues);

  const handleForm = (data:FormTypeEstudioData) => {
    
    calcularPrecoEstudioPorMusica(data, em_dia, servico, medalha);

    const valorTotal = calcularPrecoTotalEstudioMusicas(data, servico, em_dia, medalha);

    processEstudioMusicData(data.musicas);

    data.cpf = cpf
    data.em_dia = em_dia
    data.id = pedidoId
    data.valor = valorTotal
    data.musicas.forEach(musica =>{
    musica.servico = servico
    })

    setEstudioFormData(data)
    
    console.log('Dados do formulário estúdio:', data);
  };

  const { handleSubmit, register, control, formState:{ errors } } = useForm<FormTypeEstudioData>({
    defaultValues: estudioPedidoDefaultValues,
    resolver: zodResolver(estudioFormSchema)
  });
  
  const { append, fields, remove } = useFieldArray({
    name: 'musicas', 
    control,
  });

  const handleAddMusic = () => {
    append(estudioMusicaValues);
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
