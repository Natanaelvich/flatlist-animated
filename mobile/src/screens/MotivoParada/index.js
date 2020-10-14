import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import {
  Header,
  SubHeader,
  ContainerPrincipal,
  Background,
  Center,
  ContainerVertical,
  Card,
  Text,
  CircleIconBorder,
  CircleIconTemp,
} from './styles';
import {colors} from '../../core/helper';

function MotivoParada({navigation}) {
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
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default MotivoParada;
