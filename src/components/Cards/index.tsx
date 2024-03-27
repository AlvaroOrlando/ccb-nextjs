import Link from "next/link";
import styles from "@/scss/pages/home.module.scss"
import { siteMap } from "@/utilities/siteMap"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"

interface cardProps {
    page:string
}

interface CardInfo {
  id: string;
  name: string;
  href: string;
  rootRef: string;
  rootPage: string;
  currentPage: string;
  category: string;
  subcategory: string;
  card?: {
    idCard: string;
    title: string;
    content: string;
    imgUrl: string;
    idImg: string;
  };
}


function getURL(id: string): string {
    const item = siteMap.find(el => el.id === id);
    return item?.href || ''; 
}

async function fetchCards(): Promise<CardInfo[]> {
    const response = await fetch('http://localhost:3000/api/cards/getAllCards');
    const data = await response.json();
    return data;
}

function renderCard(card: CardInfo) {
    return (
      <div key={`${card.id}_${uuidv4()}`} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
        <section className={`${styles.card} card`} id={card.card?.idCard}>
          <Link href={getURL(card.name)}>
            <div style={{ backgroundImage: `url(${card.card?.imgUrl})` }} className={styles.imgBox} id={card.card?.idImg}></div>
          </Link>
  
          <Link href={getURL(card.name)} className={`${styles.cardTitle} m-0 p-1`}>
            <b>{card.card?.title}</b>
          </Link>
          
          <div className="h-100 p-0">
            <p className="p-1">{card.card?.content}</p>
          </div>
        </section>
      </div>
    );
}
  
  export default function Card({ page }: cardProps) {
    const [cards, setCards] = useState<CardInfo[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchCards();
        setCards(data);
      };
  
      fetchData();
    }, []);
  
    let filteredCards: CardInfo[] = [];
  
    switch (page) {
      case 'home':

        const homeCardsOrder = [
          'festival',
          'isrc',
          'coletanea',
          'contato',
          'registrar',
          'estudio',
          'melodia',
          'associar',
          'ajuda',
          'recompensa',
          'direitosAutorais',
          'isrc'
        ];

        filteredCards = homeCardsOrder.map((cardName) => cards.find((card) => card.name === cardName)).filter((card): card is CardInfo => card !== undefined);
        break;
  
        case 'servicos':
            filteredCards = cards.filter((card) => card.category === 'servicos');
            break;
    
        case 'beneficios':
            filteredCards = cards.filter((card) => card.category === 'beneficios');
            break;
    
        case 'ajuda':
            filteredCards = cards.filter((card) => card.category === 'ajuda' && card.id !== 'ajuda');
            break;
    
        case 'festival':
            filteredCards = cards.filter((card) => card.category === 'festival');
            break;
    
        case 'salaVip':
            filteredCards = cards.filter((card) => card.category === 'salaVip');
            break;
    
        default:
            break;
    }
  
    return (
      <>
        {filteredCards.map(renderCard)}
      </>
    );
}