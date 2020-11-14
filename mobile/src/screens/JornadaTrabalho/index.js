import React, {useEffect} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {contantes, token, conectado} from '../../core/helper';
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
    const responseString = await AsyncStorage.getItem(contantes.RESPONSELOGIN);

    const response = JSON.parse(responseString);

    // depois que atualizar na api de entregas para macros
    erroSessao(response.macros);
  }

  async function testarMacrosInternet() {
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

  // esperando novo endpoint
  async function reportJornada(id = '', motivo = '') {
    console.log('fim');
    /*const body = {
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
    }*/
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
            <Botao principal onPress={() => reportJornada()}>
              <TextoBotao principal>INICIAR</TextoBotao>
            </Botao>
            <Botao onPress={() => navigation.push('MotivoParada')}>
              <TextoBotao>PARADA/MOTIVO</TextoBotao>
            </Botao>
            <Botao onPress={() => reportJornada()}>
              <TextoBotao>FIM</TextoBotao>
            </Botao>
          </Center>
        </Background>
      </ContainerJornada>
    </>
  );
}

export default JornadaTrabalho;
