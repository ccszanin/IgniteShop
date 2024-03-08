import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage } from "./styles";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

export function Cart() {
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
    <CartProduct>
       <CartProductImage>
            {/* <Image 
            width={100}
            height={93}
            alt=""
            src=""
             /> */}
       </CartProductImage>
       <CartProductDetails>
         <p>Produto 1</p>
         <strong>R$50,00</strong>
         <button>Remover</button>
       </CartProductDetails>
    </CartProduct>
 </section>
    <CartFinalization>
     <button>Finalizar compra</button>
    </CartFinalization>
        </CartContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
