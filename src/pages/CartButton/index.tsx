import { Handbag } from "@phosphor-icons/react";
import { CartButtonContainer } from "./styles";
import { ComponentProps } from "react";

type  CartButtonProps  = ComponentProps<typeof CartButtonContainer>;

export function CartButton({...rest}: CartButtonProps ){
  return(
    <CartButtonContainer {...rest}>
      <button>
          <Handbag size={24} color="#8D8D99" weight="bold" />
          <div className="cart-count">1</div>
        </button>
    </CartButtonContainer>
  )
}