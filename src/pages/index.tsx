import { HomeContainer, Items, Product } from "../styles/pages/home";
import { useKeenSlider} from 'keen-slider/react';
import Link from "next/link";
import Head from "next/head"
import Image from "next/image";
import 'keen-slider/keen-slider.min.css';
import { stripe } from "../assets/lib/stripe";
import {  GetStaticProps } from "next";
import Stripe from "stripe";
import { Handbag } from "@phosphor-icons/react";

interface HomeProps{
  products:{
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products}:HomeProps ) {
const [sliderRef] = useKeenSlider ({
  slides:{
    perView: 3,
    spacing: 48,
  }
})

  return (
    <>
    <Head>
      <title>Home | Ignite Shop</title>
    </Head>


    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map( product => {
        return (
       
          <Link  
          href={`/product/${product.id}`}  
          key={product.id}
          prefetch= {false}
          >
          <Product
          className="keen-slider__slide">
          <Image src={product.imageUrl} alt="" width={520} height={480}/>
          <footer>
            <Items>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
            </Items>
            
            <button  >
            <Handbag size={32} color="white" weight="bold" />
            </button>
          </footer>
      </Product>
      </Link>
  
        )
      })}
        
    </HomeContainer>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })



  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id:product.id,
      name:product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount/100),
    }
  })

  return{
      props:{
        products
      },
      revalidate: 60 * 60 * 2,
  }
}
