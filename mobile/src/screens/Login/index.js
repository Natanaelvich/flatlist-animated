import React, {useState, useEffect} from 'react';

import {Container, Botao, TextoBotao, Input, Label} from './styles';
import {colors} from '../../core/helper';

import Logo from '../../components/logo';

function Login({navigation}) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    setLogin('');
    setSenha('');
  });

  function handleLogin() {
    navigation.navigate('JornadaTrabalho');
  }

  return (
    <>
      <Logo />
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
