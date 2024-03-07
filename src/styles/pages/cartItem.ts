import { styled } from "..";


export const  ProductsSelect = styled('div',{
  display: 'flex',
  flexDirection:"row",
  gap:"20px",
  paddingTop:"33px",
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