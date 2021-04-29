import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import { theme } from '../../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background: ${theme.colors.background};
`;

export const TextContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-family: ${theme.fonts.mainBold}
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  line-height: 32px;
  font-family: ${theme.fonts.mainMedium}
`;

export const GroceryImage = styled(LottieView)`
  width: 200px;
  height: 200px;
  background: transparent;
`;
