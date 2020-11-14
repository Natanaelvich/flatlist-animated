import {Platform, PermissionsAndroid, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';

import AsyncStorage from '@react-native-community/async-storage';

async function getLocalization(resolve) {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      async position => {
        console.log('coordenadas encontradas');
        // salvar no storage
        await AsyncStorage.setItem('geopositionSave', JSON.stringify(position));
        resolve(position);
      },
      error => {
        console.log('erro gps~> ', error.message);
        return localization();
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  } else if (Platform.OS === 'android') {
    console.log('teste android');

    const grant = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Acesso ao GPS',
        message: 'Precisamos do acesso ao GPS',
        buttonNeutral: 'Depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'Aceitar',
      },
    );

    //console.log('grant gps', grant);
    if (grant === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('teste permissão');
      Geolocation.getCurrentPosition(
        async position => {
          console.log('coordenadas encontradas~> ', position);
          // salvar no storage
          await AsyncStorage.setItem(
            'geopositionSave',
            JSON.stringify(position),
          );
          resolve(position);
        },
        error => {
          console.log('err gps android', error);
          return localization(false);
        },
        {enableHighAccuracy: true, timeout: 25000, maximumAge: 20000},
      );
    } else {
      return localization();
    }
  }
}

export function localization(testeGpsOn = true) {
  return new Promise(async function (resolve, reject) {
    console.log('teste locate');
    try {
      let responseTesteGpsOn = false;

      if (testeGpsOn) {
        responseTesteGpsOn = await DeviceInfo.isLocationEnabled();

        if (!responseTesteGpsOn) {
          Alert.alert(
            'Localização desligada',
            'Necessitamos que você ative o GPS e tente novamente',
            [
              {
                text: 'Tentar novamente',
                onPress: () => {
                  localization();
                },
              },
            ],
          );
        }

        if (responseTesteGpsOn) {
          await getLocalization(resolve);
        }
      }
    } catch (error) {
      console.log('err gps: ', error);
      Alert.alert(`ERRO: ${error}`, '', [
        {text: 'De novo', onPress: () => localization()},
      ]);
    }
  });
}
