import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import CartModal from "./CartModal";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
const [isCartModalOpen, setCartModalOpen] = useState(false);
const cartItems = [{ name: 'Produto 1', price: '$10' }, { name: 'Produto 2', price: '$20' }]; // Substitua pelos itens reais do carrinho

const openCartModal = () => {
  setCartModalOpen(true);
};

const closeCartModal = () => {
  setCartModalOpen(false);
};


const product = { 
  id: '1',
  name: 'Example Product',
  imageUrl: 'example.jpg',
  price: '$30',
  defaultPriceId: 'price_123' 
};



  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <button onClick={openCartModal}>
        <Handbag size={24} color="#8D8D99" weight="bold" />
        <div className="cart-count">1</div>
        </button>
      </Header>
      <Component {...pageProps} />
      <CartModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} cartItems={cartItems} product={product}/>
     
    </Container>
  );
}
