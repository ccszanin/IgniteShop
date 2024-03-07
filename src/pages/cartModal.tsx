import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { FooterModal,   QuantText,  ValueItems,ModalItems, ValueText } from "../styles/pages/cartModal";
import { X } from "@phosphor-icons/react";
import { CSSProperties } from "@stitches/react";
import { CartItem } from "./cartItem";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";


const customStyles = {

  content: {
    heigth: "100vh",
    background: "#202024",
    maxWidth: 430,
    width:"100%",
    margin: "0",
    border: "none",
    overflow: "none",
    borderRadius: "none",
    inset: "0",
    left: "auto",
    right: "0",
    top: 0,
    bottom: 0,
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-between",
    height:"100%",
    position:"fixed"
  },

  overlay: {
    backgroundColor: "transparent",
    position:"fixed",
    inset:0,
  },
};



interface ModalItems{
  products:{
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

const closeStyles: CSSProperties = {
  display: 'block',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  zIndex: 2,
};

export type IProduct = Product & {
  defaultPriceId?: string;
  quantity?: number;
};




const CartModal = ({ isOpen, onRequestClose }) => {

  const {
    cartDetails,
    cartCount,
    formattedTotalPrice,
  } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const products: IProduct[] = Object.keys(cartDetails).map(item => cartDetails[item]);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      //COMO O API ROUTE DO NEXT RODA NO MESMO ENDEREÇO DA NOSSA APLICAÇÃO PODEMOS UTILIZAR DIRETO O AXIOS SEM UM BASEURL, POIS JÁ É SETADO POR PADRÃO A URL DE EXECUÇÃO DA NOSSA APLICAÇÃO
      const response = await axios.post('/api/checkout', {
        products: products,
      })

      const { checkoutUrl } = response.data;

      //REDIRECIONANDO PARA PÁGINA EXTERNA
      if (typeof window !== undefined) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }



  return (
    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Carrinho de Compras"
      style={customStyles}
    >
     <X size={24} weight="bold" style={closeStyles} onClick={onRequestClose} />
  
      <ModalItems>
        <h2>Sacola de Compras</h2>
        {products.map(product => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                />
              )
            })}
      </ModalItems>
    
      
    <FooterModal>
    <QuantText>
    <h2>Quantidade</h2>
    <p>3 itens</p>
    </QuantText>
    
    <ValueText>
    <h1>Valor total</h1>
    <p>R$ 270,00</p>
    </ValueText>
   
    
    <button>Finalizar compra</button>

    </FooterModal>

     
    </Modal>

    
    </>
  );
};
export default CartModal;