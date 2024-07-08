import { z } from "zod";
import { cpfValidationSchema, musicNameValidationSchema, nameValidationSchema, termsValidationSchema, authorNameValidationSchema, interpreteNameValidationSchema } from "./formValidation";

  export const autoresSchema = z.array(z.object({
      nome: authorNameValidationSchema,
      cpf: cpfValidationSchema
  }));
  
  export const interpretesSchema = z.array(z.object({
    nome: interpreteNameValidationSchema,
    cpf: cpfValidationSchema
  }));
  
  const Medalha = [ "2", "3", "4", "5", "6" ] as const

  export const isrcMusicasSchema =  z.array(
    z.object({
      nomeMusica: musicNameValidationSchema,
      estiloMusica: z.string(),
      autores: autoresSchema,
      interpretes: interpretesSchema, 
    })
  );

  export const estudioMusicasSchema =  z.array(
    z.object({
      nomeMusica: musicNameValidationSchema,
      estiloMusica: z.string(),
      tipoServico: z.string(),
      valor: z.number(),
      servico: z.string(),
      medalha: z.union([z.enum(Medalha), z.literal("")]),
    })
  );

  export const isrcFormSchema = z.object({
    musicas: isrcMusicasSchema,
    termos: termsValidationSchema,
    id: z.string(),
    data: z.date(),
    valor: z.number(),
    pago: z.string(),
    finalizado: z.string(),
    cpf: z.string(),
    em_dia: z.string(),
    tipoServico: z.string()
  });

  export const estudioFormSchema = z.object({
    musicas: estudioMusicasSchema,
    id: z.string(),
    data: z.date(),
    valor: z.number(),
    pago: z.string(),
    finalizado: z.string(),
    cpf: z.string(),
    em_dia: z.string(),
    page: z.string()
  });