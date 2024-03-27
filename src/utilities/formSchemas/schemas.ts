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
  
  export const isrcMusicasSchema =  z.array(
    z.object({
      nomeMusica: musicNameValidationSchema,
      estiloMusica: z.string(),
      tipoServico: z.string(),
      autores: autoresSchema,
      interpretes: interpretesSchema, 
    })
  );

  export const estudioMusicasSchema =  z.array(
    z.object({
      nomeMusica: musicNameValidationSchema,
      estiloMusica: z.string(),
      tipoServico: z.string(),
    })
  );
  
  export const pedidoSchema = z.object({
    id: z.string(),
    data: z.date(),
    valor: z.number(),
    musicas: isrcMusicasSchema,
    cpf: z.string(), 
    pago: z.string(),
    finalizado: z.string()
  });
  
  export const isrcFormSchema = z.object({
    musicas: isrcMusicasSchema,
    termos: termsValidationSchema,
    id: z.string(),
    data: z.date(),
    valor: z.number(),
    pago: z.string(),
    finalizado: z.string(),
    cpf: z.string(),
    em_dia: z.string()
  });

  export const estudioFormSchema = z.object({
    musicas: estudioMusicasSchema,
    id: z.string(),
    data: z.date(),
    valor: z.number(),
    pago: z.string(),
    finalizado: z.string(),
    cpf: z.string(),
    em_dia: z.string()
  });