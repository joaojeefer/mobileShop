import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ErrorHandler} from '../../components';
import {ProductItem} from './components';
import api from '../../services/api';
import env from '../../config/environment';
import {Product} from '../../models/product';
import {colors} from '../../styles';
import styles from './styles';

interface ProductListProps {
  navigation: any;
}

const ProductList: React.FC<ProductListProps> = ({
  navigation: {navigate},
}: ProductListProps) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const handleNavigateToCartDetails = () => navigate('CartDetails');

  useEffect(() => {
    api
      .get(env.server.fetchProducts)
      .then(({data}) => setProducts(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {products.length > 0 && (
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>Produtos</Text>
          <Icon
            name="shopping-cart"
            color={colors.secondary.light}
            size={24}
            onPress={handleNavigateToCartDetails}
          />
        </View>
      )}
      {loading ? (
        <View style={styles.emptyArea}>
          <ActivityIndicator size="large" color={colors.primary.light} />
        </View>
      ) : (
        <FlatList
          data={products}
          contentContainerStyle={styles.scrolledContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.betweenItems} />}
          keyExtractor={product => String(product.id)}
          ListEmptyComponent={() => (
            <View style={styles.emptyArea}>
              <ErrorHandler description="Não existem produtos disponíveis no momento!" />
            </View>
          )}
          renderItem={({item: product}) => {
            return <ProductItem key={product.id} product={product} />;
          }}
          ListFooterComponent={() => <View style={styles.listFooter} />}
        />
      )}
    </View>
  );
};

export default ProductList;
