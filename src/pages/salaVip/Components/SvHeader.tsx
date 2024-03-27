import React from "react";

interface SvHeaderProps {
  onMenuClick: (opcao: string) => void;
  activeMenu: string;
}

export function SvHeader({ onMenuClick, activeMenu }: SvHeaderProps) {

  return (
    <section className="w-100">
      <ul
        style={{
         padding:"2rem",
        }}

        className="list-unstyled w-100 list-inline"
      >
        <li
          className="list-inline-item mx-4"
          style={{
            borderBottom: activeMenu === "conta" ? "2px solid #5281b1" : "none",
          }}
          onClick={() => onMenuClick("conta")}
        >
          Conta
        </li>
        <li
          className="list-inline-item mx-4"
          style={{
            borderBottom: activeMenu === "Carteira" ? "2px solid #5281b1" : "none",
          }}
          onClick={() => onMenuClick("Carteira")}
        >
          Carteira
        </li>
        <li
          className="list-inline-item mx-4"
          style={{
            borderBottom: activeMenu === "SvRadionline" ? "2px solid #5281b1" : "none",
          }}
          onClick={() => onMenuClick("SvRadionline")}
        >
          Radionline
        </li>
        <li
          className="list-inline-item mx-4"
          style={{
            borderBottom: activeMenu === "Letras" ? "2px solid #5281b1" : "none",
          }}
          onClick={() => onMenuClick("Letras")}
        >
          Letras
        </li>
      </ul>
    </section>
  );
}
