import { v4 as uuidv4} from 'uuid'

export const siteMap = [
    // SERVIÇOS
    {
        id: 'servicos',
        rootRef:"/servicos",
        href: "/servicos",
        rootPage: "Serviços",
        currentPage: undefined,
    },
    // Isrc
    {
        id: 'isrc',
        rootRef:"/servicos",
        href: "/servicos/isrc",
        rootPage: "Serviços",
        currentPage: "Gerar ISRC - ECAD",
    },
    // Estudio
    {
       id: 'estudio',
       rootRef:"/servicos",
       href: "/servicos/estudio/gravar",
       rootPage: "Serviços",
       currentPage: "Gravar no Estúdio CCB",
    },
    // Melodia
    {
       id: 'melodia',
       rootRef:"/servicos",
       href: "/servicos/estudio/melodia",
       rootPage: "Serviços",
       currentPage: "Confecção de Melodia",
    },
    // Pagamentos
    {
       id:'pagamentos',
       rootRef:"/servicos",
       href: "/servicos/pagamentos",
       rootPage: "Serviços",
       currentPage: "Pagamentos",
    },
    //Reativar
    {
       id: 'reativar',
       rootRef:"/servicos",
       href: "/servicos/reativar",
       rootPage: "Serviços",
       currentPage: "Reativar Conta",
    },
    //Registros
    {
       id: 'registros',
       rootRef:"/servicos",
       href: "/servicos/registrar",
       rootPage: "Serviços",
       currentPage: "Registros",
    },


    // AJUDA
    {
        id: 'ajuda',
        rootRef:"/ajuda",
        href: "/ajuda",
        rootPage: "Ajuda",
        currentPage: undefined,
    },
    // Ajuda Geral
    {
        id: 'ajudaGeral',
        rootRef:"/ajuda",
        href: "/ajuda/ajudaGeral",
        rootPage: "Ajuda",
        currentPage: "Ajuda Geral",
    },
    //Tocar na Rádio
    {
        id: 'tocarNaRadio',
        rootRef:"/ajuda",
        href: "/ajuda/tocarNaRadio",
        rootPage: "Ajuda",
        currentPage: "Tocar na Rádio",
    },
    // Compor uma música
    {
        id: 'comporUmaMusica',
        rootRef:"/ajuda",
        href: "/ajuda/comporUmaMusica",
        rootPage: "Ajuda",
        currentPage: "Compor Uma Música",
    },
    // Direitos Autorais
    {
        id:'direitosAutorais',
        rootRef:"/ajuda",
        href: "/ajuda/direitosAutorais",
        rootPage: "Ajuda",
        currentPage: "Direitos Autorais",
    },
    // Gravadoras
    {
        id:'gravadoras',
        rootRef:"/ajuda",
        href: "/ajuda/gravadoras",
        rootPage: "Ajuda",
        currentPage: "Gravadoras",
    },

    // ASSOCIAR
    // Compositores
    {
        id:'compositores',
        rootRef:"/associar/compositores",
        href: "/associar/compositores",
        rootPage: "Associar",
        currentPage: "Compositores",
    },
    // Bandas
    {
        id:'bandas',
        rootRef:"/associar/compositores",
        href: "/associar/bandas",
        rootPage: "Associar",
        currentPage: "Bandas",
    },
    // Cantores e Duplas
    {
        id:'cantores',
        rootRef:"/associar/compositores",
        href: "/associar/cantores",
        rootPage: "Associar",
        currentPage: "Catores e Duplas",
    },


    // BENEFÍCIOS
    {
        id:'beneficios',
        rootRef:"/beneficios",
        href: "/beneficios",
        rootPage: "Beneficios",
        currentPage: undefined,
    },
    // Carteira de Compositor
    {
        id:'carteiraCompositor',
        rootRef:"/beneficios",
        href: "/beneficios/carteiraCompositor",
        rootPage: "Beneficios",
        currentPage: "Carteira de Compositor",
    },
   
    // Divulgação
    {
        id:'divulgacao',
        rootRef:"/beneficios",
        href: "/beneficios/divulgacao",
        rootPage: "Beneficios",
        currentPage: "Divulgação",
    },
    // Programa Recompensas
    {
        id:'programaRecompensas',
        rootRef:"/beneficios",
        href: "/beneficios/programaRecompensas",
        rootPage: "Beneficios",
        currentPage: "Programa de Recompensas",
    },
    // Quem Somos
    {
        id:'quemSomos',
        rootRef:"/beneficios",
        href: "/beneficios/quemSomos",
        rootPage: "Beneficios",
        currentPage: "Quem Somos?",
    },


    // SALA VIP
    {
        id:'salaVip',
        rootRef:"/salaVip",
        href: "/salaVip",
        rootPage: "Sala VIP",
        currentPage: undefined,
    },
    // Alteração de Cadastro
    {
        id:'alteracaoCadastro',
        rootRef:"/salaVip",
        href: "/salaVip/alteracaoCadastro",
        rootPage: "Sala VIP",
        currentPage: "Alteração de Cadastro",
    },
    // Alteração de Senha
    {
        id:'alteracaoSenha',
        rootRef:"/salaVip",
        href: "/salaVip/alteracaoSenha",
        rootPage: "Sala VIP",
        currentPage: "Alteração de Senha",
    },
    // Recuperação de Senha
    {
        id:'recuperacaoSenha',
        rootRef:"/salaVip",
        href: "/salaVip/recuperacaoSenha",
        rootPage: "Sala VIP",
        currentPage: "Recuperação de Senha",
    },
    // Enviar Letras
    {
        id:'enviarLetras',
        rootRef:"/salaVip",
        href: "/salaVip/enviarLetras",
        rootPage: "Sala VIP",
        currentPage: "Enviar Letras",
    },
    // Enviar Músicas
    {
        id:'enviarMsucias',
        rootRef:"/salaVip",
        href: "/salaVip/enviarMsucias",
        rootPage: "Sala VIP",
        currentPage: "Enviar Músicas",
    },
    // Solicitar Carteira
    {
        id:'solicitarCarteira',
        rootRef:"/salaVip",
        href: "/salaVip/solicitarCarteira",
        rootPage: "Sala VIP",
        currentPage: "Carteira de Compositor",
    },
    // Foto Perfil
    {
        id:'fotoPerfil',
        rootRef:"/salaVip",
        href: "/salaVip/fotoPerfil",
        rootPage: "Sala VIP",
        currentPage: "Enviar Foto de Perfil",
    },


    // COLETÂNEA
    {
        id:'coletanea',
        rootRef:"/coletanea",
        href: "/coletanea",
        rootPage: "Coletânea",
        currentPage: undefined,
    },


    // FESTIVAL
    {
        id:'festival',
        rootRef:"/festival",
        href: "/festival",
        rootPage: "Festival",
        currentPage: undefined,
    },
     // Resultado Música
     {
        id:'resultadoMusica',
        rootRef:"/festival",
        href: "/festival/resultadoMusica",
        rootPage: "Festival",
        currentPage: "Resultado Música",
     },
     // Resultado Poesia
     {
        id:'resultadoPoesia',
        rootRef:"/festival",
        href: "/festival/resultadoPoesia",
        rootPage: "Festival",
        currentPage: "Resultado Poesia",
     },
     // Resultados Anteriores
     {
        id:'resultadosAnteriores',
        rootRef:"/festival",
        href: "/festival/resultadosAnteriores",
        rootPage: "Festival",
        currentPage: "Resultados Anteriores",
     },


     //RADIO
     {
        id:'radioOnline',
        rootRef:"/radio/radioGospel",
        href: "/radio/radioOnline",
        rootPage: "Mudar para Radio Gospel",
        currentPage: "Rádio Online",
     },
     //RADIO GOSPEL
     {
        id:'radioGospel',
        rootRef:"/radio/radioOnline",
        href: "/radio/radioGospel",
        rootPage: "Mudar para Radio Online",
        currentPage: "Rádio Gospel",
     },

     //Whatsapp
     {
        id:'whatsapp',
        href: "https://contate.me/clubedoscompositores" ,
     },
     
]

export function getURL(id:string){
    const item = siteMap.find(el =>{
      return el.id === id
     })
    return item?.href
  }



export const teste =[
  
{
    id:uuidv4(),

    href:`${getURL('isrc')}`,
    rootRef:"/servicos",
    rootPage: "Serviços",
    currentPage: "Gerar ISRC - ECAD",
    category:'servicos',

    card: {
        name: 'isrc',
        idCard:"isrc_card",
        title:"Gerar ISRC/ECAD",
        content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
        imgUrl:'../images/cards/ISRC.jpg',
    }
},

{
    id:uuidv4(),
    href:`${getURL('pagamentos')}`,
    rootRef:"/servicos",
    rootPage: "Serviços",
    currentPage: "Pagamentos",
    category:'servicos',

    card: {
        name:'pagamentos',
        title:"Pagamentos",
        content:"Acesse aqui para Reativar sua conta, fazer pagamentos ou pedir segunda via de boletos.",
        imgUrl:'../images/cards/melody.jpg',
    }
 },

]