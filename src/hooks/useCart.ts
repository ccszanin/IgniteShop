import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function UseCart(){
  return useContext(CartContext);
}