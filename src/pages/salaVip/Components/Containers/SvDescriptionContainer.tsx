import { ReactNode } from "react"

interface SvLeftContainerProps {
   title:string
   description:string
   children?: ReactNode
}

export default function SvDescriptionContainer({ title,description, children }:SvLeftContainerProps){
    return (
        <div 
          style={{
            minWidth:'200px',
            flex: '0 0 30%',    
          }}
        >
            <h2 className="subtitulosGlobal" style={{fontSize:'1.2rem', textAlign:'left'}}>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    )
}