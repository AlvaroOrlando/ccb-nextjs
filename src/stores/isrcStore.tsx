// isrcStore.tsx
import { cpfValidationSchema, musicNameValidationSchema, nameValidationSchema, termsValidationSchema } from "@/utilities/form/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

const autoresSchema = z.array(z.object({
    nome: nameValidationSchema,
    cpf: cpfValidationSchema
}));

const interpretesSchema = z.array(z.object({
    nome: nameValidationSchema,
    cpf: cpfValidationSchema
}));

const musicasSchema =  z.array(
    z.object({
      nomeMusica: musicNameValidationSchema,
      estiloMusica: z.string(),
      tipoServico: z.string(),
      autores: autoresSchema,
      interpretes: interpretesSchema, 
    })
);


const pedidoSchema = z.object({
    id: z.string(),
    data: z.date(),
    valor: z.number(),
    musicas: musicasSchema,
    cpf: z.string(), 
    pago: z.string(),
    finalizado: z.string()
});

const formSchema = z.object({
    pedido: pedidoSchema,
    termos: termsValidationSchema,
});

export type FormTypeCreateIsrcPedido = z.infer<typeof formSchema>;

const pedidoId = uuidv4();

export const useFormCreateIsrcPedido = () => useForm<FormTypeCreateIsrcPedido>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        pedido: {
            id: pedidoId,
            data: new Date(),
            valor: 0,
            pago: "n",
            finalizado: "n",
            musicas: [
                {
                    nomeMusica: "",
                    estiloMusica: "1",
                    tipoServico: "",
                    autores: [{ nome: "", cpf: "" }],
                    interpretes: [{ nome: "", cpf: "" }],
                },
            ],
        },
        termos: false,
    },
});

export const FormProviderCreateIsrcPedido = ({ children }: { children: ReactNode }) => {

    const methods = useFormCreateIsrcPedido(); 
    return <FormProvider {...methods}> { children } </FormProvider>;
};

export const useFormCreateIsrcPedidoContext = () => useFormContext<FormTypeCreateIsrcPedido>();
