import React from 'react';
import {ImageBackground} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../components/logo';

import {
  ContainerJornada,
  ContainerStatus,
  ContainerLeft,
  ContainerHorizontal,
  ContainerVertical,
  Background,
  Botao,
  TextoBotao,
  Text,
} from './styles';

function JornadaTrabalho() {
  return (
    <>
      <Logo />
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
      </ContainerStatus>
      <ContainerJornada>
        <Background>
          <Text>teste</Text>
        </Background>
      </ContainerJornada>
    </>
  );
}

export default JornadaTrabalho;
