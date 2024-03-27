import { styled } from '@/styles';

export const MainContainerStyles = styled('section', {
    width:'100%',
    maxWidth: '1200px',
    minHeight: 'calc(100vh - 385px)',
    verticalAlign:'middle',

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',

    padding: '1rem',
    // paddingTop: '0px',
    margin: '0 auto',
    marginBottom: '10px',

    backgroundColor: '$secondaryGray',
    border: '8px solid $white',
    borderTop:'none',
})