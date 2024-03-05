import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


const customStyles = {
  content: {
    heigth: "100vh",
    background: "#202024",
    width: 430,
    margin: "0",
    border: "none",
    overflow: "none",
    borderRadius: "none",
    inset: "0",
    left: "auto",
    right: "0",
    top: 0,
    bottom: 0,
  },

  overlay: {
    backgroundColor: "transparent",
  },
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Carrinho de Compras"
    style={customStyles}
  >
      {children}
    </Modal>
  );
};

export default CustomModal;