import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles';
import styles from './styles';

const product = {
  id: '1',
  createdAt: '2019-09-02T12:58:54.103Z',
  name: 'Rustic Metal Fish',
  price: '289.00',
  image: 'http://lorempixel.com/640/480/food',
  stock: 65171,
};

const ProductDetails: React.FC = ({navigation: {goBack}}) => {
  const [quantity, setQuantity] = useState(0);

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
                {product.price}
                <Text style={styles.aditionalInfoText}> un.</Text>
              </Text>
              <Text style={styles.stockText}>
                {product.stock > 0 ? 'em estoque' : 'em falta'}
              </Text>
            </View>
            {product.stock > 0 && (
              <View style={styles.interactionArea}>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() => false}>
                  <Icon name="remove" color={colors.primary.light} size={20} />
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  value={String(quantity)}
                  onChangeText={text => setQuantity(Number(text))}
                />
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() => false}>
                  <Icon name="add" color={colors.primary.light} size={20} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.priceText}>Subtotal:</Text>
            <Text style={styles.priceText}>
              {Number(product.price) * quantity}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
