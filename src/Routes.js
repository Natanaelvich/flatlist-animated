import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import { useSelector } from 'react-redux';
import { constante } from './core/helper';
import api from './services/api';

import Login from './screens/Login';
import JornadaTrabalho from './screens/JornadaTrabalho';
import Detalhes from './screens/Detalhes';
import MotivoParada from './screens/MotivoParada';

const Stack = createStackNavigator();

async function listaReq() {
  const listaString = await AsyncStorage.getItem(constante.LISTAREQUEST);

  if (!listaString) {
    await AsyncStorage.setItem(constante.LISTAREQUEST, JSON.stringify([]));
  } else {
    const lista = JSON.parse(listaString);

    if (lista.length > 0) {
      lista.map(async req => {
        const response = await api.post('/report_jornada.php', req);
        console.log('res ', response.data);
      });
    }
  }
}

const Routes = () => {
  const { logged } = useSelector(state => state.user);

  useEffect(() => {
    listaReq();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!logged ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="JornadaTrabalho" component={JornadaTrabalho} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
            <Stack.Screen name="MotivoParada" component={MotivoParada} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
