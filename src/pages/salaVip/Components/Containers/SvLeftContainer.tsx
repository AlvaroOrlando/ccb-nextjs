import { ReactNode } from "react"

interface SvLeftContainerProps {
    children: ReactNode
}

export function SvLeftContainer({ children }:SvLeftContainerProps){
    return (
        <div 
        style={{
            minWidth:'200px',
            flex: '0 0 30%',    
            }}
        >
            {children}
        </div>
    )
}