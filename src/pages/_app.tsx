import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import CartModal from "./cartModal";
import { CartProvider, formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

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
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={StripeKey}
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="USD"
    allowedCountries={['US', 'GB', 'CA']}
    billingAddressCollection={true}
    shouldPersist
  >
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <button onClick={openCartModal}>
          <Handbag size={24} color="#8D8D99" weight="bold" />
          <div className="cart-count">1</div>
        </button>
      </Header>
     
      <Component {...pageProps} />
    
      <CartModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} />

    </Container>
    </CartProvider>
  );
}
