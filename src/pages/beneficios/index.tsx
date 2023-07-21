import Crumb from "@/components/Crumb";
import Card from "@/components/HomeCards";
import MainContainer from "@/components/MainContainer";

export default function Beneficios(){
    return (
        <>
          <Crumb />
          <MainContainer>
            <div style={{padding:'1rem', paddingBottom:'0px'}} className="col-12 col-sm-12 col-md-12">
              <div className="row">
                <Card page='beneficios'/>
              </div>
            </div>
          </MainContainer>
        </>
    )
}