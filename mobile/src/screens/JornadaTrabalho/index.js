import React, {useEffect} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {constante, token, conectado} from '../../core/helper';
import Logo from '../../components/logo';
import api from '../../services/api';

import {
  ContainerJornada,
  ContainerStatus,
  ContainerLeft,
  ContainerRight,
  ContainerHorizontal,
  ContainerVertical,
  Center,
  Background,
  Botao,
  TextoBotao,
  Text,
} from './styles';

function JornadaTrabalho({navigation}) {
  useEffect(() => {
    testarIntert();
  }, []);

  async function testarIntert() {
    const teste = await conectado();

    if (teste) {
      testarMacrosInternet();
    } else {
      testarMacrosSemInternet();
    }
  }

  async function testarMacrosSemInternet() {
    const macrosString = await AsyncStorage.getItem(constante.macros);
    const macros = JSON.parse(macrosString);

    erroSessao(macros);
  }

  async function testarMacrosInternet() {
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

    erroSessao(response.data[0].macros);
  }

  const erroSessao = macros => {
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
  };

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
      <Logo height={350} />
      <ContainerStatus>
        <ContainerLeft>
          <Text fontSize={16} title>
            Início da jornada
          </Text>
          <ContainerHorizontal>
            <Icons name="calendar-month" size={50} color="#fff" />
            <ContainerVertical>
              <Text fontSize={16}>01/01/2020</Text>
              <Text fontSize={16}>13:15:00</Text>
            </ContainerVertical>
          </ContainerHorizontal>
        </ContainerLeft>
        <ContainerRight>
          <Icons name="timer" size={50} color="#fff" />
          <TouchableOpacity onPress={irDetalhes}>
            <ContainerVertical>
              <Text fontSize={20} title>
                Status:
              </Text>
              <Text fontSize={18}>Jornada Não Iniciada</Text>
            </ContainerVertical>
          </TouchableOpacity>
        </ContainerRight>
      </ContainerStatus>
      <ContainerJornada>
        <Background>
          <Center>
            <ContainerHorizontal>
              <Icons
                name="steering"
                size={45}
                color="#fff"
                style={{marginRight: 10}}
              />
              <Text fontSize={22}>Veículo: </Text>
            </ContainerHorizontal>
            <Text fontSize={60}>JORNADA DE TRABALHO</Text>
            <Botao
              principal
              onPress={() => reportJornada('9', 'Inicio de Jornada')}>
              <TextoBotao principal>INICIAR</TextoBotao>
            </Botao>
            <Botao onPress={() => navigation.push('MotivoParada')}>
              <TextoBotao>PARADA/MOTIVO</TextoBotao>
            </Botao>
            <Botao onPress={() => reportJornada('10', 'Fim de Jornada')}>
              <TextoBotao>FIM</TextoBotao>
            </Botao>
          </Center>
        </Background>
      </ContainerJornada>
    </>
  );
}

export default JornadaTrabalho;
