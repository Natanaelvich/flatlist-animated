import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

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
import { colors, constante, token } from '../../core/helper';
import api from '../../services/api';

function MotivoParada() {
  const navigation = useNavigation();
  const [motivos, setMotivos] = useState([]);
  const { location } = useSelector(state => state.utils);

  const pegarMacros = useCallback(async () => {
    const url = 'get_jornada.php';

    const form = new FormData();

    const hash = await AsyncStorage.getItem(constante.hash);
    const idUser = await AsyncStorage.getItem(constante.idUser);
    const idCliente = await AsyncStorage.getItem(constante.idCliente);

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
            navigation.navigate('Login');
          },
        },
      ]);
    }
  }, [navigation]);

  useEffect(() => {
    pegarMacros();
  }, [pegarMacros]);

  async function reportJornada(idMacro = '', descricaoMacro = '') {
    try {
      const url = 'envio_jornada.php';

      const form = new FormData();

      const hash = await AsyncStorage.getItem(constante.hash);
      const idUser = await AsyncStorage.getItem(constante.idUser);
      const idCliente = await AsyncStorage.getItem(constante.idCliente);

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

      if (location) {
        form.append('lat', `${location.latitude}`);
        form.append('long', `${location.longitude}`);
      }

      await api.post(url, form);
    } catch (error) {
      console.log('err ', error);
    }
  }

  return (
    <>
      <StatusBar backgroundColor={colors.azulEscuro} style="light" />
      <View style={{ marginTop: 20 }} />
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CircleIconBorder>
            <MaterialCommunityIcons
              name="arrow-left-thick"
              size={50}
              color="#fff"
            />
          </CircleIconBorder>
        </TouchableOpacity>
        <Center titleHeader>
          <CircleIconTemp>
            <MaterialCommunityIcons
              name="hand-right"
              size={70}
              color={colors.azulEscuro}
            />
          </CircleIconTemp>
        </Center>
      </Header>
      <SubHeader>
        <Text fontSize={30}>Motivo de parada</Text>
      </SubHeader>
      <ContainerPrincipal>
        <Background>
          <Center>
            <MaterialCommunityIcons
              name="steering"
              size={50}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text fontSize={30}>Veículo: BR1234</Text>
          </Center>
          <FlatList
            keyExtractor={item => item.idMacro}
            data={motivos}
            numColumns={2}
            horizontal={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => reportJornada(item.idMacro, item.nome_macro)}
              >
                <Card>
                  <Text
                    style={{ color: colors.azulEscuro }}
                    title
                    fontSize={22}
                  >
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
