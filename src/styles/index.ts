import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    css
} = createStitches({
    theme:{
        colors:{
            white:'#fff',

            primaryBlue:'#5281b1',
            secondaryBlue:'#02599a',
            hoverBlue:'#6f9bcc',

            primaryGray:'#e4e4e4',
            secondaryGray:'#f7f7f7',
            darkGray:'#444',

            primaryRed:'#cd1012',
            redShadow:'cd101299',
            hoverRed:'#ae0e0f',

            green:'green',
            hoverGreen:'#11421b99',

            yellow:'#f5f563',

        }
    }
})