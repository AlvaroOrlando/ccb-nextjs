import Painel from "@/components/Painel"
import { ChangeEvent, useState } from "react"
import { Form } from "react-bootstrap"

export default function Musica(){
    interface objType {
        id:string,
        title:string,
        name:string,
        inputId:string,
        selectName:string,
        selectId:string,
        inputHtmlFor:string,
        selectHtmlFor:string
    }

const inicialObj = {
        id:'musica1',
        title: 'Nome da Música 1',
        name:'musica1',
        inputId:'musica135',
        selectName:'select1',
        selectId:'select1',
        inputHtmlFor:'musica135',
        selectHtmlFor:'select1'
}
    const [obj, setObj] = useState<objType[]>([inicialObj])


    function createNewObj(value:number){
       const newObj = {
        id:`musica${value}`,
        title: `Nome da Música ${value}`,
        name:`musica${value}`,
        inputId:`musica${value}35`,
        selectName:`select${value}`,
        selectId:`select${value}`,
        inputHtmlFor:`musica${value}35`,
        selectHtmlFor:`select${value}`
       }
       setObj(state => [...state, newObj])
    }
 


    const [selectValue, setSelectValue] = useState(1);  
    const list = [
        {id: 1, name: '1'},
        {id: 2, name: '2'},
        {id: 3, name: '3'},
        {id: 4, name: '4'},
    ];
    
  const handleChange = function(e:ChangeEvent<HTMLSelectElement>){
    e.preventDefault()
    const value = parseFloat(e.target.value)
    setSelectValue(value)
    value === 1 && setObj([inicialObj])
    if( value === 2){
        setObj([inicialObj])
        createNewObj(value)
    }
    if( value === 3){
        setObj([inicialObj])
        createNewObj(2)
        createNewObj(value)
    }
    if(value === 4){
        setObj([inicialObj])
        createNewObj(2)
        createNewObj(3)
        createNewObj(value)
    }

  }

    return (
        <>
            <Painel content="MÚSICAS"/>
            <div className="w-100" style={{padding:"1rem", backgroundColor:"white"}}>
                <div className="mt-3 w-100">
                    <label htmlFor="qtAutores">Quantidade de Músicas</label>
                    <select 
                        className="form-select mt-1" 
                        id="qtMusicas" value={selectValue} 
                        onChange={handleChange}
                    >
                        {list.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}    
                    </select>
                </div>
                {obj.map(item => { 
                    return (
                        <div key={item.id} id={item.id}>
                            <div className="form-group mt-4">
                                <label htmlFor={item.inputHtmlFor}>{item.title}</label>
                                <input className="form-control mt-1" name={item.name} type="text" id={item.inputId} required/>
                            </div>

                            <div className="mt-3">
                                <label htmlFor={item.selectHtmlFor}>Ritmo/Estilo da Música</label>
                                <Form.Select className="mt-1" name={item.selectName} id={item.selectId}>
                                    <option disabled>----------------------------------------</option>
                                    <option disabled>Mais populares</option>
                                    <option disabled>----------------------------------------</option>
                                    <option value="1">Sertanejo </option>
                                    <option value="2">Gospel</option>
                                    <option value="3">MPB</option>
                                    <option value="4">Pagode</option>
                                    <option value="5">Pop</option>
                                    <option value="6">Regional</option>
                                    <option value="7">Rock</option>
                                    <option value="8">Samba</option>
                                    <option value="9">Dance Music</option>
                                    <option disabled>----------------------------------------</option>
                                    <option disabled>Outros, por ordem alfabética</option>
                                    <option disabled>----------------------------------------</option>
                                    <option>Alternativo</option>
                                    <option value="10">Arrocha </option>
                                    <option value="11">Axé</option>
                                    <option value="12">Bossa Nova </option>
                                    <option value="39">Blues </option>
                                    <option value="13">Choro </option>
                                    <option value="14">Eletr&ocirc;nica </option>
                                    <option value="15">Fox </option>
                                    <option value="16">Forr&oacute;</option>
                                    <option value="17">Funk</option>
                                    <option value="18">Hardcore </option>
                                    <option value="18">Hip-hop </option>
                                    <option value="20">Indie</option>
                                    <option value="21">Jazz </option>
                                    <option value="22">Marchinha de carnaval </option>
                                    <option value="23">Metal</option>
                                    <option value="24">Partido Alto </option>
                                    <option value="25">Polca</option>
                                    <option value="26">Punk </option>
                                    <option value="27">R&B </option>
                                    <option value="28">Rap </option>
                                    <option value="29">Reggae </option>
                                    <option value="30">Salsa </option>
                                    <option value="31">Bolero </option>
                                    <option value="32">Tango </option>
                                    <option value="33">Twist</option>
                                    <option value="34">Vaner&atilde;o</option>
                                    <option value="35">World Music</option>
                                    <option value="36">Xote</option>
                                    <option value="37">Fado</option>
                                    <option value="38">Outro estilo nao listado...</option>
                                    <option disabled>----------------------------------------</option>
                                </Form.Select>
                            </div>

                            <div className="mt-3">
                                <label htmlFor="check1">Tipo de Serviço</label>
                                <Form.Select defaultValue="1" className="mt-1" name="check1" id="check1">
                                    <option value="1">Gerar ISRC/ECAD</option>
                                </Form.Select>
                            </div>
                        </div>
                    )
                }) }
            </div> 
        </>
    )
}