import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, Menu, Divider, Button } from 'react-native-paper';

import {
  View,
  ButtonIcon
} from './styles';

const SettingsMenu = () => {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  const toggleMenuDisplay = () => {
    setVisible(!visible);
  }

  async function handleChangeUserName() {
    const user = await AsyncStorage.removeItem('@superMarketShopList:userName');

    console.log(user);

    navigation.navigate('UserName');
  }

  return (
    <Provider>
      <View>
        <Menu
          visible={visible}
          onDismiss={toggleMenuDisplay}
          anchor={
            <Button onPress={toggleMenuDisplay}>
              <ButtonIcon 
                name='settings'
                size={20}
              />
            </Button>
          }
        >
          <Menu.Item onPress={() => handleChangeUserName()} title='Trocar nome de usuário' />
          <Divider />
          <Menu.Item onPress={() => {}} title='Resetar' />
        </Menu>
      </View>
    </Provider>
  );
}

export default SettingsMenu;
