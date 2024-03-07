import { Minus, Plus } from '@phosphor-icons/react';
import { QuantityInputContainer } from '../styles/pages/input';
import { IconWrapper } from '../styles/pages/input';


interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) {
  return (
    <>
    <QuantityInputContainer>
      < IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </ IconWrapper>
      <input type="number" readOnly value={quantity} />
      {/* <IconWrapper onClick={onIncrease}> */}
        <Plus size={14} weight="fill" />
      < IconWrapper/>
      </QuantityInputContainer>
      </>
  )
}