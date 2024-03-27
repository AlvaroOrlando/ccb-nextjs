  type EstiloMusicaMap = {
    [key: string]: string;
  };

  interface IsrcMusicaProps {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
    autores: Autor[];
    interpretes: Interprete[];
  }

  interface EstudioMusicaProps {
    nomeMusica: string;
    estiloMusica: string;
    tipoServico: string;
  }
  
  interface Autor {
    nome: string;
    cpf: string;
  }
  
  interface Interprete {
    nome: string;
    cpf: string;
  }

  type TipoServicoMap = {
    [key: string]: string;
  };
  
  export const estiloMusicaMap: EstiloMusicaMap = {
    "1": "Sertanejo",
    "2": "Gospel",
    "3": "MPB",
    "4": "Pagode",
    "5": "Pop",
    "6": "Regional",
    "7": "Rock",
    "8": "Samba",
    "9": "Dance Music",
    "10": "Arrocha",
    "11": "Axé",
    "12": "Bossa Nova",
    "39": "Blues",
    "13": "Choro",
    "14": "Eletrônica",
    "15": "Fox",
    "16": "Forró",
    "17": "Funk",
    "18": "Hardcore",
    "19": "Hip-hop",
    "20": "Indie",
    "21": "Jazz",
    "22": "Marchinha de carnaval",
    "23": "Metal",
    "24": "Partido Alto",
    "25": "Polca",
    "26": "Punk",
    "27": "R&B",
    "28": "Rap",
    "29": "Reggae",
    "30": "Salsa",
    "31": "Bolero",
    "32": "Tango",
    "33": "Twist",
    "34": "Vanerão",
    "35": "World Music",
    "36": "Xote",
    "37": "Fado",
    "38": "Outro estilo nao listado...",
  };

  export const tipoServicoMap: TipoServicoMap = {
    "1": "Gravar guia voz e violão",
    "2": "Gravação completa com arranjo",
    "3": "Gerar ISRC/ECAD"
  };

  export function getEstiloMusica(codigoEstilo: string): string {
    return estiloMusicaMap[codigoEstilo] || "Estilo não encontrado";
  }

  export function getTipoServico(codigoServico: string): string {
    return tipoServicoMap[codigoServico] || "Serviço não encontrado";
  }

  export function processIsrcMusicData(musicas: IsrcMusicaProps[]) {
    musicas.forEach((musica: IsrcMusicaProps) => {
      const servico = getTipoServico(musica.tipoServico)
      console.log('Tipo de Serviço:', servico); 
      musica.tipoServico = servico;
     
      const estilo = getEstiloMusica(musica.estiloMusica);
      console.log('Estilo de Música:', estilo); 
      musica.estiloMusica = estilo;
    });
  }

  export function processEstudioMusicData(musicas: EstudioMusicaProps[]) {
    musicas.forEach((musica: EstudioMusicaProps) => {
      const servico = getTipoServico(musica.tipoServico)
      console.log('Tipo de Serviço:', servico); 
      musica.tipoServico = servico;
     
      const estilo = getEstiloMusica(musica.estiloMusica);
      console.log('Estilo de Música:', estilo); 
      musica.estiloMusica = estilo;
    });
  }
  
  
  