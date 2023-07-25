import Crumb from "@/components/Crumb";
import Card from "@/components/Cards";
import MainContainer from "@/components/MainContainer";

export default function Beneficios(){
    return (
        <>
          <Crumb />
          <MainContainer>
            <div style={{padding:'0px 1rem'}} className="col-12 col-sm-12 col-md-12">
              <div className="row">
                <Card page='beneficios'/>
              </div>
            </div>
          </MainContainer>
        </>
    )
}