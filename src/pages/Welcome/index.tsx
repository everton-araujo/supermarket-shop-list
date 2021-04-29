import React from 'react';

import groceryBasketAnimation from '../../assets/groceries-basket.json';

import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  GroceryImage
} from './styles';

export const WelcomePage = () => {
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
