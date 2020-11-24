import React, {useState, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Botao, TextoBotao, Input, Label} from './styles';
import {colors, token, constante, veirificarInternet} from '../../core/helper';
import api from '../../services/api';

import Logo from '../../components/logo';

function Login({navigation}) {
  const refSenha = useRef();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    setLogin('');
    setSenha('');

    verificarSessao();
  }, []);

  async function handleLogin() {
    console.log('teste');

    try {
      console.log('teste 2');

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

      console.log('res ', response.data);

      const motorista = {
        id: response.data[0].id_motorista,
        nome: response.data[0].motorista,
      };

      await AsyncStorage.setItem(constante.hash, response.data[0].hash);
      await AsyncStorage.setItem(constante.idUser, response.data[0].id_user);
      await AsyncStorage.setItem(
        constante.idCliente,
        response.data[0].id_ciente,
      );
      await AsyncStorage.setItem(
        constante.motorista,
        JSON.stringify(motorista),
      );
      await AsyncStorage.setItem(
        constante.macros,
        JSON.stringify(response.data[0].macros),
      );

      navigation.push('JornadaTrabalho');
    } catch (error) {
      if (error.response) {
        if (error.response.errormsg) {
          Alert.alert('Erro', error.response.errormsg);
        }
      }
    }
  }

  async function verificarSessao() {
    const hash = await AsyncStorage.getItem(constante.hash);

    if (hash) {
      //Alert.alert('Login', 'Deseja voltar para sessão anterior ou logar novamente?')
      navigation.push('JornadaTrabalho');
    }
  }

  return (
    <>
      <Logo height={450} />
      <Container>
        <Label color={colors.laranja}>LOGIN</Label>
        <Input
          onChangeText={text => setLogin(text)}
          value={login}
          onSubmitEditing={() => refSenha.current.focus()}
        />
        <Label color={colors.azul}>SENHA</Label>
        <Input
          ref={refSenha}
          onChangeText={text => setSenha(text)}
          value={senha}
          onSubmitEditing={() => handleLogin()}
          secureTextEntry
        />

        <Botao onPress={() => handleLogin()}>
          <TextoBotao>ENTRAR</TextoBotao>
        </Botao>
      </Container>
    </>
  );
}

export default Login;
