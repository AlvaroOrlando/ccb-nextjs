import { globalCss } from ".";

export const globalStyles = globalCss({
    '*':{
        margin: 0,
        padding: 0,
        boxSizing:'borderBox',
        // fontFamily:'Open Sans',
    },

    body: {
       '-webkit-font-smoothing':'antialiased',
       backgroundColor:'$primaryGray',
       fontWeight:400,
    },

    
})