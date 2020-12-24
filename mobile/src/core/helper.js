import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

import api from '../services/api';

export const colors = {
  laranja: '#f89d33',
  azul: '#185f80',
  azulEscuro: '#012A3E',
  azulMaisEscuro: '#011724',
};

export const token = '41db1141fd558a11ad2d1995831a9f8a';

export const constante = {
  idUser: 'ID',
  idCliente: 'IDCLIENTE',
  hash: 'HASH',
  LISTAREQUEST: 'lista@requests',
  ULTIMAJORNADA: 'jornada@ultima',
  macros: 'macros',
  motorista: 'motorista',
  datas: 'datas',
};

// motorista = {id:'',nome:''}
// datas = {inicio:'',fim:''}

export const pegarOrientation = (
  Dimensions,
  setOrientation = (value = '') => {},
) => {
  if (Dimensions.get('window').width < Dimensions.get('window').height) {
    console.log('portrait');
    setOrientation('portrait');
  } else {
    console.log('landscape');
    setOrientation('landscape');
  }
};

export const conectado = async () => {
  const response = await NetInfo.fetch();

  // true ou false
  return response.isConnected;
};

export const veirificarInternet = async () => {
  const conectadoTest = await conectado();

  if (!conectadoTest) {
    Alert.alert('Aviso', 'Sem conexão com internet!', [
      {text: 'Ok', onPress: () => {}},
    ]);
  }
};

/*
.then(state => {
  console.log('conectado~>', state.isConnected);
  console.log('tipo~> ', state.type);
  return state.isConnected;
});
*/
