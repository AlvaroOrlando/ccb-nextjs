import { v4 as uuidv4 } from "uuid"

type carouselHomeType = {
    id:string,
    ref:string | undefined,
    href: string,
    src:string,
    caption?:boolean,
    captionValue?:string
}

export let carouselHome:carouselHomeType[] = []

class Carousel{
    id:string;
    ref:string | undefined;
    href:string;
    src:string;
    caption?:boolean;
    captionValue?:string;

    constructor(
        id:string,
        ref:string | undefined,
        href:string,
        src:string,
        caption?:boolean,
        captionValue?:string,
    ){
        this.id = uuidv4();
        this.ref = ref;
        this.href = href;
        this.src = src;
        this.caption = caption,
        this.captionValue = captionValue
    }

    push(): void {
    carouselHome.push({
            id: this.id,
            ref:this.ref,
            href:this.href,
            src: this.src,
            caption:this.caption,
            captionValue:this.captionValue
    })
    }

    del(): void {
        const itemToDelete = carouselHome.find(item => {
            return item.ref === this.ref
        })

        const newCarouselHome = carouselHome.filter(item => {
            return item.ref !== itemToDelete?.ref
        })
        
        carouselHome = newCarouselHome
    }

    update(id: string, ref:string, href:string, src: string, caption: boolean | undefined, captionValue:string | undefined ) {
        
        const obj = new Carousel(
            id,
            ref,
            href,
            src,
            caption,
            captionValue
        )
        this.del()
        obj.push()
    }
}
  
// Create Carousel Items

const coletanea = new Carousel(
    uuidv4(),
    'coletanea',
    "/coletanea", 
    "../images/carouselHome/600x400_coletanea.png",
    false,
)
coletanea.push()


const estudio = new Carousel(
    uuidv4(),
    'gravar',
    "/servicos/gravar", 
    "../images/carouselHome/600x400_estudio.png",
    false,
)
estudio.push()

const siteNovo = new Carousel(
    uuidv4(),
    'siteNovo',
    "/novoSite",
    "../images/carouselHome/600x400_novo_site.png",
    false
)
siteNovo.push()

const registrar = new Carousel(
    uuidv4(),
    'registrar',
    "/servicos/registrar",
    "../images/carouselHome/600x400_registro.png",
    false
)
registrar.push()

const whatsapp = new Carousel(
    uuidv4(),
    'whatsapp',
    "https://contate.me/clubedoscompositores",
    "../images/carouselHome/600x400_whatsapp.png",
    false
)
whatsapp.push()


// Exemplo de Requisição da pag de adm
// const whatsapp1 = 'whatsapp'
// const path = "https://contate.me/clubedoscompositores"
// const path1 =  "../images/carouselHome/600x400_whatsapp.png"

// let teste = new Carousel(
//     uuidv4(),
//     `${whatsapp1}`,
//     `${path}`,
//     `${path1}`,
//     false
// )
// teste.push()

