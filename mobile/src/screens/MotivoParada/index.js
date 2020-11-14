import React, {useState, useEffect} from 'react';
import {TouchableOpacity, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

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
import {colors, reportJornada, contantes} from '../../core/helper';
import api from '../../services/api';

function MotivoParada({navigation}) {
  useEffect(() => {
    pegarMacros();
  }, []);

  const [motivos, setMotivos] = useState([]);

  async function pegarMacros() {
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

    if (response.data[0].macros) {
      setMotivos(response.data[0].macros);
    } else {
      Alert.alert('Erro', 'Houve um erro ao pegar as macros', [
        {
          text: 'Logar',
          onPress: () => {
            navigation.push('Login');
          },
        },
      ]);
    }
  }

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
              <TouchableOpacity onPress={() => reportJornada(item, item)}>
                <Card>
                  <Text style={{color: colors.azulEscuro}} title fontSize={22}>
                    {item.nome_macro.toUpperCase()}
                  </Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </Background>
      </ContainerPrincipal>
    </>
  );
}

export default MotivoParada;
