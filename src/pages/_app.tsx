import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import { CartProvider, formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { CartButton } from "./CartButton";
import Link from "next/link";
import { Cart } from "./Cart";
import { CartContextProvider } from "../contexts/CartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };
const StripeKey = process.env.STRIPE_PUBLIC_KEY

  return (
    <CartContextProvider>
    <Container>
      <Header>
        <Link href={'/'}>
        <Image src={logoImg} alt="" />
        </Link>
        <Cart/>
      </Header>
     
      <Component {...pageProps} />
    

    </Container>
    </CartContextProvider>
  );
}
