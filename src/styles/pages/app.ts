import { styled } from "..";


export const Container  = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
 
})

export const Header = styled('header',{
  padding: '2rem 0',
  width:'100%',
  maxWidth: 1180,
  margin: '0 auto',
  display:'flex',
  flexWrap: 'wrap',
  justifyContent:'space-between',

  button:{
    position:'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'$gray800',
    width:'48px',
    height:'48px',
    borderRadius: '6px',
    border: "none",
    cursor:'pointer',


    '.cart-count': {
      position: 'absolute',
      top:'-5px',
      right: '-5px',
      backgroundColor: '$green500', 
      color: '$white', 
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      border:`2px solid $gray900`
    },
  
  }
})
