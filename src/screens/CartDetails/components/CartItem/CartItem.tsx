import React, {useContext} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Counter} from '../../../../components';
import {CartContext} from '../../../../contexts/CartContext';
import {intlCurrencyFormat} from '../../../../utils/formatting';
import {CartItem as CartProduct} from '../../../../models/cart-item';
import styles from './styles';

interface CartItemProps {
  cartItem: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({cartItem}: CartItemProps) => {
  const {handleSubtractFromCart, handleAddToCart, handleRemoveFromCart} =
    useContext(CartContext);

  const handleRemoveProduct = () => {
    Alert.alert('', 'Deseja remover este item do carrinho?', [
      {text: 'Cancelar', onPress: () => false},
      {text: 'Remover', onPress: () => handleRemoveFromCart(cartItem.product)},
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={handleRemoveProduct}>
      <Image
        style={styles.imageArea}
        source={{uri: cartItem.product.image}}
        resizeMode="cover"
      />
      <View style={styles.infoArea}>
        <Text style={styles.nameText} numberOfLines={1}>
          {cartItem.product.name}
        </Text>
        <Text style={styles.priceText}>
          {intlCurrencyFormat(Number(cartItem.product.price))}
        </Text>
      </View>
      <View style={styles.interactionArea}>
        <Counter
          quantity={cartItem.quantity}
          handleAdd={() => handleAddToCart(cartItem.product)}
          handleSubtract={() => handleSubtractFromCart(cartItem.product)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
