/* eslint-disable react/style-prop-object */
import React, { useCallback, useEffect } from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { constante, token, conectado } from '../../core/helper';
import Background from '../../components/Background';
import api from '../../services/api';
import logo from '../../assets/logo.png';

import {
  ContainerStatus,
  ContainerLeft,
  ContainerRight,
  ContainerHorizontal,
  ContainerVertical,
  Background as BackgroundLocal,
  Botao,
  TextoBotao,
  Text,
  ContentJornada,
} from './styles';

function JornadaTrabalho() {
  const navigation = useNavigation();
  const { location } = useSelector(state => state.utils);

  const erroSessao = useCallback(
    macros => {
      if (!macros) {
        Alert.alert('Erro', 'Houve um erro ao pegar as macros', [
          {
            text: 'Logar',
            onPress: () => {
              navigation.push('Login');
            },
          },
        ]);
      }
    },
    [navigation]
  );

  const testarMacrosSemInternet = useCallback(async () => {
    const macrosString = await AsyncStorage.getItem(constante.macros);
    const macros = JSON.parse(macrosString);

    erroSessao(macros);
  }, [erroSessao]);

  const testarIntert = useCallback(async () => {
    const isConnected = await conectado();

    if (isConnected) {
      //   testarMacrosInternet();
    } else {
      testarMacrosSemInternet();
    }
  }, [testarMacrosSemInternet]);

  useEffect(() => {
    testarIntert();
  }, [testarIntert]);

  function irDetalhes() {
    navigation.push('Detalhes');
  }

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

      // pode ser o valor da ultima jornada
      form.append('data_fim', dataTest);
      form.append('tempo', dataTest.getHours());

      if (location?.latitude && location?.longitude) {
        form.append('lat', `${location.latitude}`);
        form.append('long', `${location.longitude}`);
      }

      const response = await api.post(url, form);
    } catch (error) {
      console.log('err ', error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 20,
      }}
    >
      <Background>
        <Image
          resizeMode="contain"
          source={logo}
          style={{ alignSelf: 'center', height: '80%', marginTop: 20 }}
        />
      </Background>

      <ContainerStatus>
        <ContainerLeft>
          <Text fontSize={16} title>
            Início da jornada
          </Text>
          <ContainerHorizontal>
            <MaterialCommunityIcons
              name="calendar-month"
              size={50}
              color="#fff"
            />
            <ContainerVertical>
              <Text fontSize={16}>01/01/2020</Text>
              <Text fontSize={16}>13:15:00</Text>
            </ContainerVertical>
          </ContainerHorizontal>
        </ContainerLeft>
        <ContainerRight onPress={irDetalhes}>
          <MaterialCommunityIcons name="timer" size={50} color="#fff" />
          <ContainerVertical>
            <Text fontSize={20} title>
              Status:
            </Text>
            <Text fontSize={16}>Não Iniciada</Text>
          </ContainerVertical>
        </ContainerRight>
      </ContainerStatus>

      <BackgroundLocal>
        <ContentJornada>
          <ContainerHorizontal>
            <MaterialCommunityIcons
              name="steering"
              size={45}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text fontSize={22}>Veículo: </Text>
          </ContainerHorizontal>
          <Text fontSize={24}>JORNADA DE TRABALHO</Text>
          <Botao
            principal
            onPress={() => reportJornada('9', 'Inicio de Jornada')}
          >
            <TextoBotao principal>INICIAR</TextoBotao>
          </Botao>
          <Botao onPress={() => navigation.push('MotivoParada')}>
            <TextoBotao>PARADA/MOTIVO</TextoBotao>
          </Botao>
          <Botao onPress={() => reportJornada('10', 'Fim de Jornada')}>
            <TextoBotao>FIM</TextoBotao>
          </Botao>
        </ContentJornada>
      </BackgroundLocal>
    </ScrollView>
  );
}

export default JornadaTrabalho;
