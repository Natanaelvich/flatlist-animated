import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
import {colors, constante} from '../../core/helper';

function Detalhes({navigation}) {
  const [motorista, setMotorista] = useState({
    id: '',
    nome: '',
  });
  const [datas, setDatas] = useState({inicio: '', fim: ''});

  useEffect(() => {
    pegarInfoMotorista();
    pegarDatas();
  }, []);

  async function pegarInfoMotorista() {
    const motoristaStringResponse = await AsyncStorage.getItem(
      constante.motorista,
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

  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CircleIcon>
            <Icons name="arrow-left-thick" size={50} color="#fff" />
          </CircleIcon>
        </TouchableOpacity>
        <Center>
          <Icons name="steering" size={90} color="#fff" />
        </Center>
      </Header>
      <ContainerPrincipal>
        <Background>
          <Card>
            <Icons
              name="card-account-details-outline"
              size={70}
              color={colors.azulEscuro}
            />
            <ContainerVertical>
              <Text fontSize={21}>MOTORISTA</Text>
              <Text fontSize={30} title>
                {motorista.nome}
              </Text>
              {/*<Text fontSize={17}>Veículo BR1234</Text>*/}
            </ContainerVertical>
          </Card>
          {/*<Card>
            <Icons name="steering" size={70} color={colors.azulEscuro} />
            <ContainerVertical>
              <Text fontSize={21}>PLACA</Text>
              <Text fontSize={30} title>
                COX-9535
              </Text>
              <Text fontSize={17}>Teste</Text>
            </ContainerVertical>
          </Card>*/}
          {datas.inicio ? (
            <Card>
              <Icons
                name="calendar-month"
                size={70}
                color={colors.azulEscuro}
              />
              <ContainerVertical>
                <Text fontSize={21}>DATA DE PARTIDA</Text>
                <Text fontSize={30} title>
                  01/01/2020
                </Text>
                {/*<Text fontSize={17}>Teste</Text>*/}
              </ContainerVertical>
            </Card>
          ) : null}
          {datas.fim ? (
            <Card>
              <Icons
                name="calendar-month"
                size={70}
                color={colors.azulEscuro}
              />
              <ContainerVertical>
                <Text fontSize={21}>DATA DE CHEGADA</Text>
                <Text fontSize={30} title>
                  01/01/2020
                </Text>
                {/*<Text fontSize={17}>Teste</Text>*/}
              </ContainerVertical>
            </Card>
          ) : null}
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default Detalhes;
