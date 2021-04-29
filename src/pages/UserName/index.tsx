import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { theme } from '../../infrastructure/theme';

import {
  Container,
  Emoji,
  Title,
  Input,
  Button,
  ButtonText
} from './styles';

export const UserName = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState('');

  const navigation = useNavigation();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputChange(inputValue: string) {
    setIsFilled(!!inputValue);
    setName(inputValue.trim());
  }

  async function handleSubmit() {
    if (!name) {
      Alert.alert('Como posso te chamar? 😉');
      return;
    }

    try {
      await AsyncStorage.setItem('@superMarketShopList:userName', name);

      navigation.navigate('Main');
    } catch (err) {
      Alert.alert(
        `Não foi possível salvar seu nome ${'\n'} Tente novamente`
      );
    }
  }

  return (
    <Container>
      <Emoji>
        {
          isFilled ? '😄' : '😃'
        }
      </Emoji>

      <Title>Qual seu nome?</Title>

      <Input
        placeholder='Nome'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleInputChange}
        style={
          (isFocused || isFilled) &&
          { borderColor: theme.colors.blue }
        }
      />

      <Button onPress={handleSubmit}>
        <ButtonText>Confirmar</ButtonText>
      </Button>
    </Container>
  );
}
