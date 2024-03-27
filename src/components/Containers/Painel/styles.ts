import { styled } from "@/styles";

export const PainelStyles = styled('div', {
    width:'100%',
    padding:'0px',

    fontSize:'1.6rem',
    textAlign:'center',

    h1:{
        paddingTop: '3px',
        marginBottom:'0px',
    },

    variants:{
        variant: {
            yellow: {
                backgroundColor:'$yellow',
            },

            blue: {
                backgroundColor: '$primaryBlue',
                color:'$white'
            }
        }
    },

    defaultVariants:{
        variant: 'yellow'
    }
})