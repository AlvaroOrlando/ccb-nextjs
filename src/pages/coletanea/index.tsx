/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import logoColet from '../../assets/images/logo_ccbmusic800px.png'

export default function Coletanea(){
    return (
         <div className={`bg`}>
           <div className={`mainContainerGlobal`}>
             <div className={`subContainerGlobal`}> 
               <h1 className={`titulosGlobal`}>
                <a style={{ color: '#cd1012' }} href="">Coletânea CCB</a> {'>'} Aviso
               </h1>
               <div className={`linhaGlobal`}></div>
               
               {/* Imagem */}
               <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <img style={{ width: '100%', maxWidth: '800px', maxHeight: '291px' }} src={logoColet.src} alt="" />
               </div> 

               {/* Conteúdo] */}
               <div>
                 <h1 className={`subtitulosGlobal mt-3`}>
                   A Coletânea CCB está sendo reformulada. Aguarde!
                 </h1>
               </div>
             </div>
           </div>
         </div>
        
    )
}