export function aplicarDesconto(preco:number, desconto:number){
    return (preco * (1 - (desconto/100)))
}

export const descontoPromocaoEstudio = 0

//arranjo
export const preco_socio_arranjo = 490 
export const preco_cliente_arranjo = 590

export const preco_melodia_socio_arranjo = 790
export const preco_melodia_cliente_arranjo = 890

//voz e violao
export const preco_socio_violao = 350
export const preco_cliente_violao = 390

export const preco_melodia_socio_violao = 490
export const preco_melodia_cliente_violao = 590

//arranjo samba
export const preco_socio_arranjo_samba = preco_socio_arranjo + (preco_socio_arranjo *.20)
export const preco_cliente_arranjo_samba = preco_cliente_arranjo + (preco_cliente_arranjo *.20)

export const preco_melodia_cliente_arranjo_samba = preco_melodia_cliente_arranjo + (preco_melodia_cliente_arranjo *.20)
export const preco_melodia_socio_arranjo_samba = preco_melodia_socio_arranjo + (preco_melodia_socio_arranjo *.20)

export const preco_isrc_cliente_musica1 = 80
export const preco_isrc_cliente_musica2 = 70
export const preco_isrc_cliente_musica3 = 60
export const preco_isrc_cliente_musica4 = 48

export const preco_isrc_socio_musica1 = 70
export const preco_isrc_socio_musica2 = 60
export const preco_isrc_socio_musica3 = 50
export const preco_isrc_socio_musica4 = 36

  type Medalha = "2" | "3" | "4" | "5" | "6";

  export function AplicarDescontoPorMedalha(medalha: Medalha | "", precoBase: number): number {
    if (medalha === "") {
      return precoBase;
    }
  
    switch (medalha) {
      case "2": // Prata
        return aplicarDesconto(precoBase, 5);
      case "3": // Ouro
        return aplicarDesconto(precoBase, 8);
      case "4": // Platina
        return aplicarDesconto(precoBase, 12);
      case "5": // Diamante
        return aplicarDesconto(precoBase, 15);
      case "6": // Senior
        return aplicarDesconto(precoBase, 20);
      default:
        throw new Error("Medalha inválida");
    }
  }