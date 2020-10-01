import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import JornadaTrabalho from './screens/JornadaTrabalho';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="JornadaTrabalho" component={JornadaTrabalho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
