import { teste } from "../../utilities/siteMap"

export default function Teste(){

        const servicos = teste.filter(item =>{
            return item.category === 'servicos' 
        })

    return (
        <>
        <h1>Hello</h1>

        {teste.map(el => {
            return (
            <ul key={el.id}>
                <li>{el.card.content}</li>
            </ul>
            )
        })}
        </>
    )
}

