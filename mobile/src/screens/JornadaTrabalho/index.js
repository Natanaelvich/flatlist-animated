import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../components/logo';

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
  function irDetalhes() {
    navigation.push('Detalhes');
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
            <Botao principal>
              <TextoBotao principal>INICIAR</TextoBotao>
            </Botao>
            <Botao onPress={() => navigation.push('MotivoParada')}>
              <TextoBotao>PARADA/MOTIVO</TextoBotao>
            </Botao>
            <Botao>
              <TextoBotao>FIM</TextoBotao>
            </Botao>
          </Center>
        </Background>
      </ContainerJornada>
    </>
  );
}

export default JornadaTrabalho;
