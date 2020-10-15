import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, FlatList} from 'react-native';

import {
  Header,
  SubHeader,
  ContainerPrincipal,
  Background,
  Center,
  Card,
  Text,
  CircleIconBorder,
  CircleIconTemp,
} from './styles';
import {colors} from '../../core/helper';

function MotivoParada({navigation}) {
  const [motivos, setMotivos] = useState([
    'parada programada',
    'solicitação agente',
  ]);

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
          <FlatList
            keyExtractor={item => item}
            data={motivos}
            numColumns={2}
            horizontal={false}
            renderItem={({item}) => (
              <Card>
                <Text style={{color: colors.azulEscuro}} title fontSize={22}>
                  {item.toUpperCase()}
                </Text>
              </Card>
            )}
          />
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default MotivoParada;
