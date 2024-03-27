import Crumb from "@/components/Crumb";
import Card from "@/components/Cards";
import MainContainer from "@/components/Containers/MainContainer";

export default function Festival(){
    return (
        <>
          <Crumb />
          <MainContainer>
            <div style={{padding:'1rem', paddingBottom:'0px'}} className="col-12 col-sm-12 col-md-12">
              <div className="row">
                <Card page='festival'/>
              </div>
            </div>
          </MainContainer>
        </>
    )
}