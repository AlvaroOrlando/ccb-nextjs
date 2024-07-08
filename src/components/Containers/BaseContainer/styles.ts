import { styled } from "@/styles";

// export const BaseContainerStyles = styled('div',{
//     display:'flex',
//     flexDirection:'column',
//     alignItems:'center',
//     justifyContent:'center',

//     width:'100%',
//     margin:'0 auto',

//     section:{
//         width:'100%',
//         padding:'1rem',
//         backgroundColor:'$white'
//     }
// })

export const BaseContainerStyles = styled('section', {
    width:'100%',
    maxWidth: '1200px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',

    padding: '1rem',
    margin: '0 auto',
    marginBottom: '10px',

    backgroundColor: '$secondaryGray',
    border: '8px solid $white',
    borderTop:'none',
})