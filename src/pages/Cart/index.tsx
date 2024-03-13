import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { UseCart } from "@/src/hooks/useCart";
import { CartItem } from "../cartItem";
import { useState } from "react";
import axios from "axios";

export function Cart() {
 const { cartItems, removeCartItem, cartTotal } = UseCart();
const cartQuantity = cartItems.length;


const formattedCartTotal = new Intl.NumberFormat('pt-BR',{
style: 'currency',
currency:'BRL',
}).format(cartTotal);

const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

async function handleCheckout(){
  try {
    setIsCreatingCheckoutSession(true);
 const response = await axios.post('api/checkout',{
   products: cartItems,
 })
  const { checkoutUrl} = response.data;
  window.location.href = checkoutUrl;

  } catch(err){
    setIsCreatingCheckoutSession(false);
    alert('Falha ao redirecionnar ao checkout!')
  }
}

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.DialogPortal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Sacola de Compras </h2>
 <section>
  { cartQuantity <= 0 && <p>Seu carrinho está vazio!</p>}
   
   {cartItems.map((CartItem)=>(
    <CartProduct key={CartItem.id}>
    <CartProductImage>
         <Image 
         width={100}
         height={93}
         alt=""
         src={CartItem.imageUrl}
          />
    </CartProductImage>
    <CartProductDetails>
      <p>{CartItem.name}</p>
      <strong>{CartItem.price}</strong>
      <button onClick={()=> removeCartItem(CartItem.id)}>Remover</button>
    </CartProductDetails>
 </CartProduct>
   ))}
    
 </section>
    <CartFinalization>
      <FinalizationDetails>
            <div>
              <span>Quantidade</span>
              <p>
              {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}  
              </p>
            </div>

            <div>
            <span>Valor total</span>
              <p>{formattedCartTotal}</p>
            </div>
      </FinalizationDetails>
     <button
     onClick={handleCheckout}
     disabled={isCreatingCheckoutSession || cartQuantity <= 0}
     >Finalizar compra</button>
    </CartFinalization>
        </CartContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
