import { ReactNode } from "react"

interface SvSessionContainerProps {
    children: ReactNode
}

export default function SvContentContainer({ children }:SvSessionContainerProps){
    return (
        <div 
          style={{
            padding:'2rem',
            display:'flex',
            gap:'3rem'
          }}
        >
            {children}
        </div>
    )
}