import { styled } from "@/styles";

export const ButtonContainerStyles = styled('div', {
    display:'flex',
    width:"100%",

    variants:{
        align:{
            left:{
                justifyContent:'flex-start',
            },
            center:{
                justifyContent:'center',
            },
            right:{
                justifyContent:'flex-end',
            }
          },
    },

    defaultVariants: {
        align:'center'
    }
    
})