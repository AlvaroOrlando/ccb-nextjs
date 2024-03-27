// React/Next
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Libs
import { v4 as uuidv4 } from 'uuid';

//Utilities
import { formatPrice } from "@/utilities/formatPrice"

// Components
import MainContainer from "@/components/Containers/MainContainer";
import { estiloMusicaMap, tipoServicoMap } from "@/utilities/musicMap";
import Painel from "@/components/Containers/Painel";
import Container from "@/components/Containers/Container";
import Button from "@/components/Global/Button";
import ButtonContainer from "@/components/Containers/ButtonContainer";

// Interfaces/Types
interface Pedido {
  id: string;
  cpf: string;
  servico: string;
  data: Date;
  musicas: {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    price: number;
    descontoPromocaoEstudio: number;
  }[];
  precoTotal: number;
  descontoPromocaoEstudioTotal: number;
}

// Page
export default function Confirmacao() {
  const router = useRouter();
  const { cpf, servico, dados } = router.query;

  const [pedido, setPedido] = useState<Pedido | null>(null);

  useEffect(() => {
    if (dados) {
      const dadosString = Array.isArray(dados) ? dados.join('') : dados;
      const dadosObjeto = JSON.parse(dadosString);

      const musicas: Pedido["musicas"] = Array.from(dadosObjeto.musicas);

      const musicasMapeadas = musicas.map(musica => ({
        ...musica,
        estiloMusica: estiloMusicaMap[musica.estiloMusica],
        tipoServico: tipoServicoMap[musica.tipoServico],
      }));

      const descontoPromocaoEstudioTotal = musicas.reduce((total, musica) => total + musica.descontoPromocaoEstudio, 0);
      const precoTotal = musicasMapeadas.reduce((total, musica) => total + musica.price, 0);

      const novoPedido: Pedido = {
        id: uuidv4(),
        cpf: cpf as string,
        servico: servico as string,
        data: new Date(),
        musicas: musicasMapeadas,
        precoTotal,
        descontoPromocaoEstudioTotal
      };

      // Defina o estado do pedido
      setPedido(novoPedido);

      console.log("Pedido Consolidado:", novoPedido);
    }
  }, [dados, cpf, servico]);

  return (
    <MainContainer>
      <Painel content="CONFIRMAÇÃO DE DADOS" />
      <Container>
        <h1>Confira seu pedido:</h1>
  
        {/* Exibir dados do pedido */}
        {pedido && (
          <div>
            <p>CPF: {pedido.cpf}</p>
            <p>Serviço: {`${servico === "gravacao" ? "Gravação: " : "Confecção de Melodia:"}`}</p>
            <p>Data do Pedido: {pedido.data.toLocaleString()}</p>
            <p>ID do Pedido: {pedido.id}</p>
  
            <h3>Músicas:</h3>
            <ul>
              {pedido.musicas.map((musica, index) => (
                <li key={index}>
                  <p>Nome: {musica.nomeMusica}</p>
                  <p>Estilo: {musica.estiloMusica} </p>
                  <p>Tipo de Serviço: {musica.tipoServico}</p>
                  <p>Preço: {formatPrice(Number(musica.price.toFixed(2)))}</p>
                  { musica.descontoPromocaoEstudio > 0 &&
                  <p>Desconto de Promoção: {formatPrice(Number(musica.descontoPromocaoEstudio.toFixed(2)))}</p>
                  }
                </li>
              ))}
            </ul>
  
            <p>Preço Total (já com desconto de sócio): {formatPrice(Number(pedido.precoTotal.toFixed(2)))}</p>
            { pedido.descontoPromocaoEstudioTotal > 0 &&
            <p>Desconto Total de Promoção:  {formatPrice(Number(pedido.descontoPromocaoEstudioTotal.toFixed(2)))}</p>
            }
            <small>Você pode escolher pagar à vista ou em até 6 parcelas sem juros, na página do seu Cartão de Crédito, mais adiante.</small>
          </div>
        )}
        <ButtonContainer className="mt-3">
          <Button>
            Confirmar
          </Button>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
}