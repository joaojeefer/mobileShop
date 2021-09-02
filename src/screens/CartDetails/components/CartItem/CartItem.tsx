import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Product} from '../../../../models.ts/product';
import {colors} from '../../../../styles';
import styles from './styles';

// extrair do contexto
type CartItem = {
  product: Product;
  quantity: number;
  price: number;
};

interface CartItemProps {
  cartItem: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({cartItem}: CartItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onLongPress={() => false}>
      <Image
        style={styles.imageArea}
        source={{uri: cartItem.product.image}}
        resizeMode="cover"
      />
      <View style={styles.infoArea}>
        <Text style={styles.nameText} numberOfLines={1}>
          {cartItem.product.name}
        </Text>
        <Text style={styles.priceText}>{cartItem.product.price}</Text>
      </View>
      <View style={styles.interactionArea}>
        <TouchableOpacity style={styles.counterButton} onPress={() => false}>
          <Icon name="remove" color={colors.primary.light} size={20} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={String(cartItem.quantity)}
          onChangeText={() => false}
        />
        <TouchableOpacity style={styles.counterButton} onPress={() => false}>
          <Icon name="add" color={colors.primary.light} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
