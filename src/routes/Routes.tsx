import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartDetails, ProductDetails, ProductList} from '../screens';
import {RootRoutes, RootStackParamList} from './types';
import {colors} from '../styles';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary.dark} />
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name={RootRoutes.PRODUCT_LIST} component={ProductList} />
          <Screen
            name={RootRoutes.PRODUCT_DETAILS}
            component={ProductDetails}
          />
          <Screen name={RootRoutes.CART_DETAILS} component={CartDetails} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
