import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Counter} from '../../components';
import {CartContext} from '../../contexts/CartContext';
import {intlCurrencyFormat} from '../../utils/formatting';
import {colors} from '../../styles';
import styles from './styles';

interface ProductDetailsProps {
  navigation: any;
  route: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  navigation: {goBack},
  route,
}) => {
  const {product} = route.params;

  const {cart, handleAddToCart, handleSubtractFromCart} =
    useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const productQuantity = cart.find(
      item => item.product.id === product.id,
    )?.quantity;
    setQuantity(productQuantity || 0);
  }, [cart, product]);

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back"
        color={colors.secondary.light}
        size={30}
        style={styles.backButton}
        onPress={goBack}
      />
      <ScrollView
        contentContainerStyle={styles.scrolledContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Image
          style={styles.imageArea}
          source={{uri: product.image}}
          resizeMode="cover"
        />
        <View style={styles.contentArea}>
          <Text style={styles.nameText}>{product.name}</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.priceText}>
                {intlCurrencyFormat(product.price)}
                <Text style={styles.aditionalInfoText}> un.</Text>
              </Text>
              <Text style={styles.stockText}>
                {product.stock > 0 ? 'em estoque' : 'em falta'}
              </Text>
            </View>
            {product.stock > 0 && (
              <Counter
                quantity={quantity}
                handleAdd={() => handleAddToCart(product)}
                handleSubtract={() => handleSubtractFromCart(product)}
              />
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.priceText}>Subtotal:</Text>
            <Text style={styles.priceText}>
              {intlCurrencyFormat(Number(product.price) * quantity) ||
                'R$ 0,00'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
