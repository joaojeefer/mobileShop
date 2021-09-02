/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
