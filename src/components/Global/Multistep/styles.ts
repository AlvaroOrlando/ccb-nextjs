import { styled } from "@/styles"
import Text from "../Text"


export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$secondaryBlue',

})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '1rem',
})

export const Step = styled('div', {
//   height: '$1',
  borderRadius: '8px',
  backgroundColor: '$white',

  variants: {
    active: {
      true: {
        backgroundColor: '$secondaryGray',
      },
    },
  },
})