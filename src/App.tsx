import React from 'react';
import {Routes} from './routes';
import {CartProvider} from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
};

export default App;
