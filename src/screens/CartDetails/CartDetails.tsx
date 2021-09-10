import React, {useContext} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ErrorHandler} from '../../components';
import {CartItem} from './components';
import {CartContext} from '../../contexts/CartContext';
import {intlCurrencyFormat} from '../../utils/formatting';
import {colors} from '../../styles';
import styles from './styles';

interface CartDetailsProps {
  navigation: any;
}

const CartDetails: React.FC<CartDetailsProps> = ({navigation: {goBack}}) => {
  const {cart, calculateCartTotalPrice, handleEmptyCart} =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back"
        color={colors.secondary.light}
        size={30}
        onPress={goBack}
        style={styles.backButton}
      />
      <Text style={styles.titleText}>Carrinho de compras</Text>
      {cart.length > 0 && (
        <View style={styles.row}>
          <Text style={styles.priceText}>Total:</Text>
          <Text style={styles.priceText}>
            {intlCurrencyFormat(calculateCartTotalPrice())}
          </Text>
        </View>
      )}
      <FlatList
        data={cart}
        contentContainerStyle={styles.scrolledContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.betweenItems} />}
        keyExtractor={(_, index) => String(index)}
        ListEmptyComponent={() => (
          <View style={styles.emptyArea}>
            <ErrorHandler description="Seu carrinho de compras está vazio!" />
          </View>
        )}
        renderItem={({item: cartItem, index}) => (
          <CartItem key={String(index)} cartItem={cartItem} />
        )}
        ListFooterComponent={() =>
          cart.length > 0 ? (
            <TouchableOpacity
              style={styles.emptyCartArea}
              onPress={handleEmptyCart}>
              <Text style={styles.emptyCartText}>Esvaziar carrinho</Text>
              <Icon name="delete" color={colors.secondary.default} size={20} />
            </TouchableOpacity>
          ) : (
            <View />
          )
        }
      />
    </View>
  );
};

export default CartDetails;
