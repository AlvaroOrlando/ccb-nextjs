import { v4 as uuidv4} from 'uuid'
import { siteMap } from './siteMap'

import { ajuda, associar, beneficios, coletanea, festival, radio, salaVip, servicos, searchArtist } from "./siteMap"


export const info = [
    // SERVIÇOS
    {
        id:uuidv4(),
        name: 'servicos',
        href:`${getURL('servicos')}`,
        rootRef:`${servicos}`,
        rootPage: "Serviços",
        currentPage: 'home',
        category:'',
        subcategory:'',
        card:undefined,
    },
    // Isrc
    {
        id:uuidv4(),
        name: 'isrc',
        href:`${getURL('isrc')}`,
        rootRef:`${servicos}`,
        rootPage: "Serviços",
        currentPage: "Gerar ISRC - ECAD",
        category:'servicos',
        subcategory:'',
    
        card:{
            idCard:"isrc_card",
            title:"Gerar ISRC/ECAD",
            content:"Gere o Código ISRC junto ao ECAD que irá controlar os Direitos Autorais de suas músicas.",
            imgUrl:'../images/cards/ISRC.jpg',
            idImg:'isrc'
        }
    },
    //Isrc2
    {
        id:uuidv4(),
        name:'isrc2',
        href:`${getURL('isrc2')}`,
        rootRef:`${servicos}/isrc`,
        rootPage: "ISRC",
        currentPage: "Preencha seus dados",
        category:'',
        subcategory:'',
    },
    // Estudio
    {
        id: uuidv4(),
        name: 'estudio',
        href:`${getURL('estudio')}`,
        rootRef:`${servicos}`,
        rootPage: "Serviços",
        currentPage: "Gravar no Estúdio CCB",
        category:'servicos',
        subcategory:'estudio',
    
        card: {
            idCard:"estudio_card",
            idImg:"estudio",
            title:"Estúdio CCB",
            content:"Grave sua DEMO, single ou CD com profissionais qualificados a preços módicos e parcelados.",
            imgUrl:'../images/cards/studio.jpg',
        }
    },
     // Melodia
     {
        id: uuidv4(),
        name: 'melodia',
        rootRef:`${servicos}`,
        href:`${getURL('melodia')}`,
        rootPage: "Serviços",
        currentPage: "Confecção de Melodia",
        category:'servicos',
        subcategory:'estudio',
    
        card: {
            idCard:"melodia_card",
            idImg:"melodia",
            title:"Confecção de Melodia",
            content:"Poetas e Letristas: Têm uma letra bacana que ainda não tem melodia? Deixa com a gente! O CCB faz!",
            imgUrl:'../images/cards/melody.jpg',
        }
    },
    //Registros
    {
        id:uuidv4(),
        name: 'registrar',
        rootRef:`${servicos}`,
        href:`${getURL('registrar')}`,
        rootPage: "Serviços",
        currentPage: "Registros",
        category:'servicos',
        subcategory:'',
    
        card: {
            idCard:"registro_card",
            idImg:"registro",
            title:"Registrar Obras",
            content:"Registro de músicas, poesia, Roteiro, livro, trabalho",
            imgUrl:'../images/cards/studio.jpg',
        }
    },
        // Pagamentos
    {
    
        id:uuidv4(),
        name:'pagamentos',
        href:`${getURL('pagamentos')}`,
        rootRef:`${servicos}`,
        rootPage: "Serviços",
        currentPage: "Pagamentos",
        category:'servicos',
        subcategory:'',
        
        card: {
            idCard:"pagamentos_card",
            idImg:"pagamentos",
            title:"Pagamentos",
            content:"Acesse aqui para Reativar sua conta, fazer pagamentos ou pedir segunda via de boletos.",
            imgUrl:'../images/cards/melody.jpg',
        }
    },
     //Reativar
     {
        id:uuidv4(),
        name: 'reativar',
        rootRef:`${servicos}`,
        href:`${getURL('reativar')}`,
        rootPage: "Serviços",
        currentPage: "Reativar Conta",
        category:'servicos',
        subcategory:'',
        
        card:{
            idCard:"reativar_card",
            idImg:"reativar",
            title:"Reativar Conta",
            content:"Clique aqui para reativar sua conta!",
            imgUrl:'../images/cards/melody.jpg',
        }
    },
      // Recuperação Senha
      {
        id:uuidv4(),
        name:'recuperacaoSenha',
        rootRef:`${servicos}`,
        href: `${getURL('recuperacaoSenha')}`,
        rootPage: "Serviços",
        currentPage: "Trocar Senha",
        category:'servicos',
        subcategory:'',
    
        card: {
            idCard:"recuperacaoSenha_card",
            idImg:"recuperacaoSenha",
            title:"Recuperar sua SENHA",
            content:"Esqueceu a sua senha? Clique aqui para recuperá-la!",
            imgUrl:'',
        }
    },
     //  BENEFÍCIOS
    //  {
    //     id:uuidv4(),
    //     name: 'beneficios',
    //     href:`${getURL('beneficios')}`,
    //     rootRef:`${beneficios}`,
    //     rootPage: "Benefícios",
    //     currentPage: undefined,
    //     category:undefined,
    //     subcategory:'',
    //     card:undefined,
    // },
    // Quem Somos
    {
        id:uuidv4(),
        name: 'quemSomos',
        rootRef:`${beneficios}`,
        href:`${getURL('quemSomos')}`,
        rootPage: "Benefícios",
        currentPage: "Quem Somos?",
        category:'beneficios',
        subcategory:'',
    
        card: {
            idCard:"quemSomos_card",
            idImg:"quemSomos",
            title:"Quem somos?",
            content:"Conheça o Clube dos Compositores do Brasil!",
            imgUrl:'../images/cards/trofeo.jpg',
        }
    },
    // Carteira de Compositor
    {
        id:uuidv4(),
        name: 'carteira',
        href:`${getURL('carteiraCompositor')}`,
        rootRef:`${beneficios}`,
        rootPage: "Benefícios",
        currentPage: "Carteira de Compositor",
        category:'beneficios',
        subcategory:'',
    
        card:{
            idCard:"carteira_card",
            idImg:"carteira",
            title:"Carteira de Compositor",
            content:"Clique aqui para pedir sua carteira de compositor, enviar foto para ela, etc.",
            imgUrl:'../images/cards/trofeo.jpg',
        }
    },
     // Divulgação
     {
        id:uuidv4(),
        name:'divulgacao',
        href:`${getURL('divulgacao')}`,
        rootRef:`${beneficios}`,
        rootPage: "Benefícios",
        currentPage: "Divulgação",
        category:'beneficios',
        subcategory:'',
    
        card: {
            idCard:"divulgacao_card",
            idImg:"divulgacao",
            title:"Divulgação",
            content:"Saiba como divulgamos seu trabalho!",
            imgUrl:'../images/cards/trofeo.jpg',
        }
    },
    // Radio Online
    {
        id:uuidv4(),
        name:'radioOnline',
        href:`${getURL('radioOnline')}`,
        rootRef:`${radio}/radioGospel`,
        rootPage: "Mudar para Radio Gospel",
        currentPage: "Rádio Online",
        category:'beneficios',
        subcategory:'',
        
        card: {
            idCard:"radioOnline_card",
            idImg:"radioOnline",
            title:"Radio Online",
            content:"Suas músicas na Radionline CCB!",
            imgUrl:'../images/cards/trofeo.jpg',
        }
    },
    // Rádio Gospel
    {
        id:uuidv4(),
        name: 'radioGospel',
        rootRef:`${radio}/radioOnline`,
        href:`${getURL('radioGospel')}`,
        rootPage: "Mudar para Radio Online",
        currentPage: "Rádio Gospel",
        category:'beneficios',
        subcategory:'',
    
        card: {
            idCard:"radioGospel_card",
            idImg:"radioGospel",
            title:"Rádio Gospel",
            content:"Suas músicas na Radionline CCB!",
            imgUrl:'../images/cards/trofeo.jpg',
        }
    },
    // Programa de Recompensas
    {
        id:uuidv4(),
        name:'recompensa',
        href:`${getURL('programaRecompensas')}`,
        rootRef:`${beneficios}`,
        rootPage: "Benefícios",
        currentPage: "Programa de Fidelidade",
        category:'beneficios',
        subcategory:'',
    
        card: {
            idCard:"recompensa_card",
            idImg:"reward",
            title:"Programa de Fidelidade!",
            content:"Premiamos a fidelidade de nossos sócios CCB! Conheça o nosso Plano de Fidelidade e Recompensa!",
            imgUrl:'../images/cards/trofeo.jpg',
        }
    },
    // AJUDA
    {
        id:uuidv4(),
        name: 'ajuda',
        rootRef:`${ajuda}`,
        href: `${getURL('ajuda')}`,
        rootPage: "Ajuda",
        currentPage: 'ajuda',
        category:'ajuda',
        subcategory:'',
    
        card : {
            title:"Dúvidas?",
            idCard:"rajuda_card",
            idImg:"ajuda",
            content:"Dúvidas sobre o CCB, sobre o funcionamento do site? Clique já e tire suas dúvidas!",
            imgUrl:'../images/cards/duvidas.jpg',
        }
    },
      // Ajuda Geral
      {
        id:uuidv4(),
        name:'ajudaGeral',
        rootRef:`${ajuda}`,
        href: `${getURL('ajudaGeral')}`,
        rootPage: "Ajuda",
        currentPage: "Ajuda Geral",
        category:'ajuda',
        subcategory:'',
    
        card: {
            idCard:"ajudaGeral_card",
            idImg:"ajudaGeral",
            title:"Ajuda Geral",
            content:"Ajuda Geral",
            imgUrl:'../images/cards/duvidas.jpg',
        }
    },
    //Tocar na Rádio
    {
        id:uuidv4(),
        name:'tocarNaRadio',
        rootRef:`${ajuda}`,
        href:`${getURL('tocarNaRadio')}`,
        rootPage: "Ajuda",
        currentPage: "Tocar na Rádio",
        category:'ajuda',
        subcategory:'',
    
        card: {
            idCard:"tocarNaRadio_card",
            idImg:"tocarNaRadio",
            title:"Tocar Na Rádio?",
            content:"Como tocar sua música na Radionline CCB ou na Radionline Gospel",
            imgUrl:'../images/cards/duvidas.jpg',
        }
    },
      // Compor uma música
      {
        id:uuidv4(),
        name:'comporUmaMusica',
        rootRef:`${ajuda}`,
        href:`${getURL('comporUmaMusica')}`,
        rootPage: "Ajuda",
        currentPage: "Compor Uma Música",
        category:'ajuda',
        subcategory:'',
    
        card: {
            idCard:"comporUmaMusica_card",
            idImg:"comporUmaMusica",
            title:"Compor uma música?",
            content:"Para todos aqueles que buscam aprofundar-se na arte da composição musical",
            imgUrl:'../images/cards/duvidas.jpg',
        }
    },
     // Direitos Autorais
     {
        id:uuidv4(),
        name:'direitosAutorais',
        rootRef:`${ajuda}`,
        href:`${getURL('direitosAutorais')}`,
        rootPage: "Ajuda",
        currentPage: "Direitos Autorais",
        category:'ajuda',
        subcategory:'',
    
        card: {
            idCard:"direitosAutorais_card",
            idImg:"direitosAutorais",
            title:"Direitos Autorais",
            content:"Aqui você encontra tudo o que você precisa saber para proteger suas obras e composições Confira!",
            imgUrl:'../images/cards/copyright.jpg',
        }
    },
    // Gravadoras
    {
        id:uuidv4(),
        name:'gravadoras',
        rootRef:`${ajuda}`,
        href:`${getURL('gravadoras')}`,
        rootPage: "Ajuda",
        currentPage: "Gravadoras",
        category:'ajuda',
        subcategory:'',
        
        card: {
            idCard:"gravadoras_card",
            idImg:"gravadoras",
            title:"Gravadoras",
            content:"Você é um autor e está procurando por uma gravadora?",
            imgUrl:'../images/cards/duvidas.jpg',
        }
    },
       //  FESTIVAIS
       {
        id:uuidv4(),
        name: 'festival',
        rootRef:`${festival}`,
        href:`${getURL('inscricoes')}`,
        rootPage: "Festival",
        currentPage: 'Festival 2023',
        category: 'festival',
        subcategory:'',
    
        card: {
            idCard:"festival_card",
            idImg:"festival",
            title:"Festival",
            content:"Inscrições Encerradas",
            imgUrl:'',
        }
    }, // Resultado Música
    {
        id:uuidv4(),
        name:'resultadoMusica',
        rootRef:`${festival}`,
        href:`${getURL('resultadoMusica')}`,
        rootPage: "Festival",
        currentPage: "Resultado Música",
        category:'festival',
        subcategory:'',
    
        card: {
            idCard:"resultadoMusica_card",
            idImg:"resultadoMusica",
            title:"Resultado Musica",
            content:"Resultado Música",
            imgUrl:'',
        }
    },
     // Resultado Poesia
     {
        id:uuidv4(),
        name:'resultadoPoesia',
        rootRef:`${festival}`,
        href:`${getURL('resultadoPoesia')}`,
        rootPage: "Festival",
        currentPage: "Resultado Poesia",
        category:'festival',
        subcategory:'',
    
        card: {
            idCard:"resultadoPoesia_card",
            idImg:"resultadoPoesia",
            title:"Resultado Poesia",
            content:"Resultado Poesia",
            imgUrl:'',
        }
    },
      // Resultados Anteriores
      {
        id:uuidv4(),
        name:'resultadosAnteriores',
        rootRef:`${festival}`,
        href:`${getURL('resultadosAnteriores')}`,
        rootPage: "Festival",
        currentPage: "Resultados Anteriores",
        category:'festival',
        subcategory:'',
    
        card: {
            idCard:"resultadosAnteriores_card",
            idImg:"resultadosAnteriores",
            title:"Resultados Anteriores",
            content:"Resultados Anteriores",
            imgUrl:'',
        }
    },
     // CONTATO
     {
        id:uuidv4(),
        name:'contato',
        href:`${getURL('whatsapp')}`,
        rootRef:` `,
        rootPage: "contato",
        currentPage: "contato",
        category:'contato',
        subcategory:'',
    
        card: {
            idCard:"contato_card",
            idImg:"contato",
            title:"Atendimento",
            content:"Clique aqui para entrar em contato com o CCB pelo WhatsApp e tire todas as suas dúvidas!",
            imgUrl:'../images/cards/contact.jpg',
        }
    },
    
    // COLETÂNEA
    {
        id:uuidv4(),
        name:'coletanea',
        rootRef:`${coletanea}`,
        href: `${getURL('coletanea')}`,
        rootPage: "Coletânea",
        currentPage: "Coletânea",
        category:'coletanea',
        subcategory:'',
    
        card: {
            idCard:"coletanea_card",
            idImg:"coletanea",
            title:"Coletânea",
            content:"INSCRIÇÕES ABERTAS para a próxima Coletânea do Clube dos Compositores. Confira!",
            imgUrl:'',
        }
    },
     // ASSOCIAR
    // Associar Compositores
    {
        id:uuidv4(),
        name:'associar',
        rootRef:`${associar}/compositores`,
        href: `${getURL('compositores')}`,
        rootPage: "Associar ao CCB",
        currentPage: "Compositores",
        category:'associar',
        subcategory:'',
    
        card: {
            idCard:"associar_card",
            idImg:"associar_card",
            title:"Associar",
            content:"Associar",
            imgUrl:'../images/cards/duvidas.jpg',
        }
    },
    // Associar Bandas
    {
        id:uuidv4(),
        name:'associarBandas',
        rootRef:`${associar}/compositores`,
        href: `${getURL('bandas')}`,
        rootPage: "Associar ao CCB",
        currentPage: "Bandas",
        category:'associar',
        subcategory:'',
    
        card: {
            idCard:"associarBandas_card",
            idImg:"associarBandas_card",
            title:"Associar Bandas",
            content:"Associar Bandas",
            imgUrl:'',
        }
    },
    // Associar Cantores e Duplas
    {
        id:uuidv4(),
        name:'associarCantores',
        rootRef:`${associar}/compositores`,
        href: `${getURL('cantores')}`,
        rootPage: "Associar ao CCB",
        currentPage: "Cantores e Duplas",
        category:'associar',
        subcategory:'',
    
        card: {
            idCard:"associarCantores_card",
            idImg:"associarCabtores_card",
            title:"Associar Cantores e Duplas",
            content:"Associar Cantores e Duplas",
            imgUrl:'',
        }
    },
        // SALA VIP
        {
            id:uuidv4(),
            name:'salaVip',
            rootRef:`/`,
            href: `${getURL('salaVip')}`,
            rootPage: "Home",
            currentPage: "Sala VIP",
            category:'',
            subcategory:'',
        
            card: undefined
        },
    // Carteira Compositor
    {
        id:uuidv4(),
        name:'carteiraCompositor',
        rootRef:`${salaVip}/carteiraCompositor`,
        href: `${getURL('carteiraCompositor')}`,
        rootPage: "Sala VIP",
        currentPage: "Carteira de Compositor",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"carteiraCompositor_card",
            idImg:"carteiraCompositor",
            title:"Carteira de Compositor",
            content:"Clique aqui para pedir sua carteira de compositor, enviar foto para ela, etc.",
            imgUrl:'',
        }
    },
    // Fotos
    {
        id:uuidv4(),
        name:'fotos',
        rootRef:`${salaVip}/fotos`,
        href: `${getURL('fotos')}`,
        rootPage: "Sala VIP",
        currentPage: "Enviar e Trocar Fotos",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"fotos_card",
            idImg:"fotos",
            title:"Enviar e Trocar Fotos",
            content:"Envie quantas fotos desejar e guarde grátis no CCB. Troque aqui sua Foto do PERFIL.",
            imgUrl:'',
        }
    },
    // Enviar Músicas (Rádio Online)
    {
        id:uuidv4(),
        name:'musicas',
        rootRef:`${salaVip}/musicas`,
        href: `${getURL('musicas')}`,
        rootPage: "Sala VIP",
        currentPage: "Enviar Músicas",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"musicas_card",
            idImg:"musicas",
            title:"Enviar Músicas",
            content:"Envie músicas e vídeos para sua Página, Radionline e ouça no mesmo instante!",
            imgUrl:'',
        }
    },
    // Letras
    {
        id:uuidv4(),
        name:'letras',
        rootRef:`${salaVip}/letras`,
        href: `${getURL('letras')}`,
        rootPage: "Sala VIP",
        currentPage: "Enviar Letras de Músicas",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"letras_card",
            idImg:"letras",
            title:"Enviar Letras de Músicas",
            content:"Envie letras e poemas. Elas aparecerão quando suas músicas tocarem.",
            imgUrl:'',
        }
    },
    // Perfil
    {
        id:uuidv4(),
        name:'perfil',
        rootRef:`${salaVip}/perfil`,
        href: `${getURL('perfil')}`,
        rootPage: "Sala VIP",
        currentPage: "Alterar Perfil",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"letras_card",
            idImg:"letras",
            title:"Alterar o seu PERFIL",
            content:"Mantenha sua página atualizada com seu perfil, contato, agenda, carreira.",
            imgUrl:'',
        }
    },
    // Alteração Senha
    {
        id:uuidv4(),
        name:'alteracaoSenha',
        rootRef:`${salaVip}/alteracaoSenha`,
        href: `${getURL('alteracaoSenha')}`,
        rootPage: "Sala VIP",
        currentPage: "Trocar Senha",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"alteracaoSenha_card",
            idImg:"alteracaoSenha",
            title:"Trocar a sua SENHA",
            content:"Troque sua senha fornecida pelo CCB por uma nova, de sua escolha.",
            imgUrl:'',
        }
    },
    // Cadastro
    {
        id:uuidv4(),
        name:'cadastro',
        rootRef:`${salaVip}/cadastro`,
        href: `${getURL('cadastro')}`,
        rootPage: "Sala VIP",
        currentPage: "Alterar Cadastro",
        category:'salaVip',
        subcategory:'',
    
        card: {
            idCard:"cadastro_card",
            idImg:"cadastro",
            title:"TAlterar CADASTRO",
            content:"Forma e dia de pagamento, nome artístico, endereço ou telefone.",
            imgUrl:'',
        }
    },
    {
        id:uuidv4(),
        name:'searchArtist',
        rootRef:`/`,
        href: `${getURL('searchArtist')}`,
        rootPage: "Home",
        currentPage:'Procurar Artistas',
        category:'',
        subcategory:'',
        card:undefined,
    },
    

] 
    
export function getURL(id:string){
    const item = siteMap.find(el =>{
        return el.id === id
    })
    return item?.href
}