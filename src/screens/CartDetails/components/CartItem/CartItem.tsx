import React, {useContext} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CartContext} from '../../../../contexts/CartContext';
import {intlCurrencyFormat} from '../../../../utils/formatting';
import {CartItem as CartProduct} from '../../../../models.ts/cart-item';
import {colors} from '../../../../styles';
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
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => handleSubtractFromCart(cartItem.product)}>
          <Icon name="remove" color={colors.primary.light} size={20} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{String(cartItem.quantity)}</Text>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => handleAddToCart(cartItem.product)}>
          <Icon name="add" color={colors.primary.light} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
