// Utilities
import {
    preco_isrc_cliente_musica1,
    preco_isrc_cliente_musica2,
    preco_isrc_cliente_musica3,
    preco_isrc_cliente_musica4,
  
    preco_isrc_socio_musica1,
    preco_isrc_socio_musica2,
    preco_isrc_socio_musica3,
    preco_isrc_socio_musica4,

    AplicarDescontoPorMedalha,
    descontoPromocaoEstudio,

    preco_cliente_arranjo,
    preco_cliente_arranjo_samba,
    preco_cliente_violao,
    preco_melodia_cliente_arranjo,
    preco_melodia_cliente_arranjo_samba,
    preco_melodia_cliente_violao,
    preco_melodia_socio_arranjo,
    preco_melodia_socio_arranjo_samba,
    preco_melodia_socio_violao,
    preco_socio_arranjo,
    preco_socio_arranjo_samba,
    preco_socio_violao
    
} from "@/utilities/prices";
import { FormTypeCreatePedidoEstudio, Medalha } from "../interfaces";

type EstudioMusicDataTypes = {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    medalha: Medalha | "";
    valor: number;
    servico: string;
};

// Functions
export const calculaPrecoIsrc = (quantidadeMusicas: number, emDia: string) => {

  // Define os preços com base na quantidade de músicas e no status de 'em_dia'
  const precoSocioIsrc = [ preco_isrc_socio_musica1, preco_isrc_socio_musica2, preco_isrc_socio_musica3, preco_isrc_socio_musica4 ];
  const precoIsrc = [preco_isrc_cliente_musica1, preco_isrc_cliente_musica2, preco_isrc_cliente_musica3, preco_isrc_cliente_musica4 ];

  // Verifica se está em dia para determinar os preços a serem usados
  const precos = emDia === 's' ? precoSocioIsrc : precoIsrc;

  // Verifica se a quantidade de músicas é válida
  if (quantidadeMusicas <= 0 || quantidadeMusicas > precos.length) {
    throw new Error('Quantidade de músicas inválida.');
  }

  // Calcula o preço total com base na quantidade de músicas
  let precoTotal = 0;
  for (let i = 0; i < quantidadeMusicas; i++) {
    precoTotal += precos[i];
  }

  return precoTotal;
};

export function calculaPrecoEstudio(data: EstudioMusicDataTypes, servico: string, em_dia: string, medalha: Medalha | "") {

    console.log("Dados recebidos:", data);
  
      let precoBase;
  
      if (data.servico === "gravacao") {
        precoBase = data.tipoServico === "1" ?
          (em_dia === "n" ? preco_cliente_violao : preco_socio_violao) :
          (em_dia === "n" && !["4", "8", "22", "24"].includes(data.estiloMusica) ?
            preco_cliente_arranjo :
            em_dia === "n" && ["4", "8", "22", "24"].includes(data.estiloMusica) ?
              preco_cliente_arranjo_samba :
              em_dia === "s" && !["4", "8", "22", "24"].includes(data.estiloMusica) ?
                preco_socio_arranjo_samba :
                em_dia === "s" && ["4", "8", "22", "24"].includes(data.estiloMusica) ?
                  preco_socio_arranjo : 0);
      } else {
        precoBase = data.tipoServico === "1" ?
          (em_dia === "n" ? preco_melodia_cliente_violao : preco_melodia_socio_violao) :
          (em_dia === "n" && !["4", "8", "22", "24"].includes(data.estiloMusica) ?
            preco_melodia_cliente_arranjo :
            em_dia === "n" && ["4", "8", "22", "24"].includes(data.estiloMusica) ?
              preco_melodia_cliente_arranjo_samba :
              em_dia === "s" && !["4", "8", "22", "24"].includes(data.estiloMusica) ?
                preco_melodia_socio_arranjo_samba :
                em_dia === "s" && ["4", "8", "22", "24"].includes(data.estiloMusica) ?
                  preco_melodia_socio_arranjo : 0);
      }
  
      const precoFinal = AplicarDescontoPorMedalha(medalha, precoBase) - descontoPromocaoEstudio;
  
      return precoFinal
  
}

// export function calcularPrecoTotalIsrc(data: FormTypeCreateIsrcPedido, em_dia: string): void {
  
//   const quantidadeMusicasIsrc = data.musicas.length;
  
//   try {
//     const precoTotal = calculaPrecoIsrc(quantidadeMusicasIsrc, em_dia);
//     data.valor = precoTotal;
//   } catch (error) {
//     console.error('Erro ao calcular o preço:', error);
//   }
// }

