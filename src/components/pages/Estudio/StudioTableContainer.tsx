import TabelaMusicasEstudio from "../../../pages/servicos/estudio/tabelaMusicasEstudio";
import TabelaPrecosEstudio from "../../../pages/servicos/estudio/tabelaPrecosEstudio";
import { usePathname } from "next/navigation";
import TabelaPrecosMelodia from "../../../pages/servicos/estudio/tabelaPrecosMelodia";

import { EstudioProps } from "../Estudio"

export default function StudioTableContainer({ servico }:EstudioProps){

    return (
      <div className={`studioTableContainer mt-3`}>

        { servico === "gravacao" ? (
          <TabelaPrecosEstudio />
          ) : servico === "melodia" ? (
          <TabelaPrecosMelodia />
          ): null 
        }

        <p className="mt-3">
          <b>
            Pagamentos por cartão de crédito parcelado até 6 vezes ou à vista no boleto.
          </b>
        </p>
        <p className="mt-3">
          O que esperar do Estúdio CCB? Clique nos links abaixo para ouvir uma amostra:
        </p>

        <TabelaMusicasEstudio />
      </div>
    )
}