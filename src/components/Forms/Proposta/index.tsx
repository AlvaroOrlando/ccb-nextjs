import Input from "@/components/Global/Input/input";

export default function PropostaForm(){
    return (
        <form
            style={{ width:'100%',  maxWidth: '802px' }}
        >
           <div style={{width:'100%'}}>
              
              <Input 
                placeholder="Nome completo"
                className="mt-3"
              />

              <Input 
                placeholder="CPF"
                className="mt-3"
              />

              <Input 
                placeholder="CEP"
                className="mt-3"
              />

              <Input 
                placeholder="Estado"
                className="mt-3"
              />

              <Input 
                placeholder="Cidade"
                className="mt-3"
              />

              <Input 
                placeholder="Bairro"
                className="mt-3"
              />

              <Input 
                placeholder="Rua"
                className="mt-3"
              />

              <Input 
                placeholder="Número"
                className="mt-3"
              />

              <Input 
                placeholder="Complemento"
                className="mt-3"
              />
           </div>
        </form>
    )
}