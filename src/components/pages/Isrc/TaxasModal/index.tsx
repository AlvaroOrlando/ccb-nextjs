import React from "react";
import BaseModal from "@/components/BaseModal";
import Label from "@/components/Global/Label";
import Heading from "@/components/Global/Heading";
import Text from "@/components/Global/Text";
import Container from "@/components/Containers/Container";
import { formatPrice } from '@/utilities/formatPrice'; 
import { ArrowFatLineRight } from 'phosphor-react'

interface BaseModalType {
  content: string;
}

// Função para formatar as chaves do objeto
const formatKeys = (str: string): string => {
    const words = str.split('_');
  
    // Torna ambas as palavras com a primeira letra maiúscula
    const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const secondWord = words[1].charAt(0).toUpperCase() + words[1].slice(1).replace(/u/g, 'ú');
  
    // Concatena as palavras
    const result = `${firstWord} ${secondWord}`;
  
    return result;
  };
  
  
const TaxasModal: React.FC<BaseModalType> = ({ content }) => {
  const valoresISRC = {
    associados: {
      primeira_musica: 70,
      segunda_musica: 60,
      terceira_musica: 50,
      quarta_musica: 36
    },
    naoAssociados: {
      primeira_musica: 80,
      segunda_musica: 70,
      terceira_musica: 60,
      quarta_musica: 48
    }
  };

  // Função para renderizar os contêineres
  const renderMusicContainer = (labelContent: string, price: number, total: number, installment: number) => (
    <Container key={labelContent}>
      <Label content={formatKeys(labelContent)} /> {/* Utiliza a função para formatar a chave */}
      <Text as="p">
        <Text as="span" variant="success">
            {formatPrice(price)}
        </Text>
        &nbsp;- total {formatPrice(total)} ou
        <Text as="span" variant="success" fw="bold">
            &nbsp;6x de {formatPrice(parseFloat(price.toString()) / 6)}
        </Text>
        </Text>
    </Container>
  );

  // Função para renderizar os contêineres com chaves formatadas
  const renderMusicContainers = (musicObj: { [key: string]: number }) => {
    return Object.entries(musicObj).map(([labelContent, price]) =>
      renderMusicContainer(
        labelContent,
        price,
        price,
        parseFloat(price.toString()) / 6
      )
    );
  };

  const containerModel = <Container key="model" />;

  return (
    <BaseModal className="mt-3" titulo="CERTIFICADO ISRC/ECAD - TAXAS" content={content}>
      <h4 className="subtitulosGlobal">Serviços inclusos</h4>
      <ul style={{listStyleType:'none'}} className="mt-3">
        <li> <ArrowFatLineRight color="blue" size={16} />&nbsp; Geração de Código Exclusivo ISRC</li>
        <li> <ArrowFatLineRight color="blue" size={16} />&nbsp; Remessa ao ECAD</li>
        <li> <ArrowFatLineRight color="blue" size={16} />&nbsp; Emissão de Certificado</li>
        <li> <ArrowFatLineRight color="blue" size={16} />&nbsp; Guarda vitalícia do Certificado</li>
      </ul>
      <hr />
      <h4 className="subtitulosGlobal">Valores com desconto progressivo</h4>
      <p className="text-center">(Quanto mais ISRCs gerar, maior o desconto)</p>

      {/* Associados */}
      <div>
        <Heading as="h5" fw="bold" variant="secondary">
          Associados CCB
        </Heading>
        {containerModel}
        {renderMusicContainers(valoresISRC.associados)}
      </div>

      <hr />

      {/* Não Associados */}
      <div>
        <Heading as="h5" fw="bold" variant="secondary">
          Não associados
        </Heading>
        {containerModel}
        {renderMusicContainers(valoresISRC.naoAssociados)}
      </div>
    </BaseModal>
  );
};

export default TaxasModal;
