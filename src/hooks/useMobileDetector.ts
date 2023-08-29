import { useState, useEffect } from 'react';

// Hook personalizado para detectar se o dispositivo é móvel
export function useMobileDetector(width:number) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < width);
    };

    // Adiciona um listener para detectar redimensionamento da tela
    window.addEventListener('resize', handleResize);

    // Chama o handler no carregamento para definir o estado inicial
    handleResize();

    // Remove o listener quando o hook é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return isMobile;
}
