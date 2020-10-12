import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  ContainerPrincipal,
  Background,
  Center,
  ContainerHorizontal,
  ContainerVertical,
  Card,
  Text,
} from './styles';

function Detalhes() {
  return (
    <>
      <Header>
        <Icons name="arrow-left" size={50} color="#fff" />
        <Center>
          <Icons name="steering" size={90} color="#fff" />
        </Center>
      </Header>
      <ContainerPrincipal>
        <Background>
          <Card>
            <Text>teste</Text>
          </Card>
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default Detalhes;
