import { styled } from "@/styles";

export const BaseContainerStyles = styled('div',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',

    width:'100%',
    margin:'0 auto',

    section:{
        width:'100%',
        padding:'1rem',
        backgroundColor:'$white'
    }
})