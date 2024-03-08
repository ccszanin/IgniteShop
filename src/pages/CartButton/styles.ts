import {styled} from '../../styles';

export const CartButtonContainer = styled("button",{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border:'none',
  borderRadius: 6,
  position: 'relative',
  
 '&:disabled':{
  opacity:0.6,
  cursor: "not-allowed",
 },

  background: "$gray800",
 

  width:'3rem',
  height: '3rem',

  svg:{
    fontSize:24,
  },

  button:{
    marginLeft:'auto',
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