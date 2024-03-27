import { ArrowRight } from "phosphor-react";
import ButtonContainer from "../Containers/ButtonContainer";
import Button from "../Global/Button";
// import router from "next/router";

interface NextStepProps {
    // pushTo: string
    value: string
    onClick: () => void
    isLastStep: boolean
    className?:string
}


export default function NextStep({ value, onClick, isLastStep, className }: NextStepProps) {

    // const handleNextStep = () => {
    //   router.push(pushTo);
    // };

    return (
        <>
          {/* <div className="text-center mb-3" style={{ width:'100%',maxWidth:"400px", margin:"0 auto"}}>
            <div className="alert alert-success m-0"  role="alert">
              Dados salvos com sucesso!
            </div>
          </div> */}
          { !isLastStep && ( 
            <ButtonContainer className={className}>
              <Button type="button" size="md" value={value} onClick={onClick}>
                <ArrowRight />
              </Button>
            </ButtonContainer>)
          }
      </>
    );
  }
  