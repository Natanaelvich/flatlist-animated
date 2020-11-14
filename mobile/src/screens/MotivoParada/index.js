import React, {useState, useEffect} from 'react';
import {TouchableOpacity, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  SubHeader,
  ContainerPrincipal,
  Background,
  Center,
  Card,
  Text,
  CircleIconBorder,
  CircleIconTemp,
} from './styles';
import {colors, contantes} from '../../core/helper';
import {localization} from '../../core/location';
import api from '../../services/api';

function MotivoParada({navigation}) {
  useEffect(() => {
    pegarMacros();
    pegarLocal();
  }, []);

  const [motivos, setMotivos] = useState([]);
  //coord: {lat: coords.latitude, long: coords.longitude},
  const [geolocation, setGeolocation] = useState({});

  async function pegarMacros() {
    const url = 'get_jornada.php';

    const form = new FormData();

    const hash = await AsyncStorage.getItem(contantes.hash);
    const idUser = await AsyncStorage.getItem(contantes.idUser);
    const idCliente = await AsyncStorage.getItem(contantes.idCliente);

    form.append('hash', hash);
    form.append('token', token);
    form.append('id_user', idUser);
    form.append('id_cliente', idCliente);

    const response = await api.post(url, form);

    if (response.data[0].macros) {
      setMotivos(response.data[0].macros);
    } else {
      Alert.alert('Erro', 'Houve um erro ao pegar as macros', [
        {
          text: 'Logar',
          onPress: () => {
            navigation.push('Login');
          },
        },
      ]);
    }
  }

  function pegarLocal() {
    localization()
      .then(result => {
        console.log('coords encontradas', result);
        setGeolocation(result);
      })
      .catch(err => {
        console.log('erro locate~> ', err);
        Alert.alert('Erro GPS', 'Erro na localização');
      })
      .finally(async () => {
        const coordString = await AsyncStorage.getItem('geopositionSave');
        const coords = JSON.parse(coordString);
        if (coords) {
          Alert.alert('Informação', 'Localização encontrada');
          setGeolocation(coords);
        }
      });
  }

  async function reportJornada(idMacro = '', descricaoMacro = '') {
    try {
      const url = 'envio_jornada.php';

      const form = new FormData();

      const hash = await AsyncStorage.getItem(contantes.hash);
      const idUser = await AsyncStorage.getItem(contantes.idUser);
      const idCliente = await AsyncStorage.getItem(contantes.idCliente);

      const dataTest = new Date();

      form.append('hash', hash);
      form.append('token', token);
      form.append('id_user', idUser);
      form.append('id_cliente', idCliente);
      form.append('id_macro', idMacro);
      form.append('descricao_macro', descricaoMacro);
      form.append('v_data', dataTest);
      // vai depender do tipo da macro
      form.append('data_ini', dataTest);
      form.append('data_fim', dataTest);
      form.append('tempo', dataTest.getHours());

      if (geolocation.coords) {
        form.append('lat', `${geolocation.coords.latitude}`);
        form.append('long', `${geolocation.coords.longitude}`);
      }

      const response = await api.post(url, form);
    } catch (error) {
      console.log('err ', err);
    }
  }

  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CircleIconBorder>
            <Icons name="arrow-left-thick" size={50} color="#fff" />
          </CircleIconBorder>
        </TouchableOpacity>
        <Center titleHeader>
          <CircleIconTemp>
            <Icons name="hand-right" size={70} color={colors.azulEscuro} />
          </CircleIconTemp>
        </Center>
      </Header>
      <SubHeader>
        <Text fontSize={30}>Motivo de parada</Text>
      </SubHeader>
      <ContainerPrincipal>
        <Background>
          <Center>
            <Icons
              name="steering"
              size={50}
              color="#fff"
              style={{marginRight: 10}}
            />
            <Text fontSize={30}>Veículo: BR1234</Text>
          </Center>
          <FlatList
            keyExtractor={item => item}
            data={motivos}
            numColumns={2}
            horizontal={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => reportJornada(item.idMacro, item.nome_macro)}>
                <Card>
                  <Text style={{color: colors.azulEscuro}} title fontSize={22}>
                    {item.nome_macro.toUpperCase()}
                  </Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default MotivoParada;
