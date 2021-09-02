import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Product} from '../../../../models.ts/product';
import {colors} from '../../../../styles';
import styles from './styles';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
}: ProductItemProps) => {
  const navigation = useNavigation();

  const handleNavigateToProductDetails = () =>
    navigation.navigate('ProductDetails');
  return (
    <TouchableOpacity
      disabled={product.stock === 0}
      style={styles.container}
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
        <Text style={styles.priceText}>{product.price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => false}>
          <Icon
            name="add-shopping-cart"
            color={colors.primary.light}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
