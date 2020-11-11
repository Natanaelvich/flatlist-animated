import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

import api from '../services/api';

export const colors = {
  laranja: '#f89d33',
  azul: '#185f80',
  azulEscuro: '#012A3E',
  azulMaisEscuro: '#011724',
};

export const token = '41db1141fd558a11ad2d1995831a9f8a';

export const contantes = {
  RESPONSELOGIN: 'response@login',
  LISTAREQUEST: 'lista@requests',
};

export const conectado = async () => {
  const response = await NetInfo.fetch();

  return response.isConnected;
};

/*
.then(state => {
  console.log('conectado~>', state.isConnected);
  console.log('tipo~> ', state.type);
  return state.isConnected;
});
*/

export async function reportJornada(id = '', motivo = '') {
  const body = {
    memoria: 'S',
    data_envio: '2020-10-14 08:05:22',
    pessoaid: '0000000003',
    pessoanome: 'ELIAS VAZ',
    data_macro: '2020-10-14 08:06:29',
    veiculo: 'ETN5710',
    0: {
      nome_macro: 'Descanso',
      data_macro_atual: '2020-10-14 08:06:29',
      nome_macro_anterior: 'Inicio Jornada',
      data_macro_anterior: '2020-10-14 07:06:29',
    },
  };

  if (conectado()) {
    const response = await api.get('/report_jornada.php', body);

    console.log('res ', response.data);
  } else {
    Alert.alert('Aviso Sem Conexão', 'Requisição será salva no dispositivo', [
      {text: 'Ok', onPress: () => {}},
    ]);

    const listaString = await AsyncStorage.getItem(contantes.LISTAREQUEST);
    const lista = JSON.parse(listaString);

    lista.push(body);

    await AsyncStorage.setItem(contantes.LISTAREQUEST, JSON.stringify(lista));
  }
}
