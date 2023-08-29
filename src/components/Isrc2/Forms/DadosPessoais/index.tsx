import Painel from "@/components/Painel";
import TaxasModal from "../../TaxasModal";
import Button from "../../../Global/Button"
import { useCallback, useEffect, useState } from "react";
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

export default function DadosPessoais() {

  const router = useRouter();
  const { cpf } = router.query;

  const [users, setUsers] = useState<userType[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchUserData = useCallback(async () => {
    if (!cpf) return;

    try {
      const clubecadApiUrlEndpoint = `http://localhost:3000/api/clubecad/getUserByCpf?cpf=${cpf}`;
      const isrcApiUrlEndpoint = `http://localhost:3000/api/isrc/getUserByCpf?cpf=${cpf}`;

      const [clubecadResponse, isrcResponse] = await Promise.all([
        fetch(clubecadApiUrlEndpoint),
        fetch(isrcApiUrlEndpoint)
      ]);

      const clubecadData = await clubecadResponse.json();
      const isrcData = await isrcResponse.json();

      if (clubecadData.users?.length > 0) {
        setUsers(clubecadData.users);
      } else if (isrcData.users?.length > 0) {
        setUsers(isrcData.users);
      } else {
        setUsers([]);
      }

      setDataLoaded(true);
    } catch (error) {
      console.error("Error fetching data from the API", error);
      setUsers([]); // Set users to an empty array if an error occurs
      setDataLoaded(true);
    }
  }, [cpf]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  

  useEffect(() => {
    async function getPageData() {
      if (!cpf) return;
    
      try {
        // Fetch data from clubecad table
        const clubecadApiUrlEndpoint = `http://localhost:3000/api/clubecad/getUserByCpf?cpf=${cpf}`;
        const clubecadResponse = await fetch(clubecadApiUrlEndpoint);
    
        if (clubecadResponse.ok) {
          const clubecadData = await clubecadResponse.json();
          if (clubecadData.users.length > 0) {
            // Data found in clubecad
            setUsers(clubecadData.users);
            setDataLoaded(true);
            console.log("Achou no clubecad");
          } else {
            // Data not found in clubecad, try fetching from isrc
            const isrcApiUrlEndpoint = `http://localhost:3000/api/isrc/getUserByCpf?cpf=${cpf}`;
            const isrcResponse = await fetch(isrcApiUrlEndpoint);
    
            if (isrcResponse.ok) {
              const isrcData = await isrcResponse.json();
              if (isrcData.users.length > 0) {
                // Data found in isrc
                setUsers(isrcData.users);
                setDataLoaded(true);
                console.log("Achou no isrc");
              } else {
                // Data not found in clubecad or isrc
                console.log("Data not found in clubecad or isrc");
                setUsers([]);
                setDataLoaded(true);
              }
            } else {
              console.error("Error fetching data from the API");
              setUsers([]); // Set users to an empty array if both clubecad and isrc calls fail
              setDataLoaded(true);
            }
          }
        } else {
          // Error fetching data from clubecad, try fetching from isrc
          console.log("Error fetching data from clubecad");
          const isrcApiUrlEndpoint = `http://localhost:3000/api/isrc/getUserByCpf?cpf=${cpf}`;
          const isrcResponse = await fetch(isrcApiUrlEndpoint);
    
          if (isrcResponse.ok) {
            const isrcData = await isrcResponse.json();
            if (isrcData.users.length > 0) {
              // Data found in isrc
              setUsers(isrcData.users);
              setDataLoaded(true);
              console.log("Achou no isrc");
            } else {
              // Data not found in clubecad or isrc
              console.log("Data not found in clubecad or isrc");
              setUsers([]);
              setDataLoaded(true);
            }
          } else {
            console.error("Error fetching data from the API");
            setUsers([]); // Set users to an empty array if both clubecad and isrc calls fail
            setDataLoaded(true);
          }
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
        setUsers([]); // Set users to an empty array if an error occurs
        setDataLoaded(true);
      }
    }
    
    getPageData();
  }, [cpf, router.isReady]);

  function formDataToObject(formData: FormData) {
    const object: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });
    return object;
  }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      // Create FormData object from the form inputs
      const formData = new FormData(event.currentTarget);
  
      // Convert FormData to a regular object
      const formDataObject = formDataToObject(formData);
  
      // Check if the user exists in isrc
      const isrcApiUrlEndpoint = `http://localhost:3000/api/isrc/getUserByCpf?cpf=${cpf}`;
      const isrcResponse = await fetch(isrcApiUrlEndpoint);
      const isrcData = await isrcResponse.json();
      const userExistsInIsrc = isrcData.users.length > 0;
  
      if (userExistsInIsrc) {
        // User found in isrc, update the isrc table with the form input values
        const updateIsrcEndpoint = "http://localhost:3000/api/isrc/updateUser";
        try {
          const updateResponse = await fetch(updateIsrcEndpoint, {
            method: "POST",
            body: JSON.stringify(formDataObject), // Convert the object to JSON string
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
          });
  
          if (updateResponse.ok) {
            console.log("isrc data updated successfully");
          } else {
            console.error("Error updating isrc data");
          }
        } catch (error) {
          console.error("Error updating isrc data", error);
        }
      } else {
        // User not found in isrc, create a new user in the isrc table with the form input values
        const createIsrcEndpoint = "http://localhost:3000/api/isrc/createUser";
        try {
          const createResponse = await fetch(createIsrcEndpoint, {
            method: "POST",
            body: JSON.stringify(formDataObject), // Convert the object to JSON string
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
          });
  
          if (createResponse.ok) {
            console.log("New user created in isrc table");
          } else {
            console.error("Error creating new user in isrc table");
          }
        } catch (error) {
          console.error("Error creating new user in isrc table", error);
        }
      }
    } catch (error) {
      console.error("Error fetching data from the API", error);
    }
  };

  return (
    <>
      {dataLoaded ? (
      <form onSubmit={handleSubmit} className="w-100">
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
            <input className="form-control mt-1" id="nomeArtistico" defaultValue={users.length > 0 ? users[0].nart : ''} name="nart" type="text"  maxLength={150}  required />
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cpfuser">CPF:</label>
            <input className="form-control mt-1" id="cpfuser" defaultValue={users.length > 0 ? users[0].cpf : cpf} name="cpf" type="text" required  readOnly/>
            <div className="invalid-feedback">
              Este campo não pode ficar vazio!
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="Email_user">E-mail:</label>
            <input className="form-control mt-1" name="email" defaultValue={users.length > 0 ? users[0].email : ''} type="email" id="Email_user" maxLength={255} required />
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

          <TaxasModal content="Taxa de Emissão"/>
        </section>
        {/* <Musica /> */}
        <Button value="Enviar" />
      
      </form>
       ) : (
        <div>Carregando dados...</div>
      )}
    </>
  );
}
