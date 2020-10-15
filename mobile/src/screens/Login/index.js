import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Botao, TextoBotao, Input, Label} from './styles';
import {colors, token, contantes} from '../../core/helper';
import api from '../../services/api';

import Logo from '../../components/logo';

function Login({navigation}) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    setLogin('');
    setSenha('');
  });

  async function handleLogin() {
    const url = `login.php?v_login=${login}&v_senha=${senha}&v_token=${token}`;

    const response = await api.post(url);

    if (response.status == 200) {
      await AsyncStorage.setItem(
        contantes.RESPONSELOGIN,
        JSON.stringify(response.data),
      );
      navigation.navigate('JornadaTrabalho');
    }
  }

  return (
    <>
      <Logo height={450} />
      <Container>
        <Label color={colors.laranja}>LOGIN</Label>
        <Input onChangeText={text => setLogin(text)} value={login} />
        <Label color={colors.azul}>SENHA</Label>
        <Input onChangeText={text => setSenha(text)} value={senha} />

        <Botao onPress={() => handleLogin()}>
          <TextoBotao>ENTRAR</TextoBotao>
        </Botao>
      </Container>
    </>
  );
}

export default Login;
