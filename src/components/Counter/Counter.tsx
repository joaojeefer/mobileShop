import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles';
import styles from './styles';

interface CounterProps {
  quantity: number;
  handleAdd: () => void;
  handleSubtract: () => void;
}

const Counter: React.FC<CounterProps> = ({
  quantity,
  handleAdd,
  handleSubtract,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.counterButton} onPress={handleSubtract}>
        <Icon name="remove" color={colors.primary.light} size={20} />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{String(quantity)}</Text>
      <TouchableOpacity style={styles.counterButton} onPress={handleAdd}>
        <Icon name="add" color={colors.primary.light} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
