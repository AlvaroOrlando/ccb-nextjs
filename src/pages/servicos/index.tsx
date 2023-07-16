import Crumb from "@/components/Crumb";
import { MainContainer } from "@/styles/styles";
import Link from "next/link";

export default function Servicos(){
    return (
        <>
            <Crumb />
            <MainContainer>
                <div className="px-4 mt-1 mb-1 text-center">
                    <h1 className="display-5 fw-bold subtitulos_global">Central de serviços</h1>
                    <div className="col-lg-12 mx-auto">
                        <p className="mb-4">Escolha o serviço desejado</p>
                        <div className="d-flex flex-column">
                            <Link href="/servicos/isrc" type="button" className="btn btn-primary btn-lg mb-4">ISRC/ECAD</Link>
                            <Link href="/servicos/registrar" type="button" className="btn btn-primary btn-lg mb-4">Registros</Link>
                            <Link href="/servicos/gravar" type="button" className="btn btn-primary btn-lg mb-4">Gravar Estúdio CCB</Link>
                            <Link href="servicos/melodia" type="button" className="btn btn-primary btn-lg mb-4">Confecção de Melodia</Link>
                            <Link href="servicos/pagamentos" type="button" className="btn btn-primary btn-lg mb-4">Pagamentos</Link>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </>
    )
}