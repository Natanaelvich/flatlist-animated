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

function MotivoParada({navigation}) {
  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CircleIcon>
            <Icons name="arrow-left-thick" size={50} color="#fff" />
          </CircleIcon>
        </TouchableOpacity>
        <Center titleHeader>
          <Icons name="hand-right" size={90} color="#fff" />
        </Center>
      </Header>
      <ContainerPrincipal>
        <Background>
          <Center>
            <Icons name="steering" size={70} color="#fff" />
          </Center>
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default MotivoParada;
