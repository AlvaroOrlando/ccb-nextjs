import { z } from 'zod';
import { TestaCPF } from "@/utilities/validaCpf";

// CPF
export const cpfValidationSchema = z.string()
.min(1, { message: 'O CPF é obrigatório.' })
.length(11, { message: 'O CPF deve ter 11 caracteres.' })
.refine((value) => {
  if (TestaCPF(value) === false) {
    if (/^000000\d{5}$/.test(value)) {
      if (/^00000000000/.test(value)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
  return true;
}, { message: 'CPF inválido' })

// Nome 
export const nameValidationSchema = z.string()
.min(1, { message: 'O nome é obrigatório.' })
.min(3, { message: 'O nome precisa ter pelo menos 3 letras.' })
.refine((value) => {
  const words = value.split(/\s+/).filter((word) => word.trim() !== '');
  return words.length >= 2;
}, { message: 'Digite o nome completo.' });

// Nome artistico
export const nartValidationSchema = z.string()
.min(1, { message: 'O nome artístico é obrigatório.' })
.min(3, { message: 'O nome artístico precisa ter pelo menos 3 letras.' })

// Nome do autor
export const authorNameValidationSchema = z.string()
.min(1, { message: 'O nome do autor é obrigatório.' })
.min(3, { message: 'O nome do autor precisa ter pelo menos 3 letras.' })
.refine((value) => {
  const words = value.split(/\s+/).filter((word) => word.trim() !== '');
  return words.length >= 2;
}, { message: 'Digite o nome completo do autor.' });

// Nome do intérprete
export const interpreteNameValidationSchema = z.string()
.min(1, { message: 'O nome da música é obrigatório.' })
.min(3, { message: 'O nome da música ter pelo menos 3 letras.' })

// Nome da música
export const musicNameValidationSchema = z.string()
.min(1, { message: 'O nome da música é obrigatório.' })
.min(3, { message: 'O nome da música ter pelo menos 3 letras.' })

// E-mail
export const emailValidationSchema = z.string()
.min(1, { message: 'O e-mail é obrigatório.' })
.refine(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
  message: 'Por favor, insira um e-mail válido.'
});

// Data Nascimento
export const birthdayValidationSchema =  z.string().refine((value) => !!value, {
  message: "A data de Nascimento é obrigatória."
})

// Endereço
export const addressValidationSchema = z.string()
.min(1, { message: 'O endereço é obrigatório.' })
.refine((value) => {
  const words = value.split(/\s+/).filter((word) => word.trim() !== '');
  return words.length >= 2;
}, { message: 'Digite o endereço completo.' })

// Cidade
export const cityValidationSchema = z.string()
.min(1, { message: 'A cidade é obrigatório.' })
.min(3, { message: 'A cidade precisa ter pelo menos 3 letras.' })

// Bairro
export const neighborhoodValidationSchema = z.string()
.min(1, { message: 'O bairro é obrigatório.' })
.min(3, { message: 'O bairro precisa ter pelo menos 3 letras.' })

// Estado
export const stateValidationSchema = z.string()
.refine((value) => value !== "0", {
  message: 'O estado é obrigatório.',
});

// Telefone
export const phoneValidationSchema = z.string()
.min(1, { message: 'O telefone é obrigatório.' })
.min(11, { message: 'O telefone precisa ter pelo menos 11 números.' })

// Número
export const numberValidationSchema = z.string()
.min(1, { message: 'O número é obrigatório.' })

// CEP
export const cepValidationSchema = z.string()
.min(1, { message: 'O CEP é obrigatório.' })
.min(8, { message: 'O CEP precisa ter pelo menos 8 numeros.' })

// Termos Isrc
export const termsValidationSchema =  z.boolean().refine((value) => value === true, {
  message:"É necessário concordar com os Termos e Condições para avançar."
})



  
  
  
  


  
  

  
