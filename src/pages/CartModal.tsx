import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    heigth:'100vh',
    background:'#202024',
    width: 430,
    margin: '0',
    border:'none',
    overflow:'none',
    borderRadius:'none',
    inset:'0',
    left: 'auto', 
    right: '0', 
    top: 0,
    bottom: 0,
  },


  overlay:{
   backgroundColor:'transparent',
   border:'1px solid red',
    
  }
};

const CartModal = ({ isOpen, onRequestClose, cartItems, product }) => {
 
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Carrinho de Compras"
      style={customStyles}
    >



        <h2>Sacola de Compras</h2>
        {/* Substitua pela URL da imagem */}
        {/* <Image src={} alt="" width={520} height={480} /> */}
        <strong>produto</strong>
        <span>R$999,99</span>

    </Modal>
    
  );
};

export default CartModal;