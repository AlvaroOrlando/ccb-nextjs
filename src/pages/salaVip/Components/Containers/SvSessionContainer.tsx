import { ReactNode } from "react"

interface SvSessionContainerProps {
    children: ReactNode
}

export default function SvSessionContainer({ children }:SvSessionContainerProps){
    return (
        <div 
          style={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            gap:'2rem'
          }}
        >
            {children}
        </div>
    )
}