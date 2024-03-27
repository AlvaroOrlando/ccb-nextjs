import { styled } from "@stitches/react";

export const TaxasContainer = styled('div', {
    width:'100%',
    fontSize: 'clamp(.8rem, 3.5vw, 1.4rem)',

    section: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

        marginLeft:'0px',

        a: {
            textDecoration: 'none !important',
            outline:'none',  
            border: 'none',
            backgroundColor: 'transparent',
            color: '$secondaryBlue',

            '&:after': {
                content: "|",
                marginLeft: '10px',
                marginRight: '10px',
                color: '$darkGray',
            }   
        },

        button: {
            textDecoration: 'none',
            outline:'none',  
            border: 'none',
            backgroundColor: 'transparent',
            color: '$secondaryBlue',
            fontWeight:'bold',
            paddingLeft: '0px',

            '&:hover': {
            color: '$hoverBlue',
            cursor: 'pointer',
            }
        }

    }
})

export const IsrcFormContainer = styled('div', {
    form:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    
        width:'100%',
        marginTop:'1rem',
        paddingBottom:'1rem',
    
        section: {
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
    
            width:'100%',
            maxWidth:'800px',
        }
    }
   
})

export const IsrcButtonContainer = styled('div', {
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',

    width:'100%',
    gap: '10px',
    marginTop:'1rem',

    button: {
        width: '50%',
    }
})