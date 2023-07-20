import { Breadcrumb } from "react-bootstrap"
import { siteMap } from "@/utilities/siteMap"
import Link from "next/link"
import styles from '../Crumb/crumb.module.scss'

import { usePathname } from 'next/navigation';

import { oswald } from "../../assets/fonts/locales"


export default function Crumb(){

    const currentPage = usePathname();

     const currentSite = siteMap.find(item => {
       return item.href ===  currentPage
     })

    return (
         currentSite != undefined &&
        <>
            <section className={styles.crumbContainer} style={oswald.style}>
                <Breadcrumb>
                    { currentSite.currentPage === undefined ?
                    <Breadcrumb.Item active>
                      {currentSite.rootPage}
                    </Breadcrumb.Item>
                     : 
                     <>
                    <Link href={currentSite.rootRef}>{currentSite.rootPage}
                    </Link> 
                    
                    <Breadcrumb.Item active>
                        <span style={{color: "rgba(33, 37, 41, 0.75)", padding: ".4rem", position:"relative", top:"1.5px"}}>{"<"}</span>
                        {currentSite.currentPage}
                    </Breadcrumb.Item>
                    </>
                    }
                </Breadcrumb>
            <hr />
            </section>
        </>
        )
}