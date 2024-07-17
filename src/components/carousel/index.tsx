/* eslint-disable @next/next/no-img-element */
import styles from "@/scss/pages/home.module.scss"
import Link from "next/link"
import { Carousel } from "react-bootstrap"
import { SetStateAction, useState } from "react"
import { carouselHome } from "@/utilities/carousel"


export function CarouselHome(){

    
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex: SetStateAction<number>) => {
          setIndex(selectedIndex);
        };


    return (
      <Carousel as="section" touch={true} interval={4000} indicators={false} activeIndex={index} onSelect={handleSelect}>
          {
            carouselHome.map(item =>{
              return (
                <Carousel.Item className={styles.carouselItem} as="article" style={{height:"100%"}} key={item.id}> 
                  <Link href={item.href}>
                    <div className={styles.carBox}> 
                      <img src={item.src} alt="" />
                    </div> 
                  </Link>

                  {item.caption === true &&
                  <div className={styles.carItem}>
                      <Link href="">
                          <p>
                          {item.captionValue}
                          </p>
                      </Link>
                  </div>
                  } 
                </Carousel.Item>
              )
            })
          } 
      </Carousel> 
    )
}


  