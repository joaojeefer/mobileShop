import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../../../models/product';
import {CartContext} from '../../../../contexts/CartContext';
import {intlCurrencyFormat} from '../../../../utils/formatting';
import {RootRoutes} from '../../../../routes/types';
import {colors} from '../../../../styles';
import styles, {Container} from './styles';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
}: ProductItemProps) => {
  const {inCart, handleAddToCart} = useContext(CartContext);

  const {navigate} = useNavigation();

  const handleNavigateToProductDetails = () =>
    navigate(RootRoutes.PRODUCT_DETAILS, {product});

  return (
    <Container
      inCart={inCart(product.id)}
      disabled={product.stock === 0}
      onPress={handleNavigateToProductDetails}>
      <Image
        style={styles.imageArea}
        source={{uri: product.image}}
        resizeMode="cover"
      />
      <View style={styles.infoArea}>
        <Text style={styles.nameText} numberOfLines={3}>
          {product.name}
        </Text>
        <Text style={styles.priceText}>
          {intlCurrencyFormat(Number(product.price))}
        </Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(product)}>
          <Icon
            name={inCart(product.id) ? 'shopping-cart' : 'add-shopping-cart'}
            color={colors.primary.light}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ProductItem;
