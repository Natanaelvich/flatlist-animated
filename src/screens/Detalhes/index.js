import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Header,
  ContainerPrincipal,
  Background,
  Center,
  ContainerVertical,
  Card,
  Text,
  CircleIcon,
} from './styles';
import { colors, constante } from '../../core/helper';

function Detalhes() {
  const navigation = useNavigation();

  const [motorista, setMotorista] = useState({
    id: '',
    nome: '',
  });
  const [datas, setDatas] = useState({ inicio: '', fim: '' });

  async function pegarInfoMotorista() {
    const motoristaStringResponse = await AsyncStorage.getItem(
      constante.motorista
    );

    const motoristaResponse = JSON.parse(motoristaStringResponse);

    setMotorista(motoristaResponse);
  }

  async function pegarDatas() {
    const responseDatasString = await AsyncStorage.getItem(constante.datas);

    if (responseDatasString) {
      const responseDatas = JSON.parse(responseDatasString);

      setDatas(responseDatas);
    }
  }

  useEffect(() => {
    pegarInfoMotorista();
    pegarDatas();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.azulEscuro} style="light" />
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CircleIcon>
            <MaterialCommunityIcons
              name="arrow-left-thick"
              size={31}
              color="#fff"
            />
          </CircleIcon>
        </TouchableOpacity>
        <Center>
          <MaterialCommunityIcons name="steering" size={61} color="#fff" />
        </Center>
      </Header>
      <ContainerPrincipal>
        <Background>
          <Card>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={50}
              color={colors.azulEscuro}
            />
            <ContainerVertical>
              <Text fontSize={18}>MOTORISTA</Text>
              <Text fontSize={21} title>
                {motorista.nome}
              </Text>
              {/* <Text fontSize={17}>Veículo BR1234</Text> */}
            </ContainerVertical>
          </Card>
          {/* <Card>
            <MaterialCommunityIcons name="steering" size={70} color={colors.azulEscuro} />
            <ContainerVertical>
              <Text fontSize={21}>PLACA</Text>
              <Text fontSize={30} title>
                COX-9535
              </Text>
              <Text fontSize={17}>Teste</Text>
            </ContainerVertical>
          </Card> */}
          {datas.inicio ? (
            <Card>
              <MaterialCommunityIcons
                name="calendar-month"
                size={31}
                color={colors.azulEscuro}
              />
              <ContainerVertical>
                <Text fontSize={21}>DATA DE PARTIDA</Text>
                <Text fontSize={30} title>
                  01/01/2020
                </Text>
                {/* <Text fontSize={17}>Teste</Text> */}
              </ContainerVertical>
            </Card>
          ) : null}
          {datas.fim ? (
            <Card>
              <MaterialCommunityIcons
                name="calendar-month"
                size={70}
                color={colors.azulEscuro}
              />
              <ContainerVertical>
                <Text fontSize={21}>DATA DE CHEGADA</Text>
                <Text fontSize={30} title>
                  01/01/2020
                </Text>
                {/* <Text fontSize={17}>Teste</Text> */}
              </ContainerVertical>
            </Card>
          ) : null}
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default Detalhes;
