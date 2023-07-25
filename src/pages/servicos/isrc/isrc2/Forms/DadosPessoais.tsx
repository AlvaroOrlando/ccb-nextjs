import TaxasModal from "../../TaxasModal";

export default function DadosPessois(){

    return (
        <section>
          <div className="form-group mt-3">
            <label htmlFor="nomeCompleto">Nome Completo:</label>
            <input className="form-control mt-1"  id="nomeCompleto" name="nome" type="text"  maxLength={150} />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="nomeArtistico">Nome Artístico (Pseudônimo):</label>
            <input className="form-control mt-1" id="nomeArtistico" name="pseudo" type="text"  maxLength={150}  />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cpfCliente">CPF:</label>
            <input className="form-control mt-1" id="cpfCliente" name="cpfcgc" type="text" />
            {/* medalha, socioccb, codigo_servico */}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="Email_cliente">E-mail:</label>
            <input className="form-control mt-1" name="Email_cliente" type="text" id="Email_cliente" maxLength={255} />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="enderecoCliente">Endereço com o número:</label>
            <input className="form-control mt-1" id="enderecoCliente" name="endereco" type="text"  maxLength={80}  />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cepCliente">CEP:</label>
            <input className="form-control mt-1" id="cepCliente" name="cep" type="text"  maxLength={8}  />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cidadeCliente">Cidade:</label>
            <input className="form-control mt-1" id="cidadeCliente" name="cidade" type="text"  maxLength={15} />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="estadoCliente">Estado:</label>
            <input className="form-control mt-1" id="estadoCliente" name="estado" type="text"  maxLength={2} />
          </div>

          <div className="form-group mt-3 mb-3">
            <label htmlFor="celularCliente">Celular com ddd (só números)</label>
            <input className="form-control mt-1" type="text" maxLength={18} name="telefone" />
          </div>

          <input type="hidden" name="qtdmusicas" id="qtdmusicas" value="1" />
          
          <TaxasModal />
        </section>
    )
}