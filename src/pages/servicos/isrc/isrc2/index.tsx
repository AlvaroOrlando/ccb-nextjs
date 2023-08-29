import Crumb from "@/components/Crumb";
import MainContainer from "@/components/MainContainer";
import DadosPessois from "../../../../components/Isrc2/Forms/DadosPessoais";
import BaseContainer from "@/components/BaseContainer";

export default function ISRC2(){

    return (
        <>
            <Crumb />
            <MainContainer>
                <h1 className="subtitulosGlobal">
                    Preencha as informações para gerar seu ISRC
                </h1>
                <BaseContainer>
                  <DadosPessois />
                </BaseContainer>
            </MainContainer>
        </>
    )
}

// CREATE TABLE clubecad(
//     nome varchar(30) NOT NULL,
//     nart varchar(30) NOT NULL,
//     cpf varchar(30) NOT NULL,
//     email varchar(30) NOT NULL,
//     telefone varchar(30) NOT NULL,
//     endereco varchar(30) NOT NULL,
//     cidade varchar(30) NOT NULL,
//     estado varchar(30) NOT NULL,
//     cep varchar(30) NOT NULL,
//     PRIMARY KEY (cpf)
// );

//    INSERT INTO clubecad(nome, nart, cpf,email,telefone,endereco,cidade,estado,cep) VALUES ("Alvaro Conde Orlando", "Alvinho", "05559092630","alvarocondeorlando@gmail.com", "013974116662", "Rua Caetano Moratori, 279", "Peruíbe", "SP","11750000");