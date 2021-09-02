import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ErrorHandler} from '../../components';
import {ProductItem} from './components';
import {colors} from '../../styles';
import styles from './styles';

const products = [
  {
    id: '1',
    createdAt: '2019-09-02T12:58:54.103Z',
    name: 'Rustic Metal Fish',
    price: '289.00',
    image: 'http://lorempixel.com/640/480/food',
    stock: 65171,
  },
  {
    id: '2',
    createdAt: '2019-09-02T07:59:58.181Z',
    name: 'Sleek Wooden Soap',
    price: '430.00',
    image: 'http://lorempixel.com/640/480/transport',
    stock: 91260,
  },
  {
    id: '3',
    createdAt: '2019-09-02T22:14:05.454Z',
    name: 'Small Cotton Shoes',
    price: '993.00',
    image: 'http://lorempixel.com/640/480/sports',
    stock: 36608,
  },
];

const ProductList: React.FC = ({navigation: {navigate}}) => {
  const handleNavigateToCartDetails = () => navigate('CartDetails');

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
      />
    </View>
  );
};

export default ProductList;
