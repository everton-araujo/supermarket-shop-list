import React from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import groceryBasketAnimation from '../../assets/groceries-basket.json';

import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  GroceryImage
} from './styles';

export const WelcomePage = () => {
  const navigation = useNavigation();
  
  setInterval(() => {
    if (!AsyncStorage.getItem('@superMarketShopList:userName')) {
      return navigation.navigate('UserName');
    }
    
    navigation.navigate('Main');
  }, 2500);
  
  return (
    <Container>
      <TextContainer>
        <Title>Bem Vindo!</Title>
        <Subtitle>Vamos à lista de compras</Subtitle>
      </TextContainer>

      <GroceryImage
        source={groceryBasketAnimation}
        autoPlay
        loop={false}
      />

    </Container>
  );
}
