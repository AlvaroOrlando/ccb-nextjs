import { ArrowLeft } from "phosphor-react";
import ButtonContainer from "../Containers/ButtonContainer";
import Button from "../Global/Button";
// import router from "next/router";

interface PreviousStepProps {
    // pushTo: string
    value: string
    onClick: () => void
    className?:string
}


export default function PreviousStep({ value, onClick, className }: PreviousStepProps) {

    return (
      <>
        <ButtonContainer className={className}>
          <Button type="button" size="md" onClick={onClick}>
            <ArrowLeft />
            {value}
          </Button>
        </ButtonContainer>
      </>
    );
  }
  