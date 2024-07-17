import Crumb from "@/components/Crumb";
import { useState } from "react";
import MainContainer from "@/components/Containers/MainContainer";
import  SvHeader   from "../Components/SvHeader";
import  Conta  from "../Components/Conta";
import  SvRadionline  from "../Components/SvRadionline";
import  Letras  from "../Components/Letras";
import  Carteira  from "../Components/Carteira";

export default function SalaVip() {

  const [activeMenu, setActiveMenu] = useState("conta");

  const handleMenuClick = (option: string) => {
    setActiveMenu(option);
  };

  return (
    <>
      <Crumb />
      <MainContainer>
        <SvHeader activeMenu={activeMenu} onMenuClick={handleMenuClick} />
        {activeMenu === "conta" && <Conta />}
        {activeMenu === "SvRadionline" && <SvRadionline />}
        {activeMenu === "Letras" && <Letras />}
        {activeMenu === "Carteira" && <Carteira />}
      </MainContainer>
    </>
  );
}
