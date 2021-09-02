import React, {useContext} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ErrorHandler} from '../../components';
import {CartItem} from './components';
import {CartContext} from '../../contexts/CartContext';
import {colors} from '../../styles';
import styles from './styles';

const cart = [
  {
    product: {
      id: '1',
      createdAt: '2019-09-02T12:58:54.103Z',
      name: 'Rustic Metal Fish',
      price: '289.00',
      image: 'http://lorempixel.com/640/480/food',
      stock: 65171,
    },
    quantity: 100,
    price: 10,
  },
  {
    product: {
      id: '2',
      createdAt: '2019-09-02T07:59:58.181Z',
      name: 'Sleek Wooden Soap',
      price: '430.00',
      image: 'http://lorempixel.com/640/480/transport',
      stock: 91260,
    },
    quantity: 100,
    price: 10,
  },
];
const CartDetails: React.FC = ({navigation: {goBack}}) => {
  // const {cart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back"
        color={colors.secondary.light}
        size={30}
        onPress={goBack}
      />
      <ScrollView
        contentContainerStyle={styles.scrolledContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.titleText}>Carrinho de compras</Text>
        <FlatList
          data={cart}
          contentContainerStyle={styles.scrolledContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.betweenItems} />}
          keyExtractor={(_, index) => String(index)}
          ListEmptyComponent={() => (
            <View style={styles.emptyArea}>
              <ErrorHandler description="Seu carrinho de compras está vazio. Vamos às compras?" />
            </View>
          )}
          renderItem={({item: cartItem, index}) => (
            <CartItem key={String(index)} cartItem={cartItem} />
          )}
        />
        <View style={styles.row}>
          <Text style={styles.priceText}>Total:</Text>
          <Text style={styles.priceText}>10000</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartDetails;
