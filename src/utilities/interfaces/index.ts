import { z } from "zod";
import { estudioFormSchema, isrcFormSchema } from "../form/schemas";

export type Medalha = "" | "2" | "3" | "4" | "5" | "6";

export interface EstudioMusicProps {
    cpf: string
    em_dia: string
    medalha:Medalha,
    servico:string,
    page: string
}

export interface EstudioMusicaProps {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
}

export interface IsrcMusicProps {
    cpf: string
    em_dia: string
}
  
export interface IsrcMusicaProps {
    nomeMusica: string;
    estiloMusica: string;
    autores: Autor[];
    interpretes: Interprete[];
}

export interface Autor {
    nome: string;
    cpf: string;
}

export interface Interprete {
nome: string;
cpf: string;
}

export interface FormTypeCreatePedidoIsrc {
    pedido: {
        musicas: {
            nomeMusica: string;
            estiloMusica: string;
            autores: {
                nome: string;
                cpf: string;
            }[];
            interpretes: {
                nome: string;
                cpf: string;
            }[];
        }[];
        termos: boolean;
        pago: string;
        finalizado: string;
        cpf: string;
        id: string;
        valor: number;
        date: Date;
        tipoServico:string;
    };
}

export interface FormTypeCreatePedidoEstudio {
    pedido: {
        cpf: string;
        id: string;
        data: Date;
        valor: number;
        pago: string;
        finalizado: string;
        musicas: {
            nomeMusica: string;
            estiloMusica: string;
        }[];
        em_dia: string;
        servico: string;
        tipoServico: string;
    };
}

export interface FormTypeCreateIsrcPedido {
    pedido: {
        cpf: string;
        id: string;
        date: Date;
        valor: number;
        pago: string;
        finalizado: string;
        musicas: {
            nomeMusica: string;
            estiloMusica: string;
        }[];
        em_dia: string;
        servico: string;
        tipoServico: string;
    };
}

export type FormTypeIsrcData = z.infer<typeof isrcFormSchema>;
export type FormTypeEstudioData = z.infer<typeof estudioFormSchema>;
