import { v4 as uuidv4} from 'uuid'
const year = new Date().getFullYear()
import melody from "../assets/images/melody.jpg"


export const homeCards = [
    {
        id:uuidv4(),
        idCard:"coletanea_card",
        idImg:"coletanea",
        href:"/coletanea",
        title:"Coletânea CCB",
        content:"NSCRIÇÕES ABERTAS para a próxima Coletânea do Clube dos Compositores. Confira!",
        imgUrl:'../images/cards/coletanea.jpg'
    },
    {
        id:uuidv4(),
        idCard:"isrc_card",
        idImg:"isrc",
        href:"/servicos/isrc",
        title:"Gerar ISRC/ECAD",
        content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
        imgUrl:'../images/cards/ISRC.jpg'
    },
    {
        id:uuidv4(),
        idCard:"contato_card",
        idImg:"contato",
        href:"https://contate.me/clubedoscompositores",
        title:"Atendimento",
        content:"Clique aqui para entrar em contato com o CCB pelo WhatsApp e tire todas as suas dúvidas!",
        imgUrl:'../images/cards/contact.jpg'
    },
    {
        id:uuidv4(),
        idCard:"registro_card",
        idImg:"registro",
        href:"servicos/registrar",
        title:"Registro de Músicas",
        content:"Campanha CCB para novos autores: PRIMEIRO REGISTRO GRÁTIS! Clique acima e confira!",
        imgUrl:'../images/cards/license.jpg'
    },
    {
        id:uuidv4(),
        idCard:"estudio_card",
        idImg:"estudio",
        href:"/servicos/gravar",
        title:"Estúdio CCB",
        content:"Grave sua DEMO, single ou CD com profissionais qualificados a preços módicos e parcelados.",
        imgUrl:'../images/cards/studio.jpg'
    },
    {
        id:uuidv4(),
        idCard:"melodia_card",
        idImg:"melodia",
        href:"servicos/melodia",
        title:"O CCB faz a melodia",
        content:"Poetas e Letristas: Têm uma letra bacana que ainda não tem melodia? Deixa com a gente! O CCB faz!",
        imgUrl:'../images/cards/melody.jpg'
    },
    {
        id:uuidv4(),
        idCard:"acesso_card",
        idImg:"acesso",
        href:"/associar/compositores",
        title:"Acesso Imediato!",
        content:"Clique e em poucos passos obtenha acesso imediato a todos os benefícios do site!",
        imgUrl:'../images/cards/acesso.jpg'

    },
    {
        id:uuidv4(),
        idCard:"duvidas_card",
        idImg:"duvidas",
        href:"/ajuda",
        title:"Dúvidas?",
        content:"Dúvidas sobre o CCB, sobre o funcionamento do site? Clique já e tire suas dúvidas!",
        imgUrl:'../images/cards/duvidas.jpg'
    },
    {
        id:uuidv4(),
        idCard:"recompensa_card",
        idImg:"reward",
        titleId:"recompensa_title",
        href:"beneficios/programaRecompensa",
        title:"Programa de Fidelidade!",
        content:"Premiamos a fidelidade de nossos sócios CCB! Conheça o nosso Plano de Fidelidade e Recompensa!",
        imgUrl:'../images/cards/trofeo.jpg'
    },
    {
        id:uuidv4(),
        idCard:"direitos_card",
        idImg:"direitos",
        href:"ajuda/direitosAutorais",
        title:"Direitos Autorais",
        content:"Aqui você encontra tudo o que você precisa saber para proteger suas obras e composições Confira!",
        imgUrl:'../images/cards/copyright.jpg'
    },
    {
        id:uuidv4(),
        idCard:"isrc_card",
        idImg:"isrc",
        href:"/servicos/isrc",
        title:"Gerar ISRC/ECAD",
        content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
        imgUrl:'../images/cards/ISRC.jpg'
    },
    
    {
        id:uuidv4(),
        idCard:"festival_card",
        idImg:"festivais",
        href:"/festival",
        title:`Festival CCB ${year}`,
        content:"Saiu o resultado! Entre agora para ver o top 10 de Música e Poesia.",
        imgUrl:'../images/cards/festival2023.jpg'
    },

]