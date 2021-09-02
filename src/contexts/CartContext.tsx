import React, {createContext, Dispatch, ReactNode, useState} from 'react';
import {Product} from '../models.ts/product';

interface CartContextData {
  cart: CartItem[];
  setCart: Dispatch<React.SetStateAction<CartItem[]>>;
  handleAddToCart: (productId: string, quantity?: number) => Promise<void>;
  handleUpdateCartQuantity: (
    productId: string,
    quantity?: number,
  ) => Promise<void>;
  handleRemoveFromCart: (productId: string) => Promise<void>;
  handleEmptyCart: () => Promise<void>;
}

interface CartProviderProps {
  children: ReactNode;
}

type CartItem = {
  product: Product;
  quantity: number;
  price: number;
};

export const CartContext = createContext({} as CartContextData);

export function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = async (productId: string, quantity?: number) => {};

  const handleUpdateCartQuantity = async (
    productId: string,
    quantity?: number,
  ) => {};

  const handleRemoveFromCart = async (productId: string) => {};

  const handleEmptyCart = async () => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleUpdateCartQuantity,
        handleRemoveFromCart,
        handleEmptyCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
