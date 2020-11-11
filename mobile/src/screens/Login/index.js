import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Botao, TextoBotao, Input, Label} from './styles';
import {colors, token, contantes, conectado} from '../../core/helper';
import api from '../../services/api';

import Logo from '../../components/logo';

function Login({navigation}) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    setLogin('');
    setSenha('');

    veirificarInternet();
  }, []);

  const veirificarInternet = async () => {
    const conectadoTest = await conectado();

    if (!conectadoTest) {
      Alert.alert('Aviso', 'Sem conexão com internet!', [
        {text: 'Ok', onPress: () => {}},
      ]);
    }
  };

  async function handleLogin() {
    try {
      veirificarInternet();

      const url = `login_jornada.php`;

      const form = new FormData();

      form.append('v_login', login);
      form.append('v_senha', senha);
      form.append('token', token);

      console.log('body ', form);

      const response = await api.post(url, form, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      });

      if (response.status == 200) {
        await AsyncStorage.setItem(
          contantes.RESPONSELOGIN,
          JSON.stringify(response.data),
        );
        navigation.navigate('JornadaTrabalho');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.errormsg) {
          Alert.alert('Erro', error.response.errormsg);
        }
      }
    }
  }

  return (
    <>
      <Logo height={450} />
      <Container>
        <Label color={colors.laranja}>LOGIN</Label>
        <Input onChangeText={text => setLogin(text)} value={login} />
        <Label color={colors.azul}>SENHA</Label>
        <Input
          onChangeText={text => setSenha(text)}
          value={senha}
          onSubmitEditing={() => handleLogin()}
        />

        <Botao onPress={() => handleLogin()}>
          <TextoBotao>ENTRAR</TextoBotao>
        </Botao>
      </Container>
    </>
  );
}

export default Login;
