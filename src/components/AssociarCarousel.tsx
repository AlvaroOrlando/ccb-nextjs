/* eslint-disable @next/next/no-img-element */

import Associou from "../../public/images/carouselAssociar/slider_beneficios_1134x197_associou.png"
import Bene from "../../public/images/carouselAssociar/slider_beneficios_1134x197_bene.png"
import Cart from "../../public/images/carouselAssociar/slider_beneficios_1134x197_cart.png"

import AssociouMobile from "../../public/images/carouselAssociar/slider_beneficios_500x264_associou.png"
import BeneMobile from "../../public/images/carouselAssociar/slider_beneficios_500x264_bene.png"
import CartMobile from "../../public/images/carouselAssociar/slider_beneficios_500x264_cart.png"

import { useMobileDetector } from "@/hooks/useMobileDetector";


export function AssociarCarousel(){

     const isMobile = useMobileDetector(500);

     // Define as imagens com base no estado "isMobile"
     const CartImage = isMobile ? CartMobile : Cart;
     const BeneImage = isMobile ? BeneMobile : Bene;
     const AssociouImage = isMobile ? AssociouMobile : Associou;
     
    return (
        
        <div id="carouselExampleControls" className={`carousel slide mb-3`} data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={CartImage.src} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={BeneImage.src} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={AssociouImage.src} className="d-block w-100" alt="..." />
                </div>
            </div>
            
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    )
}