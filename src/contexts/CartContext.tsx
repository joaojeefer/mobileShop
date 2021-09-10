import React, {createContext, Dispatch, ReactNode, useState} from 'react';
import {CartItem} from '../models.ts/cart-item';
import {Product} from '../models.ts/product';

interface CartContextData {
  cart: CartItem[];
  setCart: Dispatch<React.SetStateAction<CartItem[]>>;
  inCart: (productId: string) => boolean;
  handleAddToCart: (product: Product) => void;
  handleSubtractFromCart: (product: Product) => void;
  handleRemoveFromCart: (product: Product) => void;
  handleEmptyCart: () => void;
  calculateCartTotalPrice: () => number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const inCart = (productId: string) =>
    !!cart.find(item => item.product.id === productId);

  const handleAddToCart = (product: Product) => {
    const onlyOne = cart.find(item => item.product.id === product.id);
    if (onlyOne) {
      const filteredCart = cart.filter(item => item.product.id !== product.id);
      setCart(filteredCart.concat([{product, quantity: onlyOne.quantity + 1}]));
    } else {
      setCart(oldCart => oldCart.concat([{product, quantity: 1}]));
    }
  };

  const handleSubtractFromCart = (product: Product) => {
    const onlyOne = cart.find(item => item.product.id === product.id);
    if (onlyOne) {
      const filteredCart = cart.filter(item => item.product.id !== product.id);
      if (onlyOne.quantity === 1) {
        setCart(filteredCart);
      } else {
        setCart(
          filteredCart.concat([{product, quantity: onlyOne.quantity - 1}]),
        );
      }
    }
  };

  const handleRemoveFromCart = (product: Product) => {
    const filteredCart = cart.filter(item => item.product.id !== product.id);
    setCart(filteredCart);
  };

  const handleEmptyCart = () => setCart([]);

  const calculateCartTotalPrice = () => {
    return cart.reduce((acc, currentValue) => {
      acc += Number(currentValue.product.price) * currentValue.quantity;
      return acc;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        inCart,
        handleAddToCart,
        handleSubtractFromCart,
        handleRemoveFromCart,
        handleEmptyCart,
        calculateCartTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
}
