import { info } from "@/utilities/servicesInfo.json";

interface Card {
  id: string;
  name: string;
  rootRef: string;
  href?: string;
  rootPage: string;
  currentPage: string;
  category: string;
  subcategory: string;
  card?: {
    idCard: string;
    idImg: string;
    title: string;
    content: string;
    imgUrl: string;
  };
}

const cardsData: Card[] = info.map((item) => {
    const card = item.card && item.card !== null ? item.card : undefined;
    const href = item.href ? item.href : undefined;
  
    return {
      ...item,
      card,
      href,
    };
  });

export function getAllCards(): Card[] {
  return cardsData;
}
