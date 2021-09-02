import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartDetails, ProductDetails, ProductList} from '../screens';
import {colors} from '../styles';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary.dark} />
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="ProductList" component={ProductList} />
          <Screen name="ProductDetails" component={ProductDetails} />
          <Screen name="CartDetails" component={CartDetails} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
