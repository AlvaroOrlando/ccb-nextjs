import TabelaMusicasEstudio from "./tabelaMusicasEstudio";
import TabelaPrecosEstudio from "./tabelaPrecosEstudio";
import { usePathname } from "next/navigation";
import TabelaPrecosMelodia from "./tabelaPrecosMelodia";

export default function StudioTableContainer(){

    const path = usePathname()
    return (
        <div className={`studioTableContainer mt-3`}>
        {path === "/servicos/estudio/gravar" ?
        <TabelaPrecosEstudio />
        : 
        <TabelaPrecosMelodia />
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