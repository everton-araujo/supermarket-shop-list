import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const StackRoutes = createStackNavigator();

import { WelcomePage } from '../pages/Welcome';
import { UserName } from '../pages/UserName';
import { MainPage } from '../pages/Main';

const AppRoutes: React.FC = () => {
  return (
    <StackRoutes.Navigator headerMode='none'>
      <StackRoutes.Screen name='Welcome' component={WelcomePage} />
      <StackRoutes.Screen name='UserName' component={UserName} />
      <StackRoutes.Screen name='Main' component={MainPage} />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;
