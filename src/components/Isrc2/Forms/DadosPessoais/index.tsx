import Painel from "@/components/Painel";
import TaxasModal from "../../TaxasModal";
import Button from "../../../Global/Button"
import { useEffect, useState } from "react";
import Musica from "../../Musica";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

interface userType {
  nome:string,
  nart:string,
  cpf:string,
  email:string,
  endereco:string,
  cep:string,
  cidade:string,  
  estado:string,
  telefone:string,
}

interface dataProps extends ParsedUrlQuery {
  cpf:string
}

export default function DadosPessois(){

  const router = useRouter()


  const [users, setUsers] = useState<userType[]>([])
  
  const { cpf } = router.query


useEffect(() => {
  async function getPageData() {
    if (!cpf) return;
    const apiUrlEndpoint = `http://localhost:3000/api/clubecad/getUserByCpf?cpf=${cpf}`;

    const response = await fetch(apiUrlEndpoint);

    if (!response.ok) {
      console.error('Error fetching data from the API');
      return;
    }

    const res = await response.json();
    setUsers(res.users);
  }

  getPageData();
}, [cpf, router.isReady]);


    return (
      <form className="w-100">
        <Painel content="DADOS PESSOAIS"/>
        <section className="w-100">
          <div className="form-group mt-3">
            <label htmlFor="nomeCompleto">Nome Completo:</label>
            <input className="form-control mt-1" id="nomeCompleto" defaultValue={users.length > 0 ? users[0].nome : ''}  name="nome" type="text" maxLength={150} required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="nomeArtistico">Nome Artístico (Pseudônimo):</label>
            <input className="form-control mt-1" id="nomeArtistico" defaultValue={users.length > 0 ? users[0].nart : ''} name="pseudo" type="text"  maxLength={150}  required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cpfuser">CPF:</label>
            <input className="form-control mt-1" id="cpfuser" defaultValue={users.length > 0 ? users[0].cpf : cpf} name="cpfcgc" type="text" required  readOnly/>
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="Email_user">E-mail:</label>
            <input className="form-control mt-1" name="Email_user" defaultValue={users.length > 0 ? users[0].email : ''} type="email" id="Email_user" maxLength={255} required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="enderecouser">Endereço com o número:</label>
            <input className="form-control mt-1" id="enderecouser" defaultValue={users.length > 0 ? users[0].endereco : ''} name="endereco" type="text"  maxLength={80}  required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cepuser">CEP:</label>
            <input className="form-control mt-1" id="cepuser" defaultValue={users.length > 0 ? users[0].cep : ''} name="cep" type="text"  maxLength={8}  required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cidadeuser">Cidade:</label>
            <input className="form-control mt-1" id="cidadeuser" defaultValue={users.length > 0 ? users[0].cidade : ''} name="cidade" type="text"  maxLength={15} required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="estadouser">Estado:</label>
            <input className="form-control mt-1" id="estadouser" defaultValue={users.length > 0 ? users[0].estado : ''}  name="estado" type="text"  maxLength={2} required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3 mb-3">
            <label htmlFor="celularuser">Celular com ddd (só números)</label>
            <input className="form-control mt-1" type="text" defaultValue={users.length > 0 ? users[0].telefone : ''} maxLength={18} name="telefone" required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <TaxasModal />
        </section>
        <Musica />
        <Button value="Enviar" />
      </form>  
    )
}