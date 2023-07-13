import {  Form } from "react-bootstrap";

interface BuscaArtistaProps{
  searchBox?:string 
}

export default function BuscaArtista({ searchBox }:BuscaArtistaProps){
    return (
      <Form name="superform1" method="post" action="http://www.clubedoscompositores.com.br/supergeral_procurartista2.asp" >
        <div className={searchBox}>
            <input type="text"  name="nome" className="form-control" placeholder="Busca artista CBB" />
        </div>
      </Form>
    )
}