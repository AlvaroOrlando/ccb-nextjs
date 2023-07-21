import { PropsWithChildren } from "react";

export default function MainContainer({children}:PropsWithChildren){
    return (
        <section className="MainContainer" >
          {children}
        </section>
    )
}