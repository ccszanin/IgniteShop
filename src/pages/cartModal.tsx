import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { FooterModal, ImageModal, ModalItems, ProductsSelect, QuantText, TextModal, ValueItems, ValueText } from "../styles/pages/modal";
import { X } from "@phosphor-icons/react";
import { CSSProperties } from "@stitches/react";


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


const CartModal = ({ isOpen, onRequestClose }) => {
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
        <ProductsSelect>
        <ImageModal>
          {/* <Image src={} alt="" width={520} height={480} /> */}
        </ImageModal> 
         <TextModal>    
           <strong>Camiseta</strong>
            <span>R$99999</span>
            <p>Remover</p>
            </TextModal> 
            </ProductsSelect>
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