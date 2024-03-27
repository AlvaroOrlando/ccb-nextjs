/* eslint-disable @next/next/no-img-element */
import { FacebookLogo, InstagramLogo} from 'phosphor-react'
import MainContainer from "@/components/Containers/MainContainer";
import Crumb from "@/components/Crumb";
import Button from "@/components/Global/Button";
import Link from "next/link";
import Avatar from '@/components/Global/Avatar';
const image = 'https://i.imgur.com/bDLhJiP.jpg'
// const image = undefined

export default function SalaVip(){
    return (
        // <Link href="/salaVip/editar">Editar</Link>
        <>
          <Crumb />
          <MainContainer>
            <div>
              <div className="row d-flex justify-content-center">
                <div>
                    
                    <div className=" p-3 py-4">
                        
                        <Avatar alt='Imagem de Perfil' src={image}/>
                        
                        <div className="text-center mt-3">
                            <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                            <h5 className="mt-2 mb-0">Alexender Schidmt</h5>
                            <span>UI/UX Designer</span>
                            
                            <div className="px-4 mt-1">
                                <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                            
                            <ul>
                              <li><FacebookLogo /></li>
                              <li><InstagramLogo /></li>
                            </ul>
                            
                            <div>
                                <Button value="Mensagem" />
                            </div>
                            
                            
                        </div>
                        
                    
                        
                        
                    </div>
                    
                </div>
              </div>
            </div>
          </MainContainer>
        </>
    )
}