import Crumb from "@/components/Crumb";
import { MainContainer } from "@/styles/styles";

export default function Servicos(){
    return (
        <>
            <Crumb href="/servicos" pag1="Serviços"/>
            <MainContainer>
                <div className="px-4 mt-1 mb-1 text-center">
                    <h1 className="display-5 fw-bold subtitulos_global">Central de serviços</h1>
                    <div className="col-lg-12 mx-auto">
                        <p className="mb-4">Escolha o serviço desejado</p>
                        <div className="d-flex flex-column">
                            <a href="https://www.clubedoscompositores.com.br/isrc/supergeral_isrc1.asp" type="button" className="btn btn-primary btn-lg mb-4">ISRC/ECAD</a>
                            <a href="https://www.clubedoscompositores.com.br/registro_flash/n_registro1.asp" type="button" className="btn btn-primary btn-lg mb-4">Registros</a>
                            <a href="https://www.clubedoscompositores.com.br/estudio/supergeral_estudio1.asp" type="button" className="btn btn-primary btn-lg mb-4">Gravar Estúdio CCB</a>
                            <a href="https://www.clubedoscompositores.com.br/estudio/supergeral_melodia1.asp" type="button" className="btn btn-primary btn-lg mb-4">Confecção de Melodia</a>
                            <a href="https://www.clubedoscompositores.com.br/supergeral_central_de_pagamentos_1.asp" type="button" className="btn btn-primary btn-lg mb-4">Pagamentos</a>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </>
    )
}