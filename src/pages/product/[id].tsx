import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/products'
import { useRouter } from 'next/router'


export default function Product (){
  const { query } = useRouter ()
  return(
   <ProductContainer>
     <ImageContainer>
       
     </ImageContainer>
     <ProductDetails>
      <h1>Camiseta X</h1>
      <span>R$99999</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi deleniti quasi deserunt eaque ipsa voluptas iure ratione sint voluptatum hic adipisci omnis tenetur dicta, similique cumque dolorem natus maiores!</p>
    
      <button>
        Comprar agora
      </button>
     </ProductDetails>
   </ProductContainer>
  )
}