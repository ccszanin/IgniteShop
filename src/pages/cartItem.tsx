import { useShoppingCart } from 'use-shopping-cart';
import { ProductsSelect } from '../styles/pages/cartItem';
import { ImageModal, TextModal } from '../styles/pages/cartItem';
import { Product } from 'use-shopping-cart/core';
import Image from 'next/image';
import { QuantityInput } from './input';


export type IProduct = Product & {
  defaultPriceId?: string;
  quantity?: number;
};

interface CartItemProps {
  product
  defaultPriceId?: string;
  quantity?: number;
}

export function CartItem({ product }: CartItemProps) {
  const { 
    removeItem,
    incrementItem,
    decrementItem 
  } = useShoppingCart();

  function handleIncrease() {
    let count = 1
    incrementItem(product.id, { count });
  }

  function handleDecrease() {
    let count = 1
    decrementItem(product.id, { count })
  }

  function handleRemove() {
    removeItem(product.id);
  }

  return (
    <ProductsSelect>
        <ImageModal>
        <Image src={product.imageUrl} width={102} height={93} alt="" />
        </ImageModal> 
         <TextModal>    
         <span>{product.name}</span>
        <strong>{product.formattedValue}</strong>
            
            </TextModal>
            <div className="actionsContainer">
          <QuantityInput
            quantity={product.quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
          <button onClick={handleRemove} className="removeButton">
            Remover
          </button>
        </div> 
            </ProductsSelect>
        
  )
}
