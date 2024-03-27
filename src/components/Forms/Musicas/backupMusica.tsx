
// React/Next
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Libs
import { ClipLoader } from "react-spinners";
import { Plus, Trash } from 'phosphor-react'
import { FormSelect } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { useFieldArray, useForm } from "react-hook-form";
import { isDirty, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import Container from "@/components/Containers/Container";
import TermsAgreement from "@/components/Global/Terms&Agreements";
import BaseModal from "@/components/BaseModal";
import Text from "@/components/Global/Text";
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import Label from "@/components/Global/Label";
import Button from "@/components/Global/Button";
import TaxasModal from "@/components/pages/Isrc/TaxasModal";
import ValidationMessage from "@/components/Global/ValidationMessage";

//Utilities
import MusicOptions from "@/utilities/musicOptions";
import { calculaPrecoIsrc } from '@/utilities/pricing/pricing'
import { processIsrcMusicData } from '@/utilities/musicMap'
import { isrcFormSchema } from "@/utilities/formSchemas/schemas";

interface MusicProps {
  page: string
  cpf: string
  em_dia: string
}

interface IsrcMusicaProps {
  nomeMusica: string;
  estiloMusica: string;
  tipoServico: string;
  autores: Autor[];
  interpretes: Interprete[];
}

interface Autor {
  nome: string;
  cpf: string;
}

interface Interprete {
  nome: string;
  cpf: string;
}

export type FormTypeCreateIsrcPedido = z.infer<typeof isrcFormSchema>;

const pedidoId = uuidv4();

export default function Music({ page, cpf, em_dia }:MusicProps) {

  const [isSaving, setIsSaving] = useState(false);

  // Novo
  const [formData, setFormData] = useState<FormTypeCreateIsrcPedido>({
    musicas: [
      {
        nomeMusica: "",
        estiloMusica: "1",
        tipoServico: "",
        autores: [{ nome: "", cpf: "" }],
        interpretes: [{ nome: "", cpf: "" }],
      },
    ],
    termos: false,
    pago: "n",
    finalizado: "n",
    cpf:cpf,
    id:"",
    valor: 0,
    data: new Date(),
    em_dia: ""
  });
  
  const [output, setOutput] = useState<FormTypeCreateIsrcPedido>(
    {
      musicas: [
        {
          nomeMusica: "",
          estiloMusica: "1",
          tipoServico: "",
          autores: [{ nome: "", cpf: "" }],
          interpretes: [{ nome: "", cpf: "" }],
        },
      ],
      termos: false,
      pago: "n",
      finalizado: "n",
      cpf:cpf,
      id:"",
      valor: 0,
      data: new Date(),
      em_dia: ""
    }
  );
  
  const handleTermsAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('termos', e.target.checked);
    trigger('termos')
  };
  
  const handleForm = () => {
    
    const quantidadeMusicas = formData.musicas.length;
  
    try {
      const precoTotal = calculaPrecoIsrc(quantidadeMusicas, em_dia);
      formData.valor = precoTotal
    } catch (error) {
      console.error('Erro ao calcular o preço:', error);
    }

    if (page === "isrc") {
      formData.musicas.forEach((musica: IsrcMusicaProps) => {
        musica.tipoServico = "3";
      });
    }

    processIsrcMusicData(formData.musicas);

    formData.cpf = cpf
    formData.em_dia = em_dia
    formData.id = pedidoId
    
    // setOutput(formData)
  
    console.log('Dados do Formulário:', formData);
  };

  const formValues = {
    musicas: [
      {
        nomeMusica: "",
        estiloMusica: "1",
        tipoServico: "",
        autores: [{ nome: "", cpf: "" }],
        interpretes: [{ nome: "", cpf: "" }],
      },
    ],
    termos: false,
    id: "",
    data: new Date(),
    valor: 0,
    pago: "n",
    finalizado: "n",
    cpf:"",
    em_dia: ""
  };

  const { handleSubmit, setValue, trigger, register, control, formState:{ isSubmitted, errors } } = useForm<FormTypeCreateIsrcPedido>({
    defaultValues: formValues,
    resolver:zodResolver(isrcFormSchema)
  });
  
  const ManageAuthors = ({ musicasIndex }: { musicasIndex: number }) => {

    const { append, remove, fields } = useFieldArray({
      name: `musicas.${musicasIndex}.autores`,
      control,
    });
    
    return (
      <div className="mt-3" style={{ width: "100%", backgroundColor: "#e4e4e4", padding: "1rem" }}>
        <Text fs={4} variant="primary">
          Autores da música {`${musicasIndex + 1}`}
        </Text>
  
        {fields.map((item, autorIndex) => (
          <div
            className="mt-3"
            style={{ padding: "1rem", borderRadius: "8px", backgroundColor: "white"}}
            key={item.id}
          >
            {/* Nome Autor */}
            <div>
              <InputGroup 
                {...register(`musicas.${musicasIndex}.autores.${autorIndex}.nome`)} 
                content={`Nome do autor ${autorIndex + 1}`} 
                customClasses={errors?.musicas?.[musicasIndex]?.autores?.[autorIndex]?.nome ? "is-invalid" : ""}
              />
    
              {/* ValidationMessage para o nome do autor */}
              <ValidationMessage 
                value={errors?.musicas?.[musicasIndex]?.autores?.[autorIndex]?.nome?.message || ""} 
                isValid={!errors?.musicas?.[musicasIndex]?.autores?.[autorIndex]?.nome} 
              />
            </div>
  
            {/* CPF Autor */}
            <div className="mt-2">
              <InputGroup 
                {...register(`musicas.${musicasIndex}.autores.${autorIndex}.cpf`)} 
                content={`CPF do autor ${autorIndex + 1}`} 
                customClasses={errors?.musicas?.[musicasIndex]?.autores?.[autorIndex]?.cpf ? "is-invalid" : ""}
              />
    
              {/* ValidationMessage para o CPF do autor */}
              <ValidationMessage 
                value={errors?.musicas?.[musicasIndex]?.autores?.[autorIndex]?.cpf?.message || ""} 
                isValid={!errors?.musicas?.[musicasIndex]?.autores?.[autorIndex]?.cpf} 
              />
            </div>
            
            {/* Remove autor */}
            {fields.length > 1 && (
              <Button
                type="button"
                className="mt-3"
                size="sm"
                variant="close"
                onClick={() => {
                  remove(musicasIndex);
                }}
              >
                <Trash />
                <span>Autor</span>
              </Button>
            )}
          </div>
        ))}
  
        {/* Add autor */}
        {fields.length <= 3 && (
          <Button
            className="mt-3"
            type="button"
            size="sm"
            onClick={() => {
              append({ nome: "", cpf: "" });
            }}
          >
            <Plus />
            <span>Autor</span>
          </Button>
        )}
      </div>
    );
  };
  
  const ManageInterpreters = ({ musicasIndex }: { musicasIndex: number }) => {
    
  const { append, remove, fields } = useFieldArray({
    name: `musicas.${musicasIndex}.interpretes`,
    control,
  });
  
  return (
    <div className="mt-3" style={{ width: "100%", backgroundColor: "#e4e4e4", padding: "1rem" }}>
      <Text fs={4} variant="primary">
        Intérpretes da música {`${musicasIndex + 1}`}
      </Text>

      {fields.map((item, InterpretesIndex) => (
        <div
          className="mt-3"
          style={{ padding: "1rem", borderRadius: "8px", backgroundColor: "white" }}
          key={item.id}
        >
          {/* Nome do Intérprete */}
          <div>
            <InputGroup 
                {...register(`musicas.${musicasIndex}.interpretes.${InterpretesIndex}.nome`)} 
                content={`Nome do intérprete ${InterpretesIndex + 1}`} 
                customClasses={errors?.musicas?.[musicasIndex]?.interpretes?.[InterpretesIndex]?.nome ? "is-invalid" : ""}
              />
    
              {/* ValidationMessage para o nome do Intérprete */}
              <ValidationMessage 
                value={errors?.musicas?.[musicasIndex]?.interpretes?.[InterpretesIndex]?.nome?.message || ""} 
                isValid={!errors?.musicas?.[musicasIndex]?.interpretes?.[InterpretesIndex]?.nome} 
            />
          </div>

          {/* CPF Intérprete */}
          <div className="mt-2">
            <InputGroup 
              {...register(`musicas.${musicasIndex}.interpretes.${InterpretesIndex}.cpf`)} 
              content={`CPF do intérprete ${InterpretesIndex + 1}`} 
              customClasses={errors?.musicas?.[musicasIndex]?.interpretes?.[InterpretesIndex]?.cpf ? "is-invalid" : ""}
            />
  
            {/* ValidationMessage para o CPF do Intérprete */}
            <ValidationMessage 
              value={errors?.musicas?.[musicasIndex]?.interpretes?.[InterpretesIndex]?.cpf?.message || ""} 
              isValid={!errors?.musicas?.[musicasIndex]?.interpretes?.[InterpretesIndex]?.cpf} 
            />
          </div>

          {/* Remove intérprete */}
          {fields.length > 1 && (
            <Button
              type="button"
              className="mt-3"
              size="sm"
              variant="close"
              onClick={() => {
                remove(InterpretesIndex);
              }}
            >
              <Trash />
              <span>Intérprete</span>
            </Button>
          )}
        </div>
      ))}

      {/* Add intérprete */}
      {fields.length <= 3 && (
        <Button
          className="mt-3"
          type="button"
          size="sm"
          onClick={() => {
            append({ nome: "", cpf: "" });
          }}
        >
          <Plus />
          <span>Intérprete</span>
        </Button>
      )}
    </div>
  );
};

  const { append, fields, remove } = useFieldArray({
    name: 'musicas', 
    control,
  });

  const handleAddMusic = () => {
    append({
      nomeMusica: "",
      estiloMusica: "",
      tipoServico: "",
      autores: [{
        nome: "",
        cpf:""
      }],
      interpretes: [{
        nome: "",
        cpf:""
      }]
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

                  {/* Tipo Serviço */}
                  {page === "estudio" && (
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
                  )}

                  {page ===  "isrc" ? (
                    <>
                    <ManageAuthors musicasIndex={index} />
                    <ManageInterpreters musicasIndex={index} />
                    </>
                    ) : page === "estudio" ? (
                      <ManageAuthors musicasIndex={index} />
                  ): null}
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

        { page === "isrc" ? (
            <TermsAgreement 
              onChange={handleTermsAgreementChange}
              hasError={errors.termos && isSubmitted}
              errorMessage="É nessessário concordar com o termos para prosseguir"
              id="termos"
            >
              Declaro que li e concordo com os 
              &nbsp; 
              <BaseModal 
                value="Endendi!" 
                variant="success" 
                content="Termos e Condições" 
                titulo="Termos e condições para geração do ISRC"
              >
                <Text>
                  - Os ISRCs gerados pelo Clube dos Compositores do Brasil serão processados pela SOCINPRO, Sociedade Brasileira de 
                  Administração e Proteção de Direitos Intelectuais, uma das seis sociedades-membro que formam e administram o ECAD.
                </Text>
                <Text>
                  - É obrigatório que um produtor fonográfico cadastrado em uma das nove associações conste no fonograma gerado, 
                  portanto o CCB preencherá esses dados para que seja viável a geração do código e posteriormente pode trocar tal nome para 
                  um de preferência do autor da composição, se requisitado. O CCB declara não ter absolutamente nenhum interesse nos direitos 
                  autorais das composições e só preencherá esses dados para facilitar e baratear o processo, visto que a grande maioria dos 
                  autores não tem acesso a um produtor fonográfico cadastrado no sistema do ECAD.
                </Text>
              </BaseModal>
              &nbsp; 
              para geração do ISRC.
            </TermsAgreement>
          ) : null
        } 

        <Button className="mt-3" style={{margin:'0 auto'}} type="submit" disabled={isSaving}>
            {isSaving ? 
            <ClipLoader color="#fff" loading={isSaving} size={20} /> 
            : "Enviar"}
        </Button>
        
        { page === "isrc" ? (
          <div className="mt-3">
           <TaxasModal content="Taxa de Emissão" />
          </div>
          ) : null
        }
      </form>
    </Container>
  );
}
