import { keyframes } from "@stitches/react";
import { styled } from "..";



export const ModalItems = styled('div', {
 display:'flex',
 flexDirection:'column',
 
})

export const  ProductsSelect = styled('div',{
 display: 'flex',
 flexDirection:"row",
 gap:"20px",
 paddingTop:"33px",
},
)

export const  TextModal = styled('div',{
  display: "flex",
  flexDirection: "column",

 h2:{
  fontSize:'$lg',
  paddingBottom:'32px',
  paddingTop:'72px'
 },

 strong:{
  fontSize:'$md',
  color: '$gray300',
 },

 span:{
  fontSize:'$md',
  color: '$gray100',
  paddingTop:'5px',
  fontWeight: 'bold',
 },

  p:{
    display: 'block',
   marginTop: '1rem',
   fontSize: '16px',
   color: '$green500',
   textDecoration: 'none',
   fontWeight: 'bold',
  }
 
},
)


export const ImageModal = styled('div',{
  width:'100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius:8,
  padding: '0.25rem',
 
},
)

export const ValueItems = styled('div',{
display:"flex",
flexDirection:"column",

},
)


export const QuantText = styled('div',{
display: "flex",
justifyContent: "space-between",
 
},
)

export const ValueText = styled('div',{
  display: "flex",
  justifyContent: "space-between",
 
},
)

export const CostumModal = styled('div',{
  display:"flex",
  flexDirection:"column",
  justifyContent: 'space-between'

  },
  )

export const FooterModal = styled('div',{
  display:"flex",
  flexDirection:"column",

 
  button:{
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    paddingTop:"55px"
  }  


  },
  )
