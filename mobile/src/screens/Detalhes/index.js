import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

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
import {colors} from '../../core/helper';

function Detalhes({navigation}) {
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
                FABRÍCIO BARBOSA
              </Text>
              <Text fontSize={17}>Veículo BR1234</Text>
            </ContainerVertical>
          </Card>

          <Card>
            <Icons name="steering" size={70} color={colors.azulEscuro} />
            <ContainerVertical>
              <Text fontSize={21}>PLACA</Text>
              <Text fontSize={30} title>
                COX-9535
              </Text>
              {/*<Text fontSize={17}>Teste</Text>*/}
            </ContainerVertical>
          </Card>
          <Card>
            <Icons name="calendar-month" size={70} color={colors.azulEscuro} />
            <ContainerVertical>
              <Text fontSize={21}>DATA DE PARTIDA</Text>
              <Text fontSize={30} title>
                01/01/2020
              </Text>
              {/*<Text fontSize={17}>Teste</Text>*/}
            </ContainerVertical>
          </Card>
          <Card>
            <Icons name="calendar-month" size={70} color={colors.azulEscuro} />
            <ContainerVertical>
              <Text fontSize={21}>DATA DE CHEGADA</Text>
              <Text fontSize={30} title>
                01/01/2020
              </Text>
              {/*<Text fontSize={17}>Teste</Text>*/}
            </ContainerVertical>
          </Card>
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default Detalhes;
