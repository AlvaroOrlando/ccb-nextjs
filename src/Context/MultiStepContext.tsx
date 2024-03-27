// MultiStepContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";

interface MultiStepContextProps {
  children: ReactNode;
}

interface MultiStepContextData {
  currentStep: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const MultiStepContext = createContext<MultiStepContextData | undefined>(undefined);

export const MultiStepProvider: React.FC<MultiStepContextProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const goToPreviousStep = () => setCurrentStep((prevStep) => prevStep - 1)

  return (
    <MultiStepContext.Provider value={{ currentStep, goToNextStep, goToPreviousStep }}>
      {children}
    </MultiStepContext.Provider>
  );
};

export const useMultiStep = () => {
  const context = useContext(MultiStepContext);
  if (!context) {
    throw new Error("useMultiStep must be used within a MultiStepProvider");
  }
  return context;
};
