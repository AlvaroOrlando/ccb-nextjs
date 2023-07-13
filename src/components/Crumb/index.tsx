import { Breadcrumb } from "react-bootstrap"
import { siteMap } from "@/utilities/siteMap"
import { useRouter } from "next/router"
import Link from "next/link"
import { CrumbContainer } from "./styles"

import Linha from "../Global/Linha/Linha"

import { usePathname } from 'next/navigation';


export default function Crumb(){

    const currentPage = usePathname();
    
    console.log(currentPage);

     const currentSite = siteMap.find(item => {
       return item.href ===  currentPage
     })

    return (
         currentSite != undefined &&
        <>
            <CrumbContainer>
                <Breadcrumb>
                    { currentSite.currentPage === undefined ?
                    <Breadcrumb.Item active>
                      {currentSite.rootPage}
                    </Breadcrumb.Item>
                     : 
                     <>
                    <Breadcrumb.Item>
                        <Link href={currentSite.rootRef}>{currentSite.rootPage}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{currentSite.currentPage}</Breadcrumb.Item>
                    </>
                    }
                </Breadcrumb>
            <Linha />
            </CrumbContainer>
        </>
        )
}