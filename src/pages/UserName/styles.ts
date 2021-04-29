import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background: ${theme.colors.background};
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  margin-top: -50px;
  font-size: 32px;
  font-family: ${theme.fonts.main};
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  width: 60%;
  font-size: 18px;
  text-align: center;
  border-color: ${theme.colors.gray};
`;

// export const Button = styled(RectButton)`
export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 80px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.blue_light};
`;

export const ButtonText = styled.Text`

`;
