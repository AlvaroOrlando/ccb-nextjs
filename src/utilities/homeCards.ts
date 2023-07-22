import { v4 as uuidv4} from 'uuid'
const year = new Date().getFullYear()
import { getURL } from "../utilities/siteMap"

export const homeCards = [
    {
        id:uuidv4(),
        idCard:"coletanea_card",
        idImg:"coletanea",
        href:`${getURL('coletanea')}`,
        title:"Coletânea CCB",
        content:"INSCRIÇÕES ABERTAS para a próxima Coletânea do Clube dos Compositores. Confira!",
        imgUrl:'../images/cards/coletanea.jpg',
        category:'coletanea'
    },
    {
        id:uuidv4(),
        idCard:"isrc_card",
        idImg:"isrc",
        href:`${getURL('isrc')}`,
        title:"Gerar ISRC/ECAD",
        content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
        imgUrl:'../images/cards/ISRC.jpg',
        category:'servicos'

    },
    {
        id:uuidv4(),
        idCard:"contato_card",
        idImg:"contato",
        href:`${getURL('whatsapp')}`,
        title:"Atendimento",
        content:"Clique aqui para entrar em contato com o CCB pelo WhatsApp e tire todas as suas dúvidas!",
        imgUrl:'../images/cards/contact.jpg',
        category:'whatsapp'
    },
    {
        id:uuidv4(),
        idCard:"registro_card",
        idImg:"registro",
        href:`${getURL('registros')}`,
        title:"Registro de Músicas",
        content:"Campanha CCB para novos autores: PRIMEIRO REGISTRO GRÁTIS! Clique acima e confira!",
        imgUrl:'../images/cards/license.jpg',
        category:'servicos'
        
    },
    {
        id:uuidv4(),
        idCard:"estudio_card",
        idImg:"estudio",
        href:`${getURL('estudio')}`,
        title:"Estúdio CCB",
        content:"Grave sua DEMO, single ou CD com profissionais qualificados a preços módicos e parcelados.",
        imgUrl:'../images/cards/studio.jpg',
        category:'servicos',
    },
    {
        id:uuidv4(),
        idCard:"melodia_card",
        idImg:"melodia",
        href:`${getURL('melodia')}`,
        title:"O CCB faz a melodia",
        content:"Poetas e Letristas: Têm uma letra bacana que ainda não tem melodia? Deixa com a gente! O CCB faz!",
        imgUrl:'../images/cards/melody.jpg',
        category:'servicos'
    },
    {
        id:uuidv4(),
        idCard:"acesso_card",
        idImg:"acesso",
        href:`${getURL('compositores')}`,
        title:"Acesso Imediato!",
        content:"Clique e em poucos passos obtenha acesso imediato a todos os benefícios do site!",
        imgUrl:'../images/cards/acesso.jpg',
        category:'associar'
    },
    {
        id:uuidv4(),
        idCard:"duvidas_card",
        idImg:"duvidas",
        href:`${getURL('ajuda')}`,
        title:"Dúvidas?",
        content:"Dúvidas sobre o CCB, sobre o funcionamento do site? Clique já e tire suas dúvidas!",
        imgUrl:'../images/cards/duvidas.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"recompensa_card",
        idImg:"reward",
        titleId:"recompensa_title",
        href:`${getURL('programaRecompensas')}`,
        title:"Programa de Fidelidade!",
        content:"Premiamos a fidelidade de nossos sócios CCB! Conheça o nosso Plano de Fidelidade e Recompensa!",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
    {
        id:uuidv4(),
        idCard:"direitos_card",
        idImg:"direitos",
        href:`${getURL('direitosAutorais')}`,
        title:"Direitos Autorais",
        content:"Aqui você encontra tudo o que você precisa saber para proteger suas obras e composições Confira!",
        imgUrl:'../images/cards/copyright.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"isrc_card",
        idImg:"isrc",
        href:`${getURL('isrc')}`,
        title:"Gerar ISRC/ECAD",
        content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
        imgUrl:'../images/cards/ISRC.jpg',
        category:'servicos'
    },
    
    {
        id:uuidv4(),
        idCard:"festival_card",
        idImg:"festivais",
        href:`${getURL('festival')}`,
        title:`Festival CCB ${year}`,
        content:"Saiu o resultado! Entre agora para ver o top 10 de Música e Poesia.",
        imgUrl:'../images/cards/festival2023.jpg',
        category:'festival'
    },
]

export const servicosCard = [
    {
        id:uuidv4(),
        idCard:"isrc_card",
        idImg:"isrc",
        href:`${getURL('isrc')}`,
        title:"Gerar ISRC/ECAD",
        content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
        imgUrl:'../images/cards/ISRC.jpg',
        category:'servicos'
    },
    {
        id:uuidv4(),
        idCard:"registro_card",
        idImg:"registro",
        href:`${getURL('registros')}`,
        title:"Registro de Músicas",
        content:"Campanha CCB para novos autores: PRIMEIRO REGISTRO GRÁTIS! Clique acima e confira!",
        imgUrl:'../images/cards/license.jpg',
        category:'servicos'
    },
    {
        id:uuidv4(),
        idCard:"estudio_card",
        idImg:"estudio",
        href:`${getURL('estudio')}`,
        title:"Estúdio CCB",
        content:"Grave sua DEMO, single ou CD com profissionais qualificados a preços módicos e parcelados.",
        imgUrl:'../images/cards/studio.jpg',
        category:'servicos',
    },
    {
        id:uuidv4(),
        idCard:"melodia_card",
        idImg:"melodia",
        href:`${getURL('melodia')}`,
        title:"O CCB faz a melodia",
        content:"Poetas e Letristas: Têm uma letra bacana que ainda não tem melodia? Deixa com a gente! O CCB faz!",
        imgUrl:'../images/cards/melody.jpg',
        category:'servicos'
    },
    {
        id:uuidv4(),
        idCard:"pagamentos_card",
        idImg:"pagamentos",
        href:`${getURL('pagamentos')}`,
        title:"Pagementos",
        content:"Acesse aqui para Reativar sua conta, fazer pagamentos ou pedir segunda via de boletos.",
        imgUrl:'../images/cards/melody.jpg',
        category:'servicos'
    },
]
            
export const beneficiosCards = [
    {
        id:uuidv4(),
        idCard:"quemSomos_card",
        idImg:"quemSomos",
        titleId:"quemSomos_title",
        href:`${getURL('quemSomos')}`,
        title:"Quem somos?",
        content:"Conheça o Clube dos Compositores do Brasil!",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
    {
        id:uuidv4(),
        idCard:"carteira",
        idImg:"carteira",
        titleId:"carteira_title",
        href:`${getURL('carteiraCompositor')}`,
        title:"Carteira de Compositor",
        content:"Clique aqui para pedir sua carteira de compositor, enviar foto para ela, etc.",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
    {
        id:uuidv4(),
        idCard:"divulgacao",
        idImg:"divulgacao",
        titleId:"divulgacao_title",
        href:`${getURL('divulgacao')}`,
        title:"Divulgação",
        content:"Saiba como divulgamos seu trabalho!",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
    {
        id:uuidv4(),
        idCard:"radioOnline_card",
        idImg:"radioOnline",
        titleId:"radioOnline_title",
        href:`${getURL('radioOnline')}`,
        title:"Radio Online",
        content:"Suas músicas na Radionline CCB!",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
    {
        id:uuidv4(),
        idCard:"radioGospel_card",
        idImg:"radioGospel",
        titleId:"radioGospel_title",
        href:`${getURL('radioGospel')}`,
        title:"Rádio Gospel",
        content:"Suas músicas na Radionline CCB!",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
    {
        id:uuidv4(),
        idCard:"recompensa_card",
        idImg:"reward",
        titleId:"recompensa_title",
        href:`${getURL('programaRecompensas')}`,
        title:"Programa de Fidelidade!",
        content:"Premiamos a fidelidade de nossos sócios CCB! Conheça o nosso Plano de Fidelidade e Recompensa!",
        imgUrl:'../images/cards/trofeo.jpg',
        category:'beneficios'
    },
] 

export const ajudaCards = [
    {
        id:uuidv4(),
        idCard:"duvidas_card",
        idImg:"duvidas",
        href:`${getURL('ajuda')}`,
        title:"Dúvidas?",
        content:"Dúvidas sobre o CCB, sobre o funcionamento do site? Clique já e tire suas dúvidas!",
        imgUrl:'../images/cards/duvidas.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"tocarNaRadio_card",
        idImg:"tocarNaRadio",
        href:`${getURL('tocarNaRadio')}`,
        title:"Tocar Na Rádio?",
        content:"Como tocar sua música na Radionline CCB ou na Radionline Gospel",
        imgUrl:'../images/cards/duvidas.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"comporUmaMusica_card",
        idImg:"comporUmaMusica",
        href:`${getURL('comporumaMusica')}`,
        title:"Compor uma música?",
        content:"Para todos aqueles que buscam aprofundar-se na arte da composição musical",
        imgUrl:'../images/cards/duvidas.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"comporUmaMusica_card",
        idImg:"gravadoras",
        href:`${getURL('gravadoras')}`,
        title:"Gravadoras",
        content:"Você é um autor e está procurando por uma gravadora?",
        imgUrl:'../images/cards/duvidas.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"direitos_card",
        idImg:"direitos",
        href:`${getURL('coletanea')}`,
        title:"Direitos Autorais",
        content:"Aqui você encontra tudo o que você precisa saber para proteger suas obras e composições Confira!",
        imgUrl:'../images/cards/copyright.jpg',
        category:'ajuda'
    },
    {
        id:uuidv4(),
        idCard:"contato_card",
        idImg:"contato",
        href:`${getURL('whatsapp')}`,
        title:"Atendimento",
        content:"Clique aqui para entrar em contato com o CCB pelo WhatsApp e tire todas as suas dúvidas!",
        imgUrl:'../images/cards/contact.jpg',
        category:'whatsapp'
    },
]

     
         