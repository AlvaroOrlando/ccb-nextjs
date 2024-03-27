import Crumb from "@/components/Crumb";
import Input from "@/components/Global/Input/input";
import InputGroup from "@/components/Global/InputGroup/inputGroup";

export default function RadioGospel(){
    return (
        <>
            <Crumb />
            <section className="MainContainer">
                <h1>Rádio Gospel </h1>
                <InputGroup label="Clique aqui" type="radio" id="1" />
                <InputGroup label="Clique aqui" type="radio" id="2" />
                <InputGroup label="Clique aqui" type="radio" id="3" />

                <InputGroup label="Clique aqui" type="checkbox" id="4" />
                <InputGroup label="Clique aqui" type="checkbox" id="5" />
            </section>
        </>
    )
}