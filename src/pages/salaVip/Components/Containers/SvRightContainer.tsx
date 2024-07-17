import { ReactNode } from "react"

interface SvRightContainerProps {
    children: ReactNode
}

export default function SvRightContainer({ children }:SvRightContainerProps){
    return (
        <div 
            style={{
                padding:'1rem',
                display:'flex',
                flex: '1',      
                flexDirection:'column',
                gap:'2rem'
            }}
        >
            {children}
        </div>
    )
}